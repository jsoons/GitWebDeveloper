// function Person(name,favColor) {
//   this.name = name;
//   this.favColor = favColor;
//   this.greet = function() {
//     console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favColor + ".");
//   }

// }

class Person {
  constructor (name,favColor) {
    this.name = name;
    this.favColor = favColor;
  }
  greet() {
    console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favColor + ".");
  }
}

export default Person