let contacts = [
  {
    name: 'Nate',
    phoneNumber: '777-89-96',
  },
  {
    name: 'Alex',
    phoneNumber: '777-89-96',
  },
  {
    name: 'Tom',
    phoneNumber: '777-89-96',
  },
  {
    name: 'Bob',
    phoneNumber: '777-89-96',
  },
];
let user = {
  name: 'Nate',
  phoneNumber: '777-89-96',
};

function sortContacts(arrContacts, boolean = true) {
  if (!Array.isArray(arrContacts)) {
    return null;
  } else if (boolean === true) {
    return arrContacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else if (boolean === false) {
    return arrContacts.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }
}

console.log(sortContacts(user, true));
