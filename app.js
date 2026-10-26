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
let notesMode = false;
let memoMode = false;
let current = null;
let answered = false;
let queue = [];
const categories = [...new Set(['전체 영역', '어법·어문 규범', '틀리기 쉬운 맞춤법', '띄어쓰기', '낱말', '표현', '외래어·외국어 다듬기', '한자어 다듬기', '일본어 투 용어', ...QUESTIONS.map(q => q.category)])];

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
  return QUESTIONS.filter(q => (category === '전체 영역' || q.category === category) && (!wrongMode || state.wrong.includes(q.id)));
}
function renderCategories() {
  $('category-select').replaceChildren(...categories.map(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = `${name} (${QUESTIONS.filter(q => name === '전체 영역' || q.category === name).length})`;
    return option;
  }));
  $('category-select').value = category;
  $('categories').replaceChildren(...categories.map(name => {
    const button = document.createElement('button');
    const label = document.createElement('span');
    label.className = 'category-name';
    label.textContent = name;
    button.append(label);
    button.className = name === category ? 'active' : '';
    button.setAttribute('aria-pressed', name === category);
    const count = document.createElement('span');
    count.className = 'category-count';
    count.textContent = QUESTIONS.filter(q => name === '전체 영역' || q.category === name).length;
    button.append(count);
    button.onclick = () => { category = name; queue = []; renderCategories(); showQuestion(); };
    return button;
  }));
}
$('category-select').onchange = event => {
  category = event.target.value;
  queue = [];
  renderCategories();
  showQuestion();
};
function showQuestion() {
  if (memoMode) return;
  if (notesMode) {
    renderNotes();
    return;
  }
  const available = pool();
  queue = queue.filter(id => available.some(q => q.id === id));
  if (!queue.length) {
    queue = available.map(q => q.id);
    for (let i = queue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [queue[i], queue[j]] = [queue[j], queue[i]];
    }
    if (queue.length > 1 && queue[0] === current?.id) [queue[0], queue[1]] = [queue[1], queue[0]];
  }
  const nextId = queue.shift();
  current = available.find(q => q.id === nextId) || null;
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
  $('progress').textContent = available.length ? `이 영역에서 ${available.length}문제 무작위 출제` : '다른 영역도 살펴보세요';
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
  solution.textContent = `${current.strict ? '수정 후' : '다듬은 말'}: ${current.answers.join(' / ')}`;
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
  $('next').focus();
}
let composing = false;
$('answer-input').addEventListener('compositionstart', () => { composing = true; });
$('answer-input').addEventListener('compositionend', () => { composing = false; });
$('answer-input').addEventListener('keydown', event => {
  if (event.key === 'Enter' && (event.isComposing || composing || event.keyCode === 229)) event.preventDefault();
});
$('answer-form').onsubmit = event => {
  event.preventDefault();
  if (!composing) submitAnswer();
};
function renderNotes() {
  const search = normalizeAnswer($('notes-search').value).toLocaleLowerCase();
  const entries = QUESTIONS.filter(q => (category === '전체 영역' || q.category === category)
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
    answers.textContent = q.answers.join(', ');
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
const MEMO_KEY = 'bareun-personal-notes-v1';
try {
  const saved = localStorage.getItem(MEMO_KEY);
  if (saved !== null) {
    $('memo-input').value = saved;
    $('memo-status').textContent = '저장된 노트를 불러왔습니다.';
  }
} catch {
  $('memo-status').textContent = '저장된 노트를 불러올 수 없습니다. 브라우저 저장소 설정을 확인하세요.';
}
$('memo-input').addEventListener('input', () => {
  try {
    localStorage.setItem(MEMO_KEY, $('memo-input').value);
    $('memo-status').textContent = '저장됨';
  } catch {
    $('memo-status').textContent = '저장하지 못했습니다. 작성한 내용을 파일로 내려받아 보관하세요.';
  }
});
$('export-memo').onclick = () => {
  const blob = new Blob([$('memo-input').value], { type: 'text/plain;charset=utf-8' });
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
  notesMode = mode === 'notes';
  memoMode = mode === 'memo';
  for (const [id, active] of [['all-mode', mode === 'all'], ['wrong-mode', wrongMode], ['notes-mode', notesMode], ['memo-mode', memoMode]]) {
    $(id).classList.toggle('active', active);
    $(id).setAttribute('aria-pressed', active);
  }
  $('study-notes').hidden = !notesMode;
  $('personal-notes').hidden = !memoMode;
  document.querySelector('.quiz-card').hidden = notesMode || memoMode;
  document.querySelector('.stats').hidden = memoMode;
  $('reset').hidden = memoMode;
  queue = [];
  showQuestion();
}
$('all-mode').onclick = () => setMode('all');
$('wrong-mode').onclick = () => setMode('wrong');
$('notes-mode').onclick = () => setMode('notes');
$('memo-mode').onclick = () => setMode('memo');
$('next').onclick = () => {
  showQuestion();
  (current ? $('answer-input') : $('question')).focus();
};
$('reset').onclick = () => {
  if (!confirm('정답률과 오답을 포함한 모든 학습 기록을 초기화할까요?')) return;
  state = emptyState(); persist(); updateStats(); queue = []; showQuestion();
};
renderCategories();
updateStats();
setMode('all');
