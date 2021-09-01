const btns = document.querySelectorAll('.pagination__page');
const handleClick = event => {
  console.log(event.target.dataset.pageNumber);
};
Array.from(btns).map(btn => btn.addEventListener('click', handleClick));
