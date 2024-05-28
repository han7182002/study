import { addBtn, addInput, list, rollBtn } from './tags.js';
import addMenu from './add.js';
import deleteMenu from './delete.js';
import rollMenu from './roll.js';
// 여기에 코드를 작성하세요

const data = [];

addBtn.addEventListener('click', () => addMenu(data));
addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));
list.addEventListener('click', ({ target }) => target.tagName === 'BUTTON' && deleteMenu(data, target.dataset.index));
rollBtn.addEventListener('click', () => list.classList.contains('rolling') || rollMenu(data));
