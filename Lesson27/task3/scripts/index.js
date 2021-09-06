import { renderTasks } from './renderer.js';
import { creatTask } from './createTask.js';
import { listElem } from './createTask.js';
import { checkIfDone } from './checkItems.js';
import { getItem } from './storage.js';

document.addEventListener('DOCContentLoaded', () => {
  renderTasks(getItem('tasks'));
});

const crtBtnElem = document.querySelector('.create-task-btn');

listElem.addEventListener('click', checkIfDone);

crtBtnElem.addEventListener('click', creatTask);
