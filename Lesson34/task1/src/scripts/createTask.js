import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateWay.js';

const inputElem = document.querySelector('.task-input');
export const listElem = document.querySelector('.list');

export const onCreateTask = () => {
  const text = inputElem.value;

  if (text === '') return;

  inputElem.value = '';

  listElem.innerHTML = '';

  const newTask = {
    text,
    done: false,
  };
  createTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem(
        'tasksList',
        newTasksList,
      ); /**полученные данные с сервера записываем в LocalStorage */
      renderTasks();
    });
};

// 1.Prepare data
// 2. Write data to db
// 3.Read new data from server
// 4. Save new data to front-end storage
// 5. Update
