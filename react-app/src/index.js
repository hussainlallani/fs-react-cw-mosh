// import React from "react";
// import reactDOM from "react-dom";

// const element = <h1>Hello World</h1>;
// reactDOM.render(element, document.getElementById("root"));

// -----------------------------
// var -> function
// let -> block
// const -> block

// function sayHello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// sayHello();
// --------------------------------
// const x = 1;
// x = 2;
// console.log(x);
// ----------------------------------

// const person = {
//   name: "Mosh",
//   walk: function () {},
//   talk() {},
// };

// person.talk();

// 2 ways to access object property
//1.  const targetMember = "name";
//2. person['name']='John'
//eg. person[targetMember.value] = "John";

// -----------------------------

// 'this' function reacts differently depending on how it's called.
// const person = {
//   name: "mosh",
//   walk() {
//     console.log(this); //displays the entire object
//   },
// };

// person.walk();

// const walk = person.walk;
// console.log(walk); //display windows object in browsers
// walk();

// const walk = person.walk.bind(person);
// console.log(walk); //display windows object in browsers

// -------------------------------

// const square = function (number) {
//   return number * number;
// };

// Other way to do it
// const square = (number) => number * number;
// console.log(square(5));

// -----------------

// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false },
// ];

// const activeJobs = jobs.filter(function (job) {
//   return jobs.isActive;
// });

// const activeJobs = jobs.filter((job) => jobs.isActive);

// console.log(activeJobs);

// const person = {
//   talk() {
//     var self = this;
//     setTimeout(function () {
//       console.log("self", self);
//     }, 1000);
//   },
// };

// other way via arrow function

// const person = {
//   talk() {
//     setTimeout(() => {
//       console.log("this", this);
//     }, 1000);
//   },
// };

// person.talk();

// -------------------------------

// const colors = ["red", "blue", "green"];
// const items = colors.map((color) => `<li>${color}</li>`);
// console.log(items);

import React from "react";
import reactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/Counter";

reactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
