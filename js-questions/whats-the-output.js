// What is the output?
var num = 4; // irrelevant

function outer(){
  var num = 2; // overrides original but also irrelevant
  function inner(){
    num++; // undefined bc var num above is out of scope
    var num = 3;
    console.log(num); // 3
  }
  inner();
}
outer();

console.log ('--------------')

console.log(typeof typeof 1);
// string - because typeof 1 is 'number', typeof 'number' is string

console.log ('--------------')

var hero = {
  _name: 'John Doe',
  getSecretIdentity: function(){
    return this._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity()); // undefined bc we extracted hero from it
console.log(hero.getSecretIdentity()); // 'John Doe'

//if we bind it like this (stick the hero onto stolenSecretIdentity)

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
console.log(stoleSecretIdentity()); // 'John Doe'