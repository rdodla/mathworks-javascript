// Concept demo
let object = {
  x: 10,
  foo() {
    console.log('Called foo, x is ', this.x);
  },
  bar() {
    console.log('Calling foo from within bar:');
    this.foo();
  },
  baz() {
    console.log('Calling baz, which defines a subfunction which calls foo()');
    function inner() {
      console.log('baz() inner function, x is ', this.x);
      this.foo();
    }
    inner();
  },
  arrow() {
    console.log('Calling arrow, which defines a subfunction which calls foo()');
    const inner = () => {
      console.log('arrow() inner function, x is ', this.x);
      this.foo();
    };
    inner();
  },
};

object.foo(); // Works
object.bar(); // Works
object.arrow();

// Uncomment to see an error
// object.baz(); // this.x is undefined, this.foo throws an error

// Practical demo
// Need to have rest-server running for this to work

let dao = {
  fetchPerson() {
    console.log('fetchPerson');
    fetch('http://localhost:8000/api/zippay/v1/users/205').then(function (
      response
    ) {
      if (response.ok) {
        response.json().then((person) => {
          console.log(`Fetched user ${person.displayName}`);
        });
      }
    });
  },
  fetchPersonArrow() {
    console.log('fetchPersonArrow');
    fetch('http://localhost:8000/api/zippay/v1/users/205').then((response) => {
      if (response.ok) {
        response.json().then((person) => this.renderPerson(person));
      }
    });
  },
  fetchPersonThenRender() {
    console.log('fetchPersonThenRender');
    fetch('http://localhost:8000/api/zippay/v1/users/205').then(function (
      response
    ) {
      if (response.ok) {
        response.json().then(function (person) {
          this.renderPerson(person);
        });
      }
    });
  },
  renderPerson(person) {
    console.log(`Fetched user ${person.displayName}`);
  },
};

dao.fetchPerson();
dao.fetchPersonArrow();
dao.fetchPersonThenRender();
