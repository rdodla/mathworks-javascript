/* eslint-disable no-unused-vars */

const states = [ 'NJ', 'MA', 'CA', 'IL', 'FL' ];

// Assign directly to an index.
states[3] = 'AK';

// Add to the end of the array
states.push( 'WA', 'TX' );

// states is now one element shorter
const lastElement = states.pop();

// Add to the beginning or front of the array
states.unshift( 'CT' );

// states is another element shorter
const firstElement = states.shift();

// states.splice(start, length, replacement?);
// Delete two elements
states.splice( 1, 2 );

// Insert three elements at position 2
states.splice( 2, 0, 'AR', 'AZ', 'CO' );

// Replace the element at position 4
states.splice( 4, 1, 'DE' );
