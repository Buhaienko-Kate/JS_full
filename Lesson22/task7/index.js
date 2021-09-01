const btns = document.querySelectorAll('.btn');
const handleClick = event => {
  console.log(event.target.textContent);
};
Array.from(btns).map(btn => btn.addEventListener('click', handleClick));
