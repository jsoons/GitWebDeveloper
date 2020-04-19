import '../styles/styles.css';
// alert("Hello, this is just a test."); 

import Person from "./modules/Person";

if (module.hot) {
  module.hot.accept();
}

// Lesson example code below this line

// function person(name,favColor) {
//   console.log("Hello, my name is " + name + " and my favorite color is " + favColor + "." );
// }

// let john = {
//   name: "John Due",
//   favColor: "blue"
// };
// let jane = {
//   name: "Jane Smith",
//   favColor: "green"
// };

// person(john.name, john.favColor);
// person(jane.name,jane.favColor);

// let john = {
//   name: "John Due",
//   favColor: "blue",
//   greet: function() {
//     console.log("Oh hello!");
//   },
//   sayName: function() {
//     console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favColor + "." )
//   }
// }

//   john.greet();
//   john.sayName();

//object maken met constructor


class Adult extends Person {
  payTaxes() {
    console.log(this.name + " payed taxes...");
  }

}

let john = new Person("John Doe", "blue");
john.greet();

let jane = new Adult("Jane Smith","green");
jane.greet();
jane.payTaxes();