import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

const inputElem = document.querySelector('.task-input');
export const listElem = document.querySelector('.list');

export const creatTask = () => {
  if (inputElem.value === '') return;
  const check = getItem('tasks');
  check.push({
    text: inputElem.value,
    done: false,
    id: check.length + 1,
  });

  setItem('tasks', check);
  inputElem.value = '';

  listElem.innerHTML = '';
  renderTasks();
};
