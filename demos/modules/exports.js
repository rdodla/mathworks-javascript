const x = 10;
export { x };

// Should run only once.
console.log('Ran exports.js');

// Almost like "public const y = 20"
export const y = 20;

let a = 1;
let b = 2;
let c = 3;
const d = [1, 2, 3];

// Copies by reference
const e = [...d];

d.push(6);
e[3]; // Does not exist, but does not throw an error (!)

export function bar() {
  console.log('exports.bar()');
}

export {a, b, c, e};
