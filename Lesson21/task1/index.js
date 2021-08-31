'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  // put your code here
  const listElement = document.querySelector('.list');

  const listItemElements = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElement = document.createElement('li');
      listItemElement.classList.add('list__item');
      if (done) {
        listItemElement.classList.add('list__item_done');
      }
      const checkboxEl = document.createElement('input');
      checkboxEl.classList.add('list__item-checkbox');
      checkboxEl.setAttribute('type', 'checkbox');
      checkboxEl.checked = done;

      listItemElement.append(checkboxEl, text);

      return listItemElement;
    });
  listElement.append(...listItemElements);
};
renderTasks(tasks);
