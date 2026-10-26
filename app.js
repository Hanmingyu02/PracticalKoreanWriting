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
function showQuestion() {
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
  $('options').replaceChildren();
  $('category').textContent = category;
  $('progress').textContent = available.length ? `이 영역에서 ${available.length}문제 무작위 출제` : '다른 영역도 살펴보세요';
  if (!current) {
    $('question').textContent = !QUESTIONS.length
      ? '등록된 문제가 없습니다.'
      : wrongMode ? '이 영역에 저장된 오답이 없습니다.' : '이 영역에 등록된 문제가 없습니다.';
    if (!QUESTIONS.length) $('progress').textContent = '등록된 문제 0개';
    return;
  }
  $('category').textContent = current.category;
  $('question').textContent = current.question;
  current.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option';
    const number = document.createElement('span');
    number.className = 'number';
    number.textContent = index + 1;
    button.append(number, document.createTextNode(option));
    button.onclick = () => select(index);
    $('options').append(button);
  });
}
function select(index) {
  if (!current || answered) return;
  answered = true;
  const correct = index === current.answer;
  state.answered++;
  state.correct += Number(correct);
  state.streak = correct ? state.streak + 1 : 0;
  if (correct) state.wrong = state.wrong.filter(id => id !== current.id);
  else if (!state.wrong.includes(current.id)) state.wrong.push(current.id);
  [...$('options').children].forEach((button, i) => {
    button.disabled = true;
    if (i === current.answer) button.classList.add('correct');
    else if (i === index) button.classList.add('incorrect');
  });
  const feedback = document.createElement('div');
  feedback.className = `feedback${correct ? '' : ' wrong'}`;
  const title = document.createElement('strong');
  title.textContent = correct ? '정답이에요. 잘 알고 계시네요!' : `아쉬워요. 정답은 ‘${current.options[current.answer]}’입니다.`;
  feedback.append(title, document.createTextNode(current.explanation));
  $('feedback').replaceChildren(feedback);
  $('next').disabled = false;
  persist();
  updateStats();
}
function setMode(wrong) {
  wrongMode = wrong;
  $('all-mode').classList.toggle('active', !wrong);
  $('wrong-mode').classList.toggle('active', wrong);
  $('all-mode').setAttribute('aria-pressed', !wrong);
  $('wrong-mode').setAttribute('aria-pressed', wrong);
  queue = [];
  showQuestion();
}
$('all-mode').onclick = () => setMode(false);
$('wrong-mode').onclick = () => setMode(true);
$('next').onclick = () => { showQuestion(); $('question').setAttribute('tabindex', '-1'); $('question').focus(); };
$('reset').onclick = () => {
  if (!confirm('정답률과 오답을 포함한 모든 학습 기록을 초기화할까요?')) return;
  state = emptyState(); persist(); updateStats(); queue = []; showQuestion();
};
renderCategories();
updateStats();
setMode(false);
