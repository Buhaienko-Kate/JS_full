import { fetchUserData, fetchRepositiries } from './gateways.js';
import { renderUserData } from './users.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spiner.js';

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

const defaultUser = {
  avatar_url: defaultAvatar,
  name: '',
  location: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = async () => {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;

  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);

    const reposList = await fetchRepositiries(userData.repos_url);
    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();
  }

  // fetchUserData(userName)
  //   .then(userData => {
  //     renderUserData(userData);
  //     return userData.repos_url;
  //   })
  //   .then(url => fetchRepositiries(url))
  //   .then(repoList => {
  //     renderRepos(repoList);
  //   })
  //   .catch(err => {
  //     alert(err.message);
  //   })
  //   .finally(() => {
  //     hideSpinner();
  //   });
};

showUserBtnElem.addEventListener('click', onSearchUser);
