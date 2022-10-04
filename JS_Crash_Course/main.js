/*
console.log("hello world");

// variables
// var = has global scope
// let = can reassign values, has local scope
// const = constant

let score;
score = 20;
console.log(score);

// Data Types
// Strings, Numbers, Booleans, null, undefined, Symbol

const name = "John";
const age = 30;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);

// Strings
//Concatenation
console.log(`My name is ${name} and I am ${age}`); // Use back tick for template strings
const s = 'Hello World!';
console.log(s.length);
console.log(s.substring(0, 5));
console.log(s.split(" "));

// Arrays
const fruits = ["apples", "oranges", "pears"];
const random = ["hello", "world", 5, 0.9]; // in javascript, can store diff types of datatypes in the same array
console.log(fruits[1]);
fruits[3] = "grapes";
fruits.push("mangoes"); // push_back()
fruits.unshift("strawberries"); // push_front();
fruits.pop();
console.log(fruits.indexOf("pears"));

//object literals
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports "],
  address: {
    street: "main street",
    city: "Boston",
    state: "MA",
  },
};

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {
  firstName,
  lastName,
  address: { city },
} = person; // Destructuring, making properties of objects a variable
console.log(firstName, city);

person.email = "john@gmail.com"; // adding property to object

// Array of objects
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isComplete: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isComplete: true,
  },
  {
    id: 1,
    text: "Dentist appt",
    isComplete: false,
  },
];

console.log(todos[1].text);

// JSON
const todoJSON = JSON.stringify(todos); // convert to JSON
console.log(todoJSON);

// For loop
for (let i = 0; i < todos.length; i++) {
  console.log(`for loop index ${i}`);
  console.log(todos[i].test);
}
// for of loop (for each)
for (let todo of todos) {
  console.log(todo.text);
}

// while loop
let i = 0;
while (i < 10) {
  console.log(`while loop index ${i}`);
  i++;
}

// High order array methods
todos.forEach(function (todo) {
  console.log(todo.text);
});
const todoTextMap = todos.map(function (todo) {
  return todo.text;
});
const todoCompleted = todos
  .filter(function (todo) {
    return todo.isComplete == true;
  })
  .map(function (todo) {
    return todo.text;
  });

// Conditionals
const a = "10";
if (a == 10) {
  // double equal only matches the value, not the data types
  console.log("a is 10");
}
const b = 10;
if (b === 10) {
  // triple equal matches the value the data types
  console.log("b is 10 and int");
} else if (b > 10) {
  console.log("b is greater than 10");
} else {
  console.log("b is less than 10");
}
const c = 10;
if (b > 5 || c > 10) {
  console.log("b is more than 5 or c is more than 10");
}
if (b > 5 && c > 10) {
  console.log("b is more than 5 and c is more than 10");
}

// Ternary operator
const xx = 10;
const color = xx > 10 ? "red" : "blue"; //if xx is greater than 1o then color is red, if ot color is blue

// Switches
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
}

// Functions
function addNums(num1 = 1, num2 = 1) {
  //default value is 1 and 1, like default constructor
  return num1 + num2;
}
console.log(addNums(5, 4));

// Arrow function
const addNumsArrow = (num1 = 1, num2 = 1) => {
  return num1 + num2;
};
const addNumsSimplified = (num1 = 1, num2 = 1) => num1 + num2;

todos.forEach((todo) => console.log(todo));

// Object Oriented Programming
// Constructor Function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }

// person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };
// person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// Class
class PersonClass {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Instantiate object
// const person1 = new Person("John", "Doe", "4-3-1980");
const person2 = new PersonClass("Mary", "Smith", "3-6-1970");

// console.log(person1.getBirthYear());
console.log(person2.getFullName());
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
// Single Element
const formById = document.getElementById("my-form");
console.log(formById);
const ul = document.querySelector(".items"); // single selector so only going to select the first one
console.log(ul);

// Double Element
const items = document.querySelectorAll(".items"); // Returns NodeList, like an array, can run array methods on it
items.forEach((item) => console.log(item));

// Manipulating items gotten from querySelector
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = "<h1> Hello </h1>";

const btn = document.querySelector(".btn");
btn.style.background = "red";

// Events
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  console.log(e);
  document.querySelector("#my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  ul.lastElementChild.innerHTML = "<h5> Hello </h5>";
});
*/

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all the fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields'

    setTimeout(() => msg.remove(), 3000);
  } else {
    //console.log('Success');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

    userList.appendChild( li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}