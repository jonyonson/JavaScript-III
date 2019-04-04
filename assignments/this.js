/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global Object Binding  - when `this` is used in the global scope, `this` refers to the window object.
 * 2. Implicit Binding - whenever a function is called with a dot to the left, the object preceding the dot is `this`.
 * 3. New Binding - If a constructor function is used, `this` referes to the instance of that object that is created with the `new` keyword.
 * 4. Explicit Binding - this is explicitly defined whenever .call or .apply is used.
 *
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding

function sayName(name) {
  console.log(this);
  return name;
}
sayName('Jonathan');

// Principle 2
// code example for Implicit Binding

const dog1 = {
  sound: 'Woof!',
  speak: function() {
    console.log(this.sound);
  },
};
dog1.speak();

// Principle 3
// code example for New Binding

function Animal(obj) {
  this.sound = obj.sound;
  this.speak = function() {
    console.log(this.sound);
  };
}
const dog2 = new Animal({ sound: 'Woof! Woof!' });
dog2.speak();

// Principle 4
// code example for Explicit Binding

const speak = function() {
  console.log(this.sound);
};
const dog3 = {
  sound: 'Woof! Woof! Woof!',
};
speak.call(dog3);
