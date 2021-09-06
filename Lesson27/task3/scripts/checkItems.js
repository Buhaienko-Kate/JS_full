import { renderTasks } from './renderer.js';
import { listElem } from './createTask.js';
import { setItem, getItem } from './storage.js';

export const checkIfDone = event => {
  const checkedElem = event.target;
  if (checkedElem.tagName !== 'INPUT') return;

  const tasksList = getItem('tasks');
  const getOBj = tasksList.find(elem => elem.id === +checkedElem.dataset.id);
  getOBj.done = checkedElem.checked;

  listElem.innerHTML = '';
  setItem('tasks', tasksList);
  renderTasks(tasksList);
};
