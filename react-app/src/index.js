// Ex -01
import { React } from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World!</h1>;
ReactDOM.render(element, document.getElementById("root"));
// console.log(element);

// Ex-02 - Let vs Var vs Const
function sayHello() {
  // var function scope
  // let block scope
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
sayHello();

// ex-03 - Objecct

const person = {
  name: "Hussain",
  walk() {},
  talk() {},
};

person.talk();
person["name"] = "John";
// get input
const targetMember = "name";
// get input value
person[targetMember.value] = "John";

// ex04 - this keyword
// Case#1: this returns object if called as method of an object person.walk()
// Case#2: this return WINDOWS object if called as a separate function walk()
const person_ex4 = {
  name: "Hussain",
  walk() {
    console.log(this);
  },
  talk() {},
};

person_ex4.walk();

const walk = person_ex4.walk;
console.log(walk());

// ex05 - binding this
// binding this --> would 'this' to awlays return funtion objects

const person_ex5 = {
  name: "Hussain",
  walk() {
    console.log(this);
  },
  talk() {},
};

person_ex5.talk();

const walk_ex5 = person_ex5.walk.bind(person_ex5);
console.log(walk_ex5());

// ex-07 arrow and arrow this
const person_ex7 = {
  talk() {
    // var self = this;
    // setTimeout(function () {
    setTimeout(() => {
      // console.log("this from TimeOut function: ", self);
      console.log("this from TimeOut function: ", this);
    }, 1000);
    console.log("this", this);
  },
};

person_ex7.talk();
