// Declaration => Assigment
var name;

name = "lucas";

// Type of data
console.log(typeof name);

// Grup declarations
let age, isHuman;

age = 17;

isHuman = true;

// multi arguments
console.log(name, age, isHuman);

// write text + variable
console.log("O " + name + " tem " + age);

console.log(`O ${name} tem ${age}`);

// Object

const person = {
  name: "Lucas",
  age: 17,
  weight: 180,
};

console.log(person);
console.log(person.age);

// Array

const animals = ["Lion", "Monkey"];

console.log(animals[0]);
console.log(animals[1]);
