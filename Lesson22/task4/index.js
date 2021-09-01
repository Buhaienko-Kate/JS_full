const checkboxEl = document.querySelector('.task-status');
const checkedCheckBox = () => {
  console.log(checkboxEl.checked);
};
checkboxEl.addEventListener('change', checkedCheckBox);
