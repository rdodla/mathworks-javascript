// The main entry point for our JavaScript application.
// import {greeting} from './utilities.js';
import * as boris from './utilities.js';
import {greeting as specialGreeting} from './utilities.js';


console.log('Hello from a module.');
boris.greeting();
specialGreeting();