function getUsersPromise() {
  let baseUrl = 'http://localhost:8000/api/zippay/v1/users/';

  let responsePromise = fetch(baseUrl);
  let resultsPromise = responsePromise.then(function (response) {
    if (response.ok) {
      return response.json();
    }
    // Hope that that response is 2xx
    // Hope that there are no errors
  });

  return resultsPromise;
}

getUsersPromise().then(function (users) {
  console.log(`There are ${users.length} users.`);
});

async function getUsersAsync() {
  let baseUrl = 'http://localhost:8000/api/zippay/v1/users/';
  let users = [];

  // fetch(baseUrl).then((response) => response.....)
  let response = await fetch(baseUrl); // 2 (yield)
  // 5
  if (response.ok) {
    users = await response.json();
  }

  return users;
}

async function main() {
  // let users = await getUsersAsync();
  let users = await getUsersPromise();
  let numbers = await doSomething();
  console.log('Awaited numbers: ', numbers);
  console.log(`(async-await) There are ${users.length} users.`);
}

function doSomething() {
  for (let x = 0; x < 1000; x++) {}
  return [1, 2, 3, 4, 5, 6];
  // 4
}

main(); // 1
doSomething(); // 3
// ....
