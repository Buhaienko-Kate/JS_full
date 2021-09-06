import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

const inputElem = document.querySelector('.task-input');
export const listElem = document.querySelector('.list');

export const creatTask = () => {
  if (inputElem.value === '') return;
  const check = getItem('tasks');
  check.push({
    id: check.length + 1,
    text: inputElem.value,
    done: false,
  });

  setItem('tasks', check);
  inputElem.value = '';

  listElem.innerHTML = '';
  renderTasks(check);
};
