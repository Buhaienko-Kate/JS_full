const singleBtn = document.querySelector('.single-use-btn');
const clickBtn = () => {
  console.log('clicked');
  singleBtn.removeEventListener('click', clickBtn);
};
singleBtn.addEventListener('click', clickBtn);
