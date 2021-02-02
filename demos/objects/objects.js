let person = {
  firstName: 'John',
  lastName: 'Paxton',
  city: 'Nutley',
  state: 'NJ',
};

let state = {
  aString: '',
  aNumber: 0,
  aFunction: function () {},
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
state['aString'];

// Identifiers: $, _, or alphabetical character, followed by $, _, alphanumeric
// $, _, $foo, _foo, foo, bar, baz, something_complicated;

const passedInConfiguration = {data: cities, color: 'blue', onClick: 'whatever', onHover: 'something Else'}
const cityTable = new Table(passedInConfiguration);

// In Table
const defaults {
  data: [],
  color: 'green', 
  onClick: null,
  onHover: null,
  columns: [],
  otherThing: {}
};

const config = {...defaults, ...passedInConfiguration};