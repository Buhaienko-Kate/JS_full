const inputElem = document.querySelector('.text-input');
const inputAdd = () => {
  console.log(inputElem.value);
};
inputElem.addEventListener('change', inputAdd);
