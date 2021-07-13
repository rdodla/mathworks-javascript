import { users } from '../node_modules/@speedingplanet/rest-server/index.js';
// import { looper } from './utilities.js';

const names = [];

// Bound? Curried?
const looper = ( names, user ) => {
  names.push( user.displayName );
};

const looperBound = looper.bind( this, names );

// forEach()
users.forEach( looperBound );

// map()
// const mappedNames = people.map( ( user ) => user.displayName );

// filter() and map()
const mappedNames = users
  .filter( ( user ) => user.userType === 'person' )
  .map( ( user ) => user.displayName );

console.log( 'Names: ', names );
console.log( 'mappedNames: ', mappedNames );
