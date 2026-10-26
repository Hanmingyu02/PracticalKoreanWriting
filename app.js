const $ = id => document.getElementById(id);
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
let memoMode = false;
let mockMode = false;
let pastMode = false;
let current = null;
let answered = false;
let queue = [];
let roundStarted = false;
let roundTotal = 0;
let roundAnswered = 0;
let roundCorrect = 0;
function resetRound() {
  queue = [];
  roundStarted = false;
  roundTotal = 0;
  roundAnswered = 0;
  roundCorrect = 0;
  $('round-complete').hidden = true;
  $('quiz-bottom').hidden = false;
}
const categories = [...new Set(['전체 영역', '어법·어문 규범', '틀리기 쉬운 맞춤법', '띄어쓰기', '낱말', '표현', '외래어·외국어 다듬기', '한자어 다듬기', '일본어 투 용어', ...QUESTIONS.map(q => q.category)])];
let selectedCategories = new Set(categories.slice(1));
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
function renderCategories() {
  const container = $('category-options');
  const legend = document.createElement('legend');
  legend.className = 'visually-hidden';
  legend.textContent = '함께 풀 영역 선택';
  container.replaceChildren(legend, ...categories.map(name => {
    const label = document.createElement('label');
    label.className = 'category-choice';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = name;
    checkbox.checked = name === '전체 영역' ? selectedCategories.size === categories.length - 1 : selectedCategories.has(name);
    checkbox.setAttribute('aria-label', name);
    const text = document.createElement('span');
    text.className = 'category-name';
    text.textContent = name;
    const count = document.createElement('span');
    count.className = 'category-count';
    count.textContent = QUESTIONS.filter(q => name === '전체 영역' || q.category === name).length;
    label.append(checkbox, text, count);
    checkbox.onchange = () => {
      if (name === '전체 영역') for (const item of container.querySelectorAll('input')) item.checked = checkbox.checked;
      updateCategoryDraft();
    };
    return label;
  }));
  $('category-summary').textContent = selectedCategories.size === categories.length - 1
    ? '영역 선택 · 전체' : `영역 선택 · ${selectedCategories.size}개 선택됨`;
  updateCategoryDraft();
}
function updateCategoryDraft() {
  const inputs = [...$('category-options').querySelectorAll('input')];
  const chosen = inputs.slice(1).filter(input => input.checked);
  inputs[0].checked = chosen.length === categories.length - 1;
  inputs[0].indeterminate = chosen.length > 0 && chosen.length < categories.length - 1;
  $('apply-categories').disabled = chosen.length === 0;
  const count = QUESTIONS.filter(q => chosen.some(input => input.value === q.category)).length;
  $('category-selection-status').textContent = chosen.length ? `${chosen.length}개 영역 · ${count}문제 선택` : '한 개 이상의 영역을 선택하세요.';
}
$('apply-categories').onclick = () => {
  selectedCategories = new Set([...$('category-options').querySelectorAll('input')].slice(1).filter(input => input.checked).map(input => input.value));
  if (!selectedCategories.size) return;
  category = selectedCategories.size === categories.length - 1 ? '전체 영역' : [...selectedCategories].join(' + ');
  onCategoryChanged();
  if (matchMedia('(max-width:760px)').matches) {
    $('category-picker').open = false;
    $('category-summary').focus();
  }
};
$('category-picker').open = !matchMedia('(max-width:760px)').matches;
function showQuestion() {
  if (memoMode || mockMode || pastMode || (wrongMode && !wrongRetryActive)) return;
  if (notesMode) {
    renderNotes();
    return;
  }
  const available = pool();
  if (!roundStarted) {
    roundStarted = true;
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
  $('question-instruction').textContent = current.strict ? '아래 표현을 올바르게 고쳐 적으세요.' : '아래 용어를 다듬은 말로 바꿔 적으세요.';
  $('answer-label').textContent = current.strict ? '수정한 표현' : '다듬은 말';
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
  solution.textContent = `${current.strict ? '수정 후' : '다듬은 말'}: ${current.sourceAnswer || current.answers.join(' / ')}`;
  feedback.append(solution);
  if (current.note) {
    const note = document.createElement('div');
    note.textContent = `참고: ${current.note}`;
    feedback.append(note);
  }
  $('feedback').replaceChildren(feedback);
  $('next').disabled = false;
  persist();
  updateStats();
  renderWrongReview();
  $('progress').textContent = `${roundAnswered} / ${roundTotal}문제 완료`;
  if (roundAnswered === roundTotal) {
    $('round-complete').hidden = false;
    $('quiz-bottom').hidden = true;
    $('next').disabled = true;
    $('round-summary').textContent = `${category} · ${roundTotal}문제 완료 · 정답 ${roundCorrect}개 · 오답 ${roundTotal - roundCorrect}개`;
    $('restart-round').focus();
  } else $('next').focus();
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
  const entries = QUESTIONS.filter(q => matchesCategory(q)
    && (!search || [q.question, ...q.answers].some(text => normalizeAnswer(text).toLocaleLowerCase().includes(search))));
  $('notes-count').textContent = `${category} · ${entries.length}개 항목`;
  $('notes-empty').hidden = entries.length > 0;
  $('notes-empty').textContent = search ? '검색 결과가 없습니다.' : '이 영역에 등록된 항목이 없습니다.';
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
    if (q.note) {
      const note = document.createElement('small');
      note.textContent = q.note;
      answers.append(note);
    }
    row.append(term, answers);
    return row;
  }));
}
$('notes-search').addEventListener('input', renderNotes);
function setConceptOptions(id, items) {
  $(id).replaceChildren(...items.map(item => {
    const option = document.createElement('option');
    option.value = item.value;
    option.textContent = item.title;
    return option;
  }));
}
function selectedConceptPart() {
  return CONCEPT_STRUCTURE.find(part => part.id === $('concept-part').value);
}
function selectedConceptVolume() {
  return selectedConceptPart().volumes.find(volume => volume.id === $('concept-volume').value);
}
function renderConceptVolumes() {
  setConceptOptions('concept-volume', selectedConceptPart().volumes.map(volume => ({ value: volume.id, title: volume.title })));
  renderConceptChapters();
}
function renderConceptChapters() {
  const part = selectedConceptPart();
  const volume = selectedConceptVolume();
  setConceptOptions('concept-chapter', volume.chapters.map(chapter => ({
    value: String(chapter.number),
    title: chapter.title + (CONCEPT_NOTES.some(entry => entry.part === part.id && entry.volume === volume.id && entry.chapter === chapter.number) ? '' : ' · 내용 미등록'),
  })));
  renderConcepts();
}
function renderConcepts() {
  const part = selectedConceptPart();
  const volume = selectedConceptVolume();
  const chapter = volume.chapters.find(item => item.number === Number($('concept-chapter').value));
  const entries = CONCEPT_NOTES.filter(entry => entry.part === part.id && entry.volume === volume.id && entry.chapter === chapter.number);
  $('concept-location').textContent = `${part.title} / ${volume.title} / ${chapter.title}`;
  $('concepts-empty').hidden = entries.length > 0;
  $('concepts-empty').textContent = '이 장은 아직 내용이 등록되지 않았습니다.';
  $('concepts-content').replaceChildren(...entries.map(entry => {
    const article = document.createElement('article');
    article.className = 'concept-entry';
    const title = document.createElement('h3');
    title.textContent = chapter.title;
    const body = document.createElement('div');
    body.className = 'concept-body';
    // 취소선 표시만 지원하며 원문을 HTML로 해석하지 않습니다.
    for (const [index, text] of entry.body.split(/~~([^~\n]+)~~/gu).entries()) {
      if (index % 2 === 0) body.append(document.createTextNode(text));
      else {
        const deleted = document.createElement('del');
        deleted.textContent = text;
        deleted.title = '삭제할 표현';
        body.append(deleted);
      }
    }
    article.append(title, body);
    return article;
  }));
}
setConceptOptions('concept-part', CONCEPT_STRUCTURE.map(part => ({ value: part.id, title: part.title })));
$('concept-part').onchange = renderConceptVolumes;
$('concept-volume').onchange = renderConceptChapters;
$('concept-chapter').onchange = renderConcepts;
renderConceptVolumes();
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
  wrongMode = mode === 'wrong';
  wrongRetryActive = false;
  notesMode = mode === 'notes';
  memoMode = mode === 'memo';
  mockMode = mode === 'mock';
  pastMode = mode === 'past';
  for (const [id, active] of [['all-mode', mode === 'all'], ['wrong-mode', wrongMode], ['notes-mode', notesMode], ['memo-mode', memoMode], ['mock-mode', mockMode], ['past-mode', pastMode]]) {
    $(id).classList.toggle('active', active);
    $(id).setAttribute('aria-pressed', active);
  }
  $('study-notes').hidden = !notesMode;
  $('personal-notes').hidden = !memoMode;
  $('mock-exams').hidden = !mockMode;
  $('past-exams').hidden = !pastMode;
  $('wrong-review').hidden = !wrongMode;
  if (wrongMode) renderWrongReview();
  document.querySelector('.quiz-card').hidden = notesMode || memoMode || mockMode || pastMode || wrongMode;
  document.querySelector('.stats').hidden = memoMode || mockMode || pastMode || wrongMode;
  $('reset').hidden = memoMode || mockMode || pastMode;
  resetRound();
  showQuestion();
}
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
$('past-mode').onclick = () => setMode('past');
$('restart-round').onclick = () => {
  resetRound();
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
