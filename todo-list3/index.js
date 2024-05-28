const addBtn = document.querySelector('.add-btn');
const addInput = document.querySelector('.add-input');
const list = document.querySelector('.list');
const rollBtn = document.querySelector('.roll-btn');

// addButton

function emptyAlert() {
  alert('메뉴를 선택해주세요');
  addInput.focus();
}

function maxAlert() {
  alert('메뉴는 최대 5개까지만 선택할 수 있어요');
  addInput.value = '';
}

function addMenu(data) {
  const inputValue = addInput.value;

  if (inputValue === '') {
    emptyAlert();
  } else if (data.length > 4) {
    maxAlert();
  } else {
    add(data);
  }
}

addBtn.addEventListener('click', () => {
  addMenu(data);
});
