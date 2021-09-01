const inputElem = document.querySelector('.text-input');
const inputAdd = event => {
  console.log(event.target.value);
};
inputElem.addEventListener('change', inputAdd);
