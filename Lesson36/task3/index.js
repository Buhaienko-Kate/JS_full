// 1. создать функцию getUsersBlogs
// 2. создать еще одну функцию для паралельной отправки запросов
// 3. гспользовать эту функцию для всех запросов
// 4. вывести ошибки, если  есть

const fetchUsersById = users => {
  return users.map(async userId => {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (response.ok) {
      const user = await response.json();
      return user.blog;
    }
    throw new Error('Failed to fetch user');
  });
};

export const getUsersBlogs = usersArr => {
  try {
    return Promise.all(fetchUsersById(usersArr));
  } catch (err) {
    console.log(err);
  }
};

const usersArr = ['facebook', 'github'];
getUsersBlogs(usersArr).then(res => console.log(res));
