import { tasks } from './tasks.js';

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = key => {
  if (localStorage.getItem(key) === null) {
    setItem('tasks', tasks);
  }
  return JSON.parse(localStorage.getItem(key));
};
