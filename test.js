const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: 'name',
});

console.log(searchParams.toString()); // "_limit=5&_sort=name"

const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"

const fetchUsersBtn = document.querySelector('.btn');
const userList = document.querySelector('.user-list');

fetchUsersBtn.addEventListener('click', onBtnFetchUsers);
function onBtnFetchUsers(params) {
  fetchUsers()
    .then(users => renderUserList(users))
    .catch(error => console.log(error));
}
function fetchUsers() {
  return fetch(
    'https://jsonplaceholder.typicode.com/users?_limit=10&_sort=foo'
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    console.log(response);
    return response.json();
  });
}

function renderUserList(users) {
  const markup = users
    .map(user => {
      return `
          <li>
            <p><b>Name</b>: ${user.name}</p>
            <p><b>Email</b>: ${user.email}</p>
            <p><b>Company</b>: ${user.company.name}</p>
          </li>
      `;
    })
    .join('');
  userList.innerHTML = markup;
}
