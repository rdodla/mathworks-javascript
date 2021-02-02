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
