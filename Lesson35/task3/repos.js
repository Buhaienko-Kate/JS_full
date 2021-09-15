const listElem = document.querySelector('.repo-list');

export const cleanReposList = () => {
  listElem.innerHTML = '';
};

export const renderRepos = repoList => {
  const repoListElem = repoList.map(({ name }) => {
    const listItemElem = document.createElement('li');
    listElem.classList.add('repo-list__item');
    listElem.textContent = name;

    return listItemElem;
  });
  //   cleanReposList();
  listElem.append(...repoListElem);
};
