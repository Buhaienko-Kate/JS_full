import { listElem } from './createTask.js';
import { getItem } from './storage.js';

const createCheckbox = (done, id) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');
  checkbox.dataset.id = id;
  return checkbox;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  // listItemElem.dataset.id = `${id}`;

  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  const checkbox = createCheckbox(done, id);

  const textElem = document.createElement('span');
  textElem.classList.add('list__item-text');
  textElem.textContent = text;

  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list__item-delete-btn');

  listItemElem.append(checkbox, textElem, deleteBtnElem);

  return listItemElem;
};

const compareTasks = (a, b) => a.done - b.done;

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];

  listElem.innerHTML = '';

  const taskElems = tasksList.sort(compareTasks).map(createListItem);

  listElem.append(...taskElems);
};
