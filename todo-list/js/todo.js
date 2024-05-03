const toDoForm = document.querySelector('.todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.todo-list');

const TODOS_key = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_key, JSON.stringify(toDos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  const button = document.createElement('button');

  button.innerText = 'X';
  li.appendChild(span);
  span.innerText = newTodo.text;
  li.appendChild(button);
  toDoList.appendChild(li);
  button.addEventListener('click', deleteTodo);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newToDoOBJ = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoOBJ);
  paintTodo(newToDoOBJ);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_key);

if (savedToDos !== null) {
  const parsedToDo = JSON.parse(savedToDos);
  toDos = parsedToDo;
  parsedToDo.forEach(paintTodo);
}

function sexyFilter() {}
