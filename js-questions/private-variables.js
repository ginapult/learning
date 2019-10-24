// How to create a private variable in JS
// need to mess with scope - create var that lives in local scope of function
function privateVar() {

  var private = 'private code';

  return function () {
    return private
  }
}

var getPrivateVariable = privateVar();
// reassigning it and running it will get the private code

console.log('gets private code', getPrivateVariable());
// outputs 'private code'

console.log('--------');
console.log('anon function', privateVar());
// outputs [Function (anonymous)]