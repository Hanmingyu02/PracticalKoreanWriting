const $ = id => document.getElementById(id);
const EXAM_DAY = Date.UTC(2026, 10, 21);
const DAY_MS = 86400000;
const KOREA_OFFSET_MS = 9 * 60 * 60 * 1000;
const PLAN_MONTHS = [{year:2026,month:9},{year:2026,month:10},{year:2026,month:11},{year:2027,month:0},{year:2027,month:1}];
const initialKoreanDate = new Date(Date.now() + KOREA_OFFSET_MS);
let planMonthIndex = Math.max(0, PLAN_MONTHS.findIndex(item => item.year === initialKoreanDate.getUTCFullYear() && item.month === initialKoreanDate.getUTCMonth()));
function updateExamCountdown(now = new Date()) {
  // 날짜만 한국 시간 기준으로 비교하여 시차와 일광 절약 시간의 영향을 피합니다.
  const koreanDay = Math.floor((now.getTime() + KOREA_OFFSET_MS) / DAY_MS) * DAY_MS;
  const days = Math.round((EXAM_DAY - koreanDay) / DAY_MS);
  $('exam-dday').textContent = days > 0 ? `D-${days}` : days === 0 ? 'D-DAY' : `D+${-days}`;
  $('exam-dday').setAttribute('aria-label', days > 0 ? `시험까지 ${days}일` : days === 0 ? '오늘은 시험일입니다' : `시험일로부터 ${-days}일 지났습니다`);
  renderPlanCalendars(now);
}
function renderPlanCalendars(now = new Date()) {
  const korean = new Date(now.getTime() + KOREA_OFFSET_MS);
  const today = `${korean.getUTCFullYear()}-${String(korean.getUTCMonth() + 1).padStart(2, '0')}-${String(korean.getUTCDate()).padStart(2, '0')}`;
  const selectedMonth = PLAN_MONTHS[planMonthIndex];
  $('calendar-month-label').textContent = `${selectedMonth.year}년 ${selectedMonth.month + 1}월`;
  $('calendar-previous').disabled = planMonthIndex === 0;
  $('calendar-next').disabled = planMonthIndex === PLAN_MONTHS.length - 1;
  $('plan-calendars').replaceChildren(...[selectedMonth].map(({year, month}) => {
    const table = document.createElement('table');
    table.className = 'plan-calendar';
    const caption = document.createElement('caption');
    caption.textContent = `${year}년 ${month + 1}월`;
    caption.className = 'visually-hidden';
    const head = document.createElement('thead');
    const header = document.createElement('tr');
    for (const day of ['일', '월', '화', '수', '목', '금', '토']) {
      const th = document.createElement('th');
      th.scope = 'col';
      th.textContent = day;
      header.append(th);
    }
    head.append(header);
    const body = document.createElement('tbody');
    const firstWeekday = new Date(Date.UTC(year, month, 1)).getUTCDay();
    const days = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    for (let start = 0; start < Math.ceil((firstWeekday + days) / 7) * 7; start += 7) {
      const row = document.createElement('tr');
      for (let weekday = 0; weekday < 7; weekday++) {
        const cell = document.createElement('td');
        const day = start + weekday - firstWeekday + 1;
        if (day > 0 && day <= days) {
          const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const time = document.createElement('time');
          time.dateTime = date;
          time.textContent = day;
          cell.append(time);
          if (date === today) {
            cell.classList.add('calendar-today');
            time.setAttribute('aria-current', 'date');
          }
          if (date === '2026-11-21') {
            cell.classList.add('calendar-exam');
            const label = document.createElement('span');
            label.textContent = '시험';
            label.className = 'calendar-exam-label';
            cell.append(label);
            time.setAttribute('aria-label', '11월 21일 토요일, 한국실용글쓰기 시험일');
          }
        } else cell.className = 'calendar-blank';
        row.append(cell);
      }
      body.append(row);
    }
    table.append(caption, head, body);
    return table;
  }));
}
$('calendar-previous').onclick = () => {
  if (planMonthIndex > 0) { planMonthIndex--; renderPlanCalendars(); }
};
$('calendar-next').onclick = () => {
  if (planMonthIndex < PLAN_MONTHS.length - 1) { planMonthIndex++; renderPlanCalendars(); }
};
let countdownTimer;
function refreshExamCountdown() {
  updateExamCountdown();
  clearTimeout(countdownTimer);
  const untilMidnight = DAY_MS - ((Date.now() + KOREA_OFFSET_MS) % DAY_MS);
  countdownTimer = setTimeout(refreshExamCountdown, untilMidnight + 50);
}
refreshExamCountdown();
window.addEventListener('focus', refreshExamCountdown);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) refreshExamCountdown();
});
const STORAGE_KEY = 'bareun-study-v1';
const emptyState = () => ({ answered: 0, correct: 0, streak: 0, wrong: [] });
let state = emptyState();
try {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (stored && ['answered','correct','streak'].every(k => Number.isSafeInteger(stored[k]) && stored[k] >= 0) && stored.correct <= stored.answered && Array.isArray(stored.wrong)) {
    state = { ...stored, wrong: [...new Set(stored.wrong.filter(id => QUESTIONS.some(q => q.id === id)))] };
  }
} catch { /* Private browsing and unavailable storage still allow quizzes. */ }
let category = '전체 영역';
let wrongMode = false;
let wrongRetryActive = false;
let notesMode = false;
let lastPracticeMode = 'all';
let memoMode = false;
let mockMode = false;
let pastMode = false;
let analysisMode = false;
let planMode = false;
let current = null;
let answered = false;
let queue = [];
let roundStarted = false;
let roundTotal = 0;
let roundAnswered = 0;
let roundCorrect = 0;
let roundWrongIds = new Set();
let roundOverrideIds = null;
let roundScope = '';
function currentRoundScope() {
  return `${wrongMode ? 'wrong' : 'all'}:${[...selectedCategories].sort().join('|')}`;
}
function resetRound() {
  queue = [];
  roundStarted = false;
  roundTotal = 0;
  roundAnswered = 0;
  roundCorrect = 0;
  roundWrongIds = new Set();
  roundOverrideIds = null;
  roundScope = '';
  $('round-complete').hidden = true;
  $('quiz-bottom').hidden = false;
}
const categories = [...new Set(['전체 영역', '어법·어문 규범', '틀리기 쉬운 맞춤법', '띄어쓰기', '낱말', '표현', '외래어·외국어 다듬기', '한자어 다듬기', '일본어 투 용어', ...QUESTIONS.map(q => q.category)])];
let selectedCategories = new Set(categories.slice(1));
let draftCategories = new Set(selectedCategories);
const compactLayout = matchMedia('(max-width:1023px)');
function matchesCategory(question) { return selectedCategories.has(question.category); }

