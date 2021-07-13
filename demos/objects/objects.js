/* eslint-disable no-unused-vars, no-unused-expressions */
const person = {
  firstName: 'John',
  lastName: 'Paxton',
  city: 'Nutley',
  state: 'NJ',

  // Different ways to add a function
  getState() {
    return this.state;
  },
  getCity: function() {
    return this.city;
  },
  add: ( x, y ) => x + y,
};

// Iteration possibilities
const keys = Object.keys( person );
const values = Object.values( person );

// entries [[key1, value1], [key2, value2]]
const entries = Object.entries( person );

Object.keys( person ).forEach( ( key ) => {
  console.log( `${key}: ${person[key]}` );
} );

// Object.keys() equivalent
for ( const key in person ) {
  // Whatever
}

// Destructuring
const { firstName, lastName } = person;

// Identifiers: $, _, or alphabetical character, followed by $, _, alphanumeric
// $, _, $foo, _foo, foo, bar, baz, something_complicated;

const state = {
  aString: '',
  aNumber: 0,
  aFunction: function() {},
  anArrowFunction: () => {},
  anotherFunction() {},
  anotherObject: {
    innerObject: {
      reallyDeepObject: {
        kindOfRidiculousObject: {
          message: 'Hi',
        },
      },
    },
  },
  'something-complicated': 'value',
  'some spaces': 'value',
};

state['some spaces'];
state.aString;
