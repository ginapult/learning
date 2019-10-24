let myArray = ['a', 'b', 'c', 'd'];

myArray.unshift('start');
myArray.push('end');

console.log('vanilla', myArray);

// node unshift-push.js
// [ 'start', 'a', 'b', 'c', 'd', 'end' ]
// does not create a new array, modifies existing

console.log('----------------');

// ES6 - using spread operators
let myArrayES6a = ['a', 'b', 'c', 'd'];
let myArrayES6b = ['a', 'b', 'c', 'd'];

myArrayES6a = ['start', ...myArrayES6a]
myArrayES6a = [...myArrayES6a, 'end']
myArrayES6b = ['start', ...myArrayES6b, 'end']

console.log('ES6 start-end separate', myArrayES6a);
console.log('ES6, start-end together', myArrayES6b);