function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* Session remains usable. */ }
}
function updateStats() {
  $('answered').replaceChildren(document.createTextNode(state.answered), Object.assign(document.createElement('small'), {textContent: '문제'}));
  $('accuracy').replaceChildren(document.createTextNode(state.answered ? Math.round(state.correct / state.answered * 100) : 0), Object.assign(document.createElement('small'), {textContent: '%'}));
  $('streak').replaceChildren(document.createTextNode(state.streak), Object.assign(document.createElement('small'), {textContent: '문제'}));
  $('wrong-count').textContent = state.wrong.length;
}
function pool() {
  return QUESTIONS.filter(q => matchesCategory(q) && (!wrongMode || state.wrong.includes(q.id)));
}
function onCategoryChanged() {
  resetRound();
  renderCategories();
  if (wrongMode) {
    wrongRetryActive = false;
    document.querySelector('.quiz-card').hidden = true;
    document.querySelector('.stats').hidden = true;
    renderWrongReview();
  } else {
    showQuestion();
  }
}
const categoryShortNames = {
  '전체 영역': '전체', '어법·어문 규범': '어법·어문 규범', '틀리기 쉬운 맞춤법': '맞춤법',
  '외래어·외국어 다듬기': '외래어·외국어', '한자어 다듬기': '한자어',
};
function renderCategories() {
  draftCategories = new Set(selectedCategories);
  const count = QUESTIONS.filter(matchesCategory).length;
  $('category-summary').textContent = `현재: ${selectedCategories.size === categories.length - 1 ? '전체 영역' : selectedCategories.size ? [...selectedCategories].map(name => categoryShortNames[name] || name).join(' · ') : '선택 없음'} (${count}) · 변경`;
  renderCategoryChoices();
}
function renderCategoryChoices() {
  const allSelected = draftCategories.size === categories.length - 1;
  $('category-options').replaceChildren(...categories.map(name => {
    const count = QUESTIONS.filter(q => name === '전체 영역' || q.category === name).length;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'category-chip';
    button.setAttribute('aria-label', name);
    button.setAttribute('aria-pressed', name === '전체 영역' ? allSelected : !allSelected && draftCategories.has(name));
    button.disabled = count === 0;
    const label = document.createElement('span');
    label.textContent = categoryShortNames[name] || name;
    const number = document.createElement('span');
    number.className = 'category-count';
    number.textContent = count;
    button.append(label, number);
    button.onclick = () => {
      if (name === '전체 영역') draftCategories = new Set(categories.slice(1));
      else if (allSelected) draftCategories = new Set([name]);
      else if (draftCategories.has(name)) draftCategories.delete(name);
      else draftCategories.add(name);
      if (notesMode) {
        applyCategoryScope();
        renderCategories();
        renderNotes();
      } else renderCategoryChoices();
      [...$('category-options').children].find(item => item.getAttribute('aria-label') === name).focus();
    };
    return button;
  }));
  const count = QUESTIONS.filter(q => draftCategories.has(q.category)).length;
  $('apply-categories').disabled = count === 0;
  $('apply-categories').hidden = notesMode;
  document.querySelector('#category-picker > .category-hint').textContent = notesMode
    ? '영역을 누르면 학습노트에 바로 표시됩니다. 여러 개도 선택할 수 있습니다.'
    : '영역 이름을 눌러 선택하세요. 여러 개도 가능합니다.';
  $('apply-categories').textContent = notesMode ? '선택한 영역 보기' : wrongMode ? '선택한 오답 보기' : `${count}문제 시작`;
  $('category-selection-status').textContent = !count ? '학습할 영역을 선택하세요.' : allSelected ? `전체 ${count}문제` : `${draftCategories.size}개 영역 · ${count}문제`;
}
function applyCategoryScope() {
  selectedCategories = new Set(draftCategories);
  category = selectedCategories.size === categories.length - 1 ? '전체 영역' : selectedCategories.size ? [...selectedCategories].join(' + ') : '선택 없음';
}
$('apply-categories').onclick = () => {
  if (!draftCategories.size) return;
  applyCategoryScope();
  onCategoryChanged();
  if (compactLayout.matches) {
    $('category-picker').open = false;
    $('category-summary').focus();
  }
};
$('category-picker').open = !compactLayout.matches;
compactLayout.addEventListener('change', event => {
  $('category-picker').open = !event.matches;
});
function showQuestion(resume = false) {
  if (memoMode || mockMode || pastMode || analysisMode || planMode || (wrongMode && !wrongRetryActive)) return;
  if (notesMode) {
    renderNotes();
    return;
  }
  if (resume && roundStarted) return;
  if (roundStarted && roundTotal > 0 && roundAnswered >= roundTotal) {
    showRoundComplete();
    return;
  }
  const available = roundOverrideIds ? QUESTIONS.filter(q => roundOverrideIds.includes(q.id) && matchesCategory(q)) : pool();
  if (!roundStarted) {
    roundStarted = true;
    roundScope = currentRoundScope();
    roundTotal = available.length;
    queue = available.map(q => q.id);
    for (let i = queue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [queue[i], queue[j]] = [queue[j], queue[i]];
    }
    if (queue.length > 1 && queue[0] === current?.id) [queue[0], queue[1]] = [queue[1], queue[0]];
  }
  const nextId = queue.shift();
  current = QUESTIONS.find(q => q.id === nextId) || null;
  document.querySelector('.quiz-card').classList.toggle('is-empty', !current);
  $('empty-description').hidden = Boolean(current);
  $('empty-description').textContent = wrongMode && QUESTIONS.length
    ? '이 영역에 저장된 오답이 없습니다.'
    : '사진 자료를 바탕으로 문제를 등록할 예정입니다.';
  answered = false;
  $('next').disabled = true;
  $('feedback').replaceChildren();
  $('answer-form').hidden = !current;
  $('answer-input').value = '';
  $('answer-input').disabled = false;
  $('submit-answer').disabled = false;
  $('answer-input').removeAttribute('aria-invalid');
  $('category').textContent = category;
  $('progress').textContent = roundTotal ? `${roundAnswered + 1} / ${roundTotal}문제 · 이번 회차 ${roundAnswered}문제 완료` : '다른 영역도 살펴보세요';
  if (!current) {
    $('question').textContent = !QUESTIONS.length
      ? '등록된 문제가 없습니다.'
      : wrongMode ? '이 영역에 저장된 오답이 없습니다.' : '이 영역에 등록된 문제가 없습니다.';
    if (!QUESTIONS.length) $('progress').textContent = '등록된 문제 0개';
    return;
  }
  $('category').textContent = `${current.category} · ${current.group}`;
  $('question').textContent = current.question;
  document.querySelector('.quiz-card').classList.toggle('correction', Boolean(current.strict));
  $('question-instruction').textContent = current.instruction || (current.strict ? '아래 표현을 올바르게 고쳐 적으세요.' : '아래 용어를 다듬은 말로 바꿔 적으세요.');
  $('answer-label').textContent = current.answerLabel || (current.strict ? '수정한 표현' : '다듬은 말');
  $('answer-help').textContent = current.strict
    ? '띄어쓰기와 문장부호까지 정확하게 입력하세요. 여러 정답 중 하나만 적으면 됩니다.'
    : '여러 답 중 하나만 적어도 됩니다. 띄어쓰기 차이는 무시합니다.';
  if (current.note) $('question-instruction').textContent += ` (${current.note})`;
}
function normalizeAnswer(text) {
  // 괄호 속 맥락 설명과 띄어쓰기 차이는 채점하지 않습니다.
  return text.normalize('NFC').replace(/\([^)]*\)/gu, '').replace(/\s+/gu, '').trim();
}
function isAcceptedAnswer(text, answers, strict = false) {
  if (strict) return answers.some(answer => text.normalize('NFC').trim() === answer.normalize('NFC').trim());
  const parts = text.replace(/\([^)]*\)/gu, '').split(/[,，、/;；·\n]+/u).map(normalizeAnswer).filter(Boolean);
  const accepted = answers.map(normalizeAnswer);
  return parts.length > 0 && parts.every(part => accepted.includes(part));
}
function submitAnswer() {
  if (!current || answered) return;
  const text = $('answer-input').value.trim();
  if (!text) {
    $('answer-input').focus();
    return;
  }
  answered = true;
  const correct = isAcceptedAnswer(text, current.answers, current.strict);
  roundAnswered++;
  roundCorrect += Number(correct);
  if (!correct) roundWrongIds.add(current.id);
  state.answered++;
  state.correct += Number(correct);
  state.streak = correct ? state.streak + 1 : 0;
  if (correct) state.wrong = state.wrong.filter(id => id !== current.id);
  else if (!state.wrong.includes(current.id)) state.wrong.push(current.id);
  $('answer-input').disabled = true;
  $('submit-answer').disabled = true;
  const feedback = document.createElement('div');
  feedback.className = `feedback${correct ? '' : ' wrong'}`;
  const title = document.createElement('strong');
  title.textContent = correct ? '정답입니다.' : '오답입니다.';
  const submitted = document.createElement('div');
  submitted.textContent = `내 답: ${text}`;
  feedback.append(submitted);
  feedback.prepend(title);
  const solution = document.createElement('div');
  solution.textContent = `${current.answerLabel || (current.strict ? '수정 후' : '다듬은 말')}: ${current.sourceAnswer || current.answers.join(' / ')}`;
  feedback.append(solution);
  if (current.note || current.reference) {
    const note = document.createElement('div');
    note.textContent = `참고: ${[current.note, current.reference].filter(Boolean).join(' ')}`;
    feedback.append(note);
  }
  $('feedback').replaceChildren(feedback);
  $('next').disabled = false;
  persist();
  updateStats();
  renderWrongReview();
  $('progress').textContent = `${roundAnswered} / ${roundTotal}문제 완료`;
  if (roundAnswered === roundTotal) {
    showRoundComplete();
  } else $('next').focus();
}
function showRoundComplete() {
  $('round-complete').hidden = false;
  $('quiz-bottom').hidden = true;
  $('next').disabled = true;
  $('round-summary').textContent = `${category} · ${roundTotal}문제 완료 · 정답 ${roundCorrect}개 · 오답 ${roundTotal - roundCorrect}개`;
  $('retry-round-wrong').hidden = roundWrongIds.size === 0;
  $('retry-round-wrong').textContent = `이번 회차 틀린 ${roundWrongIds.size}문제 다시 풀기`;
  $('round-complete').focus({ preventScroll: true });
  $('round-complete').scrollIntoView({ block: 'center', behavior: 'instant' });
}
let composing = false;
$('answer-input').addEventListener('compositionstart', () => { composing = true; });
$('answer-input').addEventListener('compositionend', () => { composing = false; });
$('answer-input').addEventListener('keydown', event => {
  if (event.key !== 'Enter') return;
  if (event.isComposing || composing || event.keyCode === 229) {
    event.preventDefault();
    return;
  }
  if (!event.shiftKey) {
    event.preventDefault();
    $('answer-form').requestSubmit();
  }
});
$('answer-form').onsubmit = event => {
  event.preventDefault();
  if (!composing) submitAnswer();
};
function renderWrongReview() {
  const entries = QUESTIONS.filter(q => state.wrong.includes(q.id) && matchesCategory(q));
  $('wrong-summary').textContent = category + ' · ' + entries.length + '개 오답';
  $('wrong-empty').hidden = entries.length !== 0;
  $('wrong-retry-start').disabled = entries.length === 0;
  $('wrong-list').replaceChildren(...entries.map(q => {
    const article = document.createElement('article');
    article.className = 'wrong-entry';
    const categoryText = document.createElement('p');
    categoryText.className = 'wrong-entry-category';
    categoryText.textContent = q.category + ' · ' + q.group;
    const questionRow = document.createElement('div');
    questionRow.className = 'wrong-entry-row';
    const questionLabel = document.createElement('span');
    questionLabel.className = 'wrong-entry-label';
    questionLabel.textContent = '틀린 문제';
    const questionText = document.createElement('p');
    questionText.className = 'wrong-entry-value';
    questionText.textContent = q.question;
    questionRow.append(questionLabel, questionText);
    const answerRow = document.createElement('div');
    answerRow.className = 'wrong-entry-row wrong-entry-answer';
    const answerLabel = document.createElement('span');
    answerLabel.className = 'wrong-entry-label';
    answerLabel.textContent = '정답';
    const answerText = document.createElement('p');
    answerText.className = 'wrong-entry-value';
    answerText.textContent = q.sourceAnswer || q.answers.join(' / ');
    answerRow.append(answerLabel, answerText);
    article.append(categoryText, questionRow, answerRow);
    return article;
  }));
}
function renderNotes() {
  const search = normalizeAnswer($('notes-search').value).toLocaleLowerCase();
  const entries = [...QUESTIONS, ...STUDY_ONLY_ITEMS].filter(q => matchesCategory(q)
    && (!search || [q.question, ...q.answers].some(text => normalizeAnswer(text).toLocaleLowerCase().includes(search))));
  $('notes-count').textContent = `${category} · ${entries.length}개 항목`;
  $('notes-empty').hidden = entries.length > 0;
  $('notes-empty').textContent = !selectedCategories.size ? '학습할 영역을 선택하세요.' : search ? '검색 결과가 없습니다.' : '이 영역에 등록된 항목이 없습니다.';
  $('notes-table').hidden = entries.length === 0;
  $('notes-rows').replaceChildren(...entries.map(q => {
    const row = document.createElement('tr');
    const term = document.createElement('th');
    term.scope = 'row';
    term.textContent = q.question;
    const group = document.createElement('small');
    group.textContent = q.group;
    term.append(group);
    const answers = document.createElement('td');
    answers.textContent = q.sourceAnswer || q.answers.join(', ');
    if (q.note || q.reference) {
      const note = document.createElement('small');
      note.textContent = [q.note, q.reference].filter(Boolean).join(' ');
      answers.append(note);
    }
    row.append(term, answers);
    return row;
  }));
}
$('notes-search').addEventListener('input', renderNotes);
let conceptPart = CONCEPT_STRUCTURE[0].id;
const conceptSelections = new Map();
function chapterEntries(part, volume, chapter) {
  return CONCEPT_NOTES.filter(entry => entry.part === part && entry.volume === volume && entry.chapter === chapter);
}
function currentConceptPart() { return CONCEPT_STRUCTURE.find(part => part.id === conceptPart); }
function conceptSelection() {
  if (!conceptSelections.has(conceptPart)) {
    const volume = currentConceptPart().volumes[0];
    conceptSelections.set(conceptPart, { volume: volume.id, chapter: volume.chapters[0].number });
  }
  return conceptSelections.get(conceptPart);
}
function renderConceptToc() {
  $('concept-part-buttons').replaceChildren(...CONCEPT_STRUCTURE.map(part => {
    const button = document.createElement('button');
    button.type = 'button';
    const total = part.volumes.reduce((sum, volume) => sum + volume.chapters.length, 0);
    const registered = part.volumes.reduce((sum, volume) => sum + volume.chapters.filter(chapter => chapterEntries(part.id, volume.id, chapter.number).length).length, 0);
    button.textContent = `${part.title} (${registered}/${total})`;
    button.setAttribute('aria-pressed', part.id === conceptPart);
    button.onclick = () => {
      conceptPart = part.id;
      renderConceptToc();
      renderConcepts();
      [...$('concept-part-buttons').children].find(item => item.getAttribute('aria-pressed') === 'true').focus();
    };
    return button;
  }));
  const selection = conceptSelection();
  $('concept-volume-list').replaceChildren(...currentConceptPart().volumes.map(volume => {
    const details = document.createElement('details');
    details.className = 'concept-volume';
    details.open = volume.id === selection.volume;
    const summary = document.createElement('summary');
    const registered = volume.chapters.filter(chapter => chapterEntries(conceptPart, volume.id, chapter.number).length).length;
    summary.textContent = volume.title;
    const count = document.createElement('span');
    count.textContent = `${registered}/${volume.chapters.length}장 등록`;
    summary.append(count);
    const list = document.createElement('div');
    list.className = 'concept-chapters';
    volume.chapters.forEach(chapter => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.volume = volume.id;
      button.dataset.chapter = chapter.number;
      const registered = chapterEntries(conceptPart, volume.id, chapter.number).length > 0;
      button.textContent = chapter.title;
      button.setAttribute('aria-pressed', selection.volume === volume.id && selection.chapter === chapter.number);
      const status = document.createElement('span');
      status.textContent = registered ? '읽기 →' : '내용 미등록';
      button.append(status);
      button.onclick = () => {
        conceptSelections.set(conceptPart, { volume: volume.id, chapter: chapter.number });
        updateConceptChapterButtons();
        renderConcepts();
        focusConceptReader();
      };
      list.append(button);
    });
    details.append(summary, list);
    return details;
  }));
}
function updateConceptChapterButtons() {
  const selected = conceptSelection();
  for (const button of document.querySelectorAll('.concept-chapters button')) {
    button.setAttribute('aria-pressed', button.dataset.volume === selected.volume && Number(button.dataset.chapter) === selected.chapter);
  }
}
function focusConceptReader() {
  $('concept-reader-title').focus({ preventScroll: true });
  $('concept-reader').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
}
function renderConcepts() {
  const part = currentConceptPart();
  const selected = conceptSelection();
  const volume = part.volumes.find(item => item.id === selected.volume);
  const chapter = volume.chapters.find(item => item.number === selected.chapter);
  const entries = chapterEntries(part.id, volume.id, chapter.number);
  $('concept-location').textContent = `${part.title} / ${volume.title}`;
  $('concept-reader-title').textContent = chapter.title;
  $('concepts-empty').hidden = entries.length > 0;
  $('concepts-content').replaceChildren(...entries.map(entry => {
    const body = document.createElement('div');
    body.className = 'concept-body';
    for (const [index, text] of entry.body.split(/~~([^~\n]+)~~/gu).entries()) {
      if (index % 2 === 0) body.append(document.createTextNode(text));
      else {
        const deleted = document.createElement('del');
        deleted.textContent = text;
        deleted.title = '삭제할 표현';
        body.append(deleted);
      }
    }
    if (entry.comparison) {
      const table = document.createElement('table');
      table.className = 'concept-comparison';
      const caption = document.createElement('caption');
      caption.textContent = entry.comparison.caption;
      const head = document.createElement('thead');
      const headerRow = document.createElement('tr');
      for (const name of entry.comparison.columns) {
        const cell = document.createElement('th');
        cell.scope = 'col';
        cell.textContent = name;
        headerRow.append(cell);
      }
      head.append(headerRow);
      const rows = document.createElement('tbody');
      for (const values of entry.comparison.rows) {
        const row = document.createElement('tr');
        values.forEach((value, index) => {
          const cell = document.createElement(index === 0 ? 'th' : 'td');
          if (index === 0) cell.scope = 'row';
          else cell.dataset.label = entry.comparison.columns[index];
          cell.textContent = value;
          row.append(cell);
        });
        rows.append(row);
      }
      table.append(caption, head, rows);
      body.append(table);
    }
    for (const item of entry.sections || []) {
      const section = document.createElement('section');
      section.className = 'concept-note-section';
      const heading = document.createElement('h4');
      heading.textContent = item.title;
      const list = document.createElement('ul');
      for (const text of item.items) {
        const li = document.createElement('li');
        li.textContent = text;
        list.append(li);
      }
      section.append(heading, list);
      body.append(section);
    }
    if (entry.images?.length) {
      const gallery = document.createElement('section');
      gallery.className = 'concept-images';
      const heading = document.createElement('h4');
      heading.textContent = entry.imagesTitle || '기안문 서식';
      gallery.append(heading);
      for (const item of entry.images) {
        if (item.heading) {
          const sectionHeading = document.createElement('h4');
          sectionHeading.textContent = item.heading;
          gallery.append(sectionHeading);
        }
        const figure = document.createElement('figure');
        const caption = document.createElement('figcaption');
        caption.textContent = item.title;
        const link = document.createElement('a');
        link.href = item.src;
        link.target = '_blank';
        link.rel = 'noopener';
        link.setAttribute('aria-label', `${item.title} 원본 이미지 새 탭에서 열기`);
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        img.width = item.width;
        img.height = item.height;
        img.loading = 'lazy';
        link.append(img);
        const original = document.createElement('a');
        original.href = item.src;
        original.target = '_blank';
        original.rel = 'noopener';
        original.className = 'concept-image-original';
        original.textContent = '원본 크기로 보기 ↗';
        original.setAttribute('aria-label', `${item.title} 원본 크기로 보기, 새 탭에서 열기`);
        figure.append(caption, link, original);
        gallery.append(figure);
      }
      body.append(gallery);
    }
    return body;
  }));
  const readable = part.volumes.flatMap(item => item.chapters.filter(ch => chapterEntries(part.id, item.id, ch.number).length).map(ch => ({ volume: item.id, chapter: ch.number })));
  const index = readable.findIndex(item => item.volume === selected.volume && item.chapter === selected.chapter);
  $('concept-page-nav').hidden = index < 0;
  for (const [id, step] of [['concept-previous', -1], ['concept-next', 1]]) {
    $(id).disabled = index < 0 || index + step < 0 || index + step >= readable.length;
    $(id).onclick = () => {
      const next = readable[index + step];
      if (!next) return;
      conceptSelections.set(conceptPart, next);
      renderConceptToc();
      renderConcepts();
      focusConceptReader();
    };
  }
}
$('back-to-concept-toc').onclick = () => {
  $('concept-toc').focus({ preventScroll: true });
  $('concept-toc').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
};
renderConceptToc();
renderConcepts();
let legacyMemo = '';
try {
  legacyMemo = localStorage.getItem('bareun-personal-notes-v1') || '';
  $('legacy-memo').hidden = !legacyMemo;
  $('legacy-memo-text').textContent = legacyMemo;
} catch { /* Legacy browser notes remain untouched. */ }
$('export-memo').onclick = () => {
  const blob = new Blob([legacyMemo], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = '실용글쓰기-단권화-노트.txt';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};
function setMode(mode) {
  const practiceActive = ['all', 'wrong', 'notes'].includes(mode);
  if (practiceActive) lastPracticeMode = mode;
  $('practice-controls').hidden = !practiceActive;
  $('practice-mode').classList.toggle('active', practiceActive);
  $('practice-mode').setAttribute('aria-pressed', practiceActive);
  wrongMode = mode === 'wrong';
  wrongRetryActive = false;
  notesMode = mode === 'notes';
  if (notesMode) {
    applyCategoryScope();
    renderCategories();
  }
  memoMode = mode === 'memo';
  mockMode = mode === 'mock';
  analysisMode = mode === 'analysis';
  planMode = mode === 'plan';
  pastMode = mode === 'objective-past' || mode === 'written-past';
  for (const [id, active] of [['all-mode', mode === 'all'], ['wrong-mode', wrongMode], ['notes-mode', notesMode], ['memo-mode', memoMode], ['mock-mode', mockMode], ['analysis-mode', analysisMode], ['plan-mode', planMode], ['objective-past-mode', mode === 'objective-past'], ['written-past-mode', mode === 'written-past']]) {
    $(id).classList.toggle('active', active);
    $(id).setAttribute('aria-pressed', active);
  }
  $('study-notes').hidden = !notesMode;
  $('personal-notes').hidden = !memoMode;
  $('mock-exams').hidden = !mockMode;
  $('exam-analysis').hidden = !analysisMode;
  $('study-plan').hidden = !planMode;
  $('objective-past-exams').hidden = mode !== 'objective-past';
  $('written-past-exams').hidden = mode !== 'written-past';
  $('wrong-review').hidden = !wrongMode;
  if (wrongMode) renderWrongReview();
  document.querySelector('.quiz-card').hidden = notesMode || memoMode || mockMode || pastMode || analysisMode || planMode || wrongMode;
  document.querySelector('.stats').hidden = memoMode || mockMode || pastMode || analysisMode || planMode || wrongMode;
  $('reset').hidden = memoMode || mockMode || pastMode || analysisMode || planMode;
  renderCategoryChoices();
  if (!notesMode && !memoMode && !mockMode && !pastMode && !analysisMode && !planMode && !wrongMode && roundStarted && roundScope !== currentRoundScope()) resetRound();
  showQuestion(true);
}
$('practice-mode').onclick = () => setMode(lastPracticeMode);
$('all-mode').onclick = () => setMode('all');
$('wrong-mode').onclick = () => setMode('wrong');
$('wrong-retry-start').onclick = () => {
  if (!wrongMode || !$('wrong-list').children.length) return;
  wrongRetryActive = true;
  resetRound();
  document.querySelector('.quiz-card').hidden = false;
  document.querySelector('.stats').hidden = false;
  showQuestion();
  $('question').focus();
};
$('notes-mode').onclick = () => setMode('notes');
$('memo-mode').onclick = () => setMode('memo');
$('mock-mode').onclick = () => setMode('mock');
$('analysis-mode').onclick = () => setMode('analysis');
$('plan-mode').onclick = () => setMode('plan');
$('objective-past-mode').onclick = () => setMode('objective-past');
$('written-past-mode').onclick = () => setMode('written-past');
$('restart-round').onclick = () => {
  resetRound();
  showQuestion();
  (current ? $('answer-input') : $('question')).focus();
};
$('retry-round-wrong').onclick = () => {
  const ids = [...roundWrongIds];
  if (!ids.length) return;
  resetRound();
  roundOverrideIds = ids;
  showQuestion();
  (current ? $('answer-input') : $('question')).focus();
};
$('next').onclick = () => {
  showQuestion();
  (current ? $('answer-input') : $('question')).focus();
};
$('reset').onclick = () => {
  if (!confirm('정답률과 오답을 포함한 모든 학습 기록을 초기화할까요?')) return;
  state = emptyState();
  persist();
  updateStats();
  resetRound();
  if (wrongMode) {
    wrongRetryActive = false;
    document.querySelector('.quiz-card').hidden = true;
    document.querySelector('.stats').hidden = true;
    renderWrongReview();
  }
  showQuestion();
};
renderCategories();
updateStats();
setMode('all');
