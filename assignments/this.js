/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. when called simply it points to the window object
 * 2. you can call it explicit by binding it
 * 3. called in an object it refers to it
 * 4. it is used in constructors
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
var x = this;
console.log(x === window);
// Principle 2
// code example for Implicit Binding
const singer = {
  name: "Queen",
  favSong: "Mr Fahrenheit",
  singIt: function() {
    console.log(`${this.name} loves to sing ${this.favSong}`);
  }
};
singer.singIt();
// Principle 3
// code example for New Binding
function Person({ name, age, job }) {
  this.name = name;
  this.age = age;
  this.job = job;
}

const Mike = new Person({
  name: "Mike",
  age: 45,
  job: "Butcher"
});
console.log(Mike);
// Principle 4
// code example for Explicit Binding
const dog = {
  name: "Jerry",
  race: "Toy Terrier",
  age: 3,
  skin: "brown"
};

function describeDog() {
  console.log(`${this.name} is a ${this.race} of age ${this.age}`);
}

describeDog.call(dog);
