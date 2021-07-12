/* eslint-disable no-unused-vars */

// Function declaration: hoisted
function basicAdd() {
  return 2 + 2;
}

// Function expression: not hoisted
const assignedAdd = function() {
  return 2 + 2;
};

basicAdd();

// Function references can be copied
const otherAdd = basicAdd;

// Typical function
function add( x, y ) {
  return x + y;
}

// Default parameter values
function addDefaults( x = 0, y = 10 ) {
  return x + y;
}

// Function signatures are not enforced in JavaScript
// Allowed
addDefaults( 5, 7 );
addDefaults( 1, 2, 3, 4, 5 );
addDefaults( undefined, 5 );
addDefaults( 1 );
addDefaults();

// Works
addRest( 1, 2, 3, 4, 5 );

// Rest parameters
// The "rest" of the values
function addRest( x = 0, y = 0, ...otherParams ) {
  console.log( 'Other params: ', otherParams );
  let total = 0;
  for ( const x of otherParams ) {
    total = total + x;
  }
  return x + y + total;
}

function getAllParameters( ...params ) {
  // params is an array of all arguments
}

getAllParameters( 1, 2, 3 );
getAllParameters( 'John', 30, true, [ 'a', 'b', 'c' ] );

// Can just vaccuum up all arguments into one array
function addAll( ...numbers ) {
  let total = 0;
  for ( const x of numbers ) {
    total = total + x;
  }
  return total;
}

addAll( 1, 2, 3, 4, 5 );

// Functions can return functions
function getGreeter() {
  return function() {
    console.log( 'Greetings!' );
  };
}

const greeter = getGreeter();

const getCustomGreeter = function( name ) {
  return function() {
    console.log( 'Greetings,', name );
  };
};

const customGreeter = getCustomGreeter( 'John' );
// customGreeter();

// JavaScript only has manual-style overloading, not as a language feature
function overloaded( x, y ) {
  if ( typeof x === 'string' ) {
    // do this
  } else if ( typeof x === 'number' ) {
    // do something else
  }
}
