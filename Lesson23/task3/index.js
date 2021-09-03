const listElem = document.querySelector('.list');
const crtBtnElem = document.querySelector('.create-task-btn');
const inputElem = document.querySelector('.task-input');

const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.id = `${id}`;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
renderTasks(tasks);

const checkIfDone = event => {
  const checkedElem = event.target;
  if (checkedElem.tagName !== 'INPUT') return;

  const getOBj = tasks.find(elem => elem.id === +checkedElem.dataset.id);
  getOBj.done = checkedElem.checked;

  listElem.innerHTML = '';
  renderTasks(tasks);
};

listElem.addEventListener('click', checkIfDone);

const creatTask = () => {
  if (inputElem.value === '') return;

  tasks.push({
    id: tasks.length + 1,
    text: inputElem.value,
    done: false,
  });

  inputElem.value = '';

  listElem.innerHTML = '';
  renderTasks(tasks);
};

crtBtnElem.addEventListener('click', creatTask);
