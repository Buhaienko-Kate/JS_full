import { renderTasks } from './renderer.js';
import { creatTask, listElem } from './createTask.js';
import { checkIfDone } from './checkItems.js';
import { getItem, setItem } from './storage.js';
import { tasks } from './tasks.js';

document.addEventListener('DOMContentLoaded', () => {
  setItem('tasks', tasks);
  renderTasks();
});

const crtBtnElem = document.querySelector('.create-task-btn');

listElem.addEventListener('click', checkIfDone);

crtBtnElem.addEventListener('click', creatTask);

const onStorageChange = e => {
  if (e.key === 'tasks') {
    renderTasks();
  }
  setItem('task', getItem('tasks'));
};

window.addEventListener('storage', onStorageChange);
