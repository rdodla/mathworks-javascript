function basicAdd() {
  return 2 + 2;
}

function add(x, y) {
  return x + y;
}

function oldAddDefaults(x, y) {
  if (x === undefined) {
    x = 0;
  }

  if (y === undefined) {
    y = 0;
  }

  return x + y;
}

// Default parameter values
function addDefaults(x=0, y=0) {
  return x + y;
}

// Works
addRest(1, 2, 3, 4, 5);

// Fails
addRestVar(1, 2, 3, 4, 5);

// Rest parameters
// The "rest" of the values
function addRest(x=0, y=0, ...otherParams) {
  console.log('Other params: ', otherParams);
  let total = 0;
  for(let x of otherParams) {
    total = total + x;
  }
  return x + y + total;
}

let addRestRef = addRest;
addRestRef(1, 2, 3, 4, 5);

let addRestVar = function(x=0, y=0, ...otherParams) {
  console.log('Other params: ', otherParams);
  let total = 0;
  for(let x of otherParams) {
    total = total + x;
  }
  return x + y + total;
}

addRestVar(1, 2, 3, 4, 5);

function overloaded(x, y) {
  if (typeof x === 'string') {
    // do this
  } else if (typeof x === 'number') {
    // do something else
  }
}

function getGreeter() { 
  return function() {
    console.log('Greetings!');
  }
}

let greeter = getGreeter();

// Don't do this. Though it is valid syntactically
function wayOuter() {
  function outer() {
    function inner() {
      function wayInner() {

      }
    }
  }
}