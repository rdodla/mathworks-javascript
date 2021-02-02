// Don't do this
// let data = [1, 'one', {a: 'apple'}, new Date()];

let cities = ['Boston', 'New York', 'Chicago', 'San Francisco'];

cities.push('Natick'); // Increase size by one
let lastCity = cities.pop(); // 'Natick', decrease size by one

let firstCity = cities.shift(); // 'Boston', decrease size by one
cities.unshift(firstCity); // increase size by one

// Anywhere not at either end
let secondElement = cities.splice(1, 1); // ['New York'], decrease size by one

cities.splice(1, 0, ...secondElement); // Inserts 'New York', increase size by one

// Deleted is ['New York', 'Chicago', 'San Francisco']
// Array is now 6 element long, 'Boston' plus the added elements
let deleted = cities.splice(1, 3, 'Natick', 'Waltham', 'Framingham', 'Acton', 'Worcester');

// Iteration

cities.forEach((city) => console.log(city));

for(let x = 0; x < cities.length; x ++) {
  console.log(cities[x]);
}

for (let city of cities) {
  console.log(city);
}

const para = document.getElementById('message-container');
let listRef = document.getElementById('cities-list');
listRef.addEventListener('click', function (event) {
  const listItem = event.target;
  para.hidden = false;
  event.stopPropagation();

  const span = para.querySelector('span');
  span.textContent = listItem.textContent;
  console.log(`You clicked on ${listItem.textContent}.`);
});

document.body.addEventListener('click', function () {
  para.hidden = true;
});

