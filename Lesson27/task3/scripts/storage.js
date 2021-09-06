import { renderTasks } from './renderer.js';
import { tasks } from './toDoList.js';

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = key => {
  if (localStorage.getItem(key) === null) {
    setItem('tasksList', tasks);
  }
  JSON.parse(localStorage.getItem(key));
};

export const onStorageChange = e => {
  if (e.key === 'tasks') {
    renderTasks();
  }
  setItem('task', getItem('tasks'));
};

window.addEventListener('storage', onStorageChange);
