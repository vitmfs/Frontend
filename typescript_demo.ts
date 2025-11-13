// hello.ts
let message: string = "Hello World";
console.log(message);

interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = {
  name: "Hayes",
  id: 0,
};

const anotherUser: User = new UserAccount("Murphy", 1);

function deleteUser(user: User) {
  // ...
}
 
function getAdminUser(): User {
  return user;
}

function javascriptPrimitiveTypes(): void {

  let isSomething: boolean = false;
  let someNumber: number = 5;
  let bitIntNumber: bigint = 1000n;
  let str: string = "Hello";
  let someUndefined;
  let someNull:null = null;
  const someSymbol = Symbol();

  console.log(typeof isSomething === "boolean");
  console.log(typeof someNumber === "number");
  console.log(typeof bitIntNumber === "bigint");
  console.log(typeof str === "string");
  console.log(typeof someUndefined === "undefined");
  //console.log(typeof someNull === "null");
   console.log(typeof someSymbol === "symbol");
}
javascriptPrimitiveTypes();

function typecriptPrimitiveTypes(): void {

  let whatever: any  = false;
  let someUnknown: unknown;
  let someNever: never;
}

type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
  return obj.length;
}

















console.log("END OF TYPESCRIPT DEMO! THANKS!");

function myFunction(a, b) {
  return a * b + arguments.length;
}

const x = function (a, b) {return a * b};
let z = x(4, 3);

const myFunction2 = new Function("a", "b", "return a * b");


const myFunction3 = function (a, b) {return a * b};

(function () {
  let x = "Hello!!";  // I will invoke myself
  console.log(x);
})();

let text = myFunction.toString();

const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
myObject.fullName();

const hello = () => {
  console.log("arrow function");
}


const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);


// w3schools>JS Advanced>JS Iterations>JS Loops

// Iterates over values and expressions
for (let i = 0; i < 3; i++) {
  console.log("for loop");
}

// Iterates over a condition
let i = 0
while (i< 3) {
  console.log("while loop");
  i++;
}

// Iterates over a condition; code block executes at least once
let j = 0;
do {
  console.log("do while loop");
  j++;
}
while (j < 3);

// 	Iterates over the properties of an Object
for (key in person1) {
  console.log(key, person1[key]);
}

// Iterates over arrays, typed arrays, strings, Maps, Sets, and NodeLists
// prototype objects have a Symbol.iterator method
let array = [1, 2, 3, 4, 5];
for (const x of array) {
  console.log(x);
}

array.forEach(x => {
  console.log(x);
});

// w3schools>JS Advanced>JS Iterations>JS Iterables

// Home Made Iterable
function myNumbers() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value:n, done:false};
    }
  };
}

// Run the Iterable
const n = myNumbers();
n.next(); // Returns 10
n.next(); // Returns 20
n.next(); // Returns 30


// Create an Object
const myNumbers2 = {};

// Make it Iterable
myNumbers2[Symbol.iterator] = function() {
  let n = 0;
  let done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

for (const num of myNumbers2) {
  // Any Code Here
}

let iterator = myNumbers2[Symbol.iterator]();

while (true) {
  const result = iterator.next();
  if (result.done) break;
  // Any Code Here
}

// w3schools>JS Advanced>JS Iterations>JS Iterators

{
  // Create an iterator
  const myIterator = Iterator.from([1, 2, 3]);

  // Iterate over the elements
  let text = "";
  for (const x of myIterator) {
    text += x;
  }
}

{
  // Create an iterator
  const myIterator2 = Iterator.from([32, 33, 16, 40]);

  // Filter the iterator
  const filteredIterator = myIterator2.filter(x => x > 18);
}

{
  // Create an iterator
  const myIterator3 = Iterator.from("123456789");

  // Now you can use the map method
  const mappedIterator = myIterator3.map(x => x * 2);
}

{
  // Create an iterator
  const myIterator4 = Iterator.from([1, 2, 3, 4, 5, 6]);

  // Map the Iterator
  const mappedIterator2 = myIterator4.flatMap(x => [x, x * 10]);
}

{
  const myIterator = Iterator.from([1, 2, 3, 4, 5, 6]);

  // Take the first five elements
  const firstFive = myIterator.take(5);
}

{
  // Create an iterator
  const myIterator = Iterator.from([1, 2, 3, 4, 5, 6]);

  // Remove the first five
  const firstFive = myIterator.drop(5);
}

{
  // Create an iterator
  const myIterator = Iterator.from([3, 10, 18, 30, 20]);

  // Find first greater than 18
  let result = myIterator.find(x => x > 18);
}

{
  function myFunc(total, num) {
    return total + num;
  }

  // Create an Iterator
  const myIterator = Iterator.from([175, 50, 25]);

  // Reduce the Iterator
  let result = myIterator.reduce(myFunc);
}

{
  // Create an Iterator
  const myIterator = Iterator.from("123456789");

  // Is every Element greater than 7?
  let result = myIterator.every(x => x > 7);
}

{
  // Create an Iterator
  const myIterator = Iterator.from("123456789");

  // Is some Element greater than 7?
  let result = myIterator.some(x => x > 7);
}

{
  // Create an iterator
  const myIterator = Iterator.from("123456789");

  // Iterate over all elements
  let text = "";
  myIterator.forEach (x => text += x);
}


// w3schools>JS Advanced>JS Iterations>JS Generators

// A JavaScript Function can only return one value.
// A JavaScript Generator can return multiple values, one by one.
// A JavaScript Generator can yield a stream of data.
// A JavaScript Generator can be paused and resumed.

function* myGenerator() {} // returns generator object {value:1, done: true|false}

{
  function* myStream() {
    // return {value:1, done:false}
    yield 1;
    // return {value:2, done:false}
    yield 2;
    // return {value:3, done:true}
    return 3;
  }

  // Create a Generator
  let myGenerator = myStream();

  // Iterate over the Generator
  for (let value of myGenerator) {
    //code
  }
}


















console.log("END OF JAVASCRIPT DEMO! THANKS!");