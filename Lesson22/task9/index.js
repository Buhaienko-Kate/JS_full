const checkboxEl = document.querySelector('.task-status');
const checkedCheckBox = event => {
  console.log(event.target.checked);
};
checkboxEl.addEventListener('change', checkedCheckBox);
