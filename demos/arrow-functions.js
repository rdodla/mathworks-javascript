/* eslint-disable no-unused-vars */
function addStandard( x = 0, y = 0 ) {
  return x + y;
}

const add = ( x = 0, y = 0 ) => x + y;

function squaredStandard( x ) {
  return x * x;
}

const squared = ( x ) => x * x;

// This is terrible
// const x = x => x * x;
