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

// w3schools>Basic JavaScript>JS Versions>JS 2026

{
  //Error.isError(new TypeError()); // true
  //Error.isError({ name: "Error" }); // false
}

{
  async function* asyncGenerator() {
    yield Promise.resolve(1);
    yield Promise.resolve(2);
    yield Promise.resolve(3);
  }

  async function processAsyncData() {
    const arr = await Array.fromAsync(asyncGenerator());
  }

  processAsyncData();
}

{
  class MyResource {
    constructor(name) {
      this.name = name;
      myDisplay(`Resource ${this.name} acquired.`);
    }
    [Symbol.dispose]() {
      myDisplay(`Resource ${this.name} disposed.`);
    }
  }

  function manageResource() {
  using resource = new MyResource("Database Connection");

  // Use the resource here
  myDisplay(`Using resource: ${resource.name}`);
  }
}

{
  class MyResource {
    constructor(name) {
      this.name = name;
      myDisplay(`Resource ${this.name} acquired.`);
    }
    [Symbol.dispose]() {
      myDisplay(`Resource ${this.name} disposed.`);
    }
  }

  function manageResource() {
  using resource = new MyResource("Database Connection");

  // Use the resource here
  myDisplay(`Using resource: ${resource.name}`);
  }
}

{
  //let string = 'W3Schools 123';

  //const arr = Uint8Array.fromBase64(string);
}

{
  //const arr = new Uint8Array([91,116,156,134,138,37,179,93,183]);

  //let text = arr.toBase64();
}

{
  // let string = 'W3Schools 123';

  // const arr = Uint8Array.fromBase64(string);
}

{
  // const arr = new Uint8Array([91,116,156,134,138,37,179,93,183]);

  // let text = arr.toBase64();
}

{
  // let text = '5b749c868a25b35db7';

  // const arr = Uint8Array.fromHex(text);
}

{
  // const arr = new Uint8Array([91,116,156,134,138,37,179,93,183]);

  // let text = arr.toHex();
}

{
  // let text = '5b749c868a25b35db7';

  // const arr = Uint8Array.fromHex(text);
}

{
  // const arr = new Uint8Array([91,116,156,134,138,37,179,93,183]);

  // let text = arr.toHex();
}

// w3schools>Basic JavaScript>JS Versions>JS 2025

{
  let text = "Hello 😄";

  let pattern = /\p{RGI_Emoji}/v;
  let result = pattern.test(text);
}

{
  let text = "Hello 😄";

  let pattern = /\p{RGI_Emoji}/;
  let result = pattern.test(text);
}

{
  // Escape a text for to use as a regular expression
  //const safe = RegExp.escape("[*]");

  // Build a new reglar expression
  //const regex = new RegExp(safe);

  // Text to replace within
  //const oldText = "[*] is a web school.";

  // Perform the replace
  //const newText = oldText.match(regex, "W3Schools");
}

{
  // const myArr = new Float16Array([1.5, 2.5, 3.5, 4.5]);

  // let bytes = myArr.BYTES_PER_ELEMENT;
  // let length = myArr.length;
}

{
  // let a = Math.f16round(2.60);
  // let b = Math.f16round(2.50);
  // let c = Math.f16round(2.49);
  // let d = Math.f16round(-2.60);
  // let e = Math.f16round(-2.50);
  // let f = Math.f16round(-2.49);
}

{
  function compute() {
    return Promise.try(() => {
      const v = mayThrowSync();
      return asyncFunc(v);
    });
  }
}

{
  const A = new Set(['a','b','c']);
  const B = new Set(['b','c','d']);

  const C = A.union(B);
}

{
  const A = new Set(['a','b','c']);
  const B = new Set(['b','c','d']);

  const C = A.intersection(B);
}

{
  const A = new Set(['a','b','c']);
  const B = new Set(['b','c','d']);

  const C = A.difference(B);
}

{
  const A = new Set(['a','b','c']);
  const B = new Set(['b','c','d']);

  //const C = A.symetricDifference(B);
}

{
  const A = new Set(['a','b','c']);
  const B = new Set(['b','c','d']);

  let answer = A.isSubsetOf(B);
}

{
  const A = new Set(['a','b','c']);
  const B = new Set(['b','c','d']);

  let answer = A.isSupersetOf(B);
}

{
  const A = new Set(['a','b','c']);
  const B = new Set(['b','c','d']);

  let answer = A.isDisjointFrom(B);
}

{
  // Create an Array
  const fruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];

  // Callback function to Group Elements
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }

  // Group by Quantity
  const result = Object.groupBy(fruits, myCallback);
}

{
  // Create a Map
  const fruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];

  // Callback function to Group Elements
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }

  // Group by Quantity
  const result = Map.groupBy(fruits, myCallback);
}

{
  let text = "Hello world!";
  let result = text.isWellFormed();
}

{
  let text = "Hello World \uD800";
  let result = text.isWellFormed();
}

{
  let text = "Hello World \uD800";
  let result = text.toWellFormed();
}

{
  const temp = [27, 28, 30, 40, 42, 35, 30];
  let high = temp.findLast(x => x > 40);
}

{
  const temp = [27, 28, 30, 40, 42, 35, 30];
  let pos = temp.findLastIndex(x => x > 40);
}

{
  const months = ["Jan", "Feb", "Mar", "Apr"];
  const reversed = months.toReversed();
}

{
  const months = ["Jan", "Feb", "Mar", "Apr"];
  const sorted = months.toSorted();
}

{
  const months = ["Jan", "Feb", "Mar", "Apr"];
  const spliced = months.toSpliced(0, 1);
}

{
  const months = ["Januar", "Februar", "Mar", "April"];
  const newArray = months.with(2, "March");
}

// w3schools>Basic JavaScript>JS Versions>JS 2022

{
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
}

{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let fruit = fruits[2];
}

{
  const name = "W3Schools";
  let letter = name.at(2);
}

{
  const name = "W3Schools";
  let letter = name[2];
}

{
  let text = "aaaabb";
  let result = text.match(/(aa)(bb)/d);
}

{
  //Object.hasOwn({}, age);
}

{
  try {
    try {
      // Create a JSON parse failure
      JSON.parse("blablablabla");
    } catch(err) {
      // Create a new error and include the original one as the cause
      throw new Error("Failed to load JSON", {cause:err});
    }
  } catch(err){
    let text = err.name + " " + err.message;
  }
}

{
  class Hello {
    counter = 0; // Class field
  }
  const myClass = new Hello();

  let x = myClass.counter;
}

{
  class Hello {
    #counter = 0;  // Private field
    #myMethod() {} // Private method
  }
  const myClass = new Hello();

  //let x = myClass.#counter; // Error
  //myClass.#myMethod();      // Error
}

// w3schools>Basic JavaScript>JS Versions>JS 2021

{
  // Create a Promise
  const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "King");
  });

  // Create another Promise
  const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Queen");
  });

  // Run when any promise fulfill
  Promise.any([myPromise1, myPromise2]).then((x) => {
    console.log(x);
  });
}

{
  let text = "";
  text = text.replaceAll("Cats","Dogs");
  text = text.replaceAll("cats","dogs");
}

{
  let text = "";
  text = text.replaceAll(/Cats/g,"Dogs");
  text = text.replaceAll(/cats/g,"dogs");
}

{
  const num1 = 1_000_000_000;
  const num2 = 1000000000;
  (num1 === num2);
}

{
  const num1 = 1_2_3_4_5;
}

// w3schools>Basic JavaScript>JS Versions>JS 2020

{
  let x = 999999999999999;
  let y = 9999999999999999; // too big
}

{
  let x = 9999999999999999;
  let y = 9999999999999999n;
}

{
  let x = 1234567890123456789012345n;
  let y = BigInt(1234567890123456789012345);
}

{
  let x = BigInt(999999999999999);
  let type = typeof x;
}

{
  const iterator = text.matchAll("Cats");
}

{
  const iterator = text.matchAll(/Cats/g);
}

{
  const iterator = text.matchAll(/Cats/gi);
}

{
  let name = null;
  let text = "missing";
  let result = name ?? text;
}

{
  const car = {type:"Fiat", model:"500", color:"white"};
  let name = car?.name;
}

{
  let x = 10;
  x &&= 5;
}

{
  let x = 10;
  x ||= 5;
}

{
  let x;
  x ??= 10;
}

{
  // Create a Promise
  const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "King");
  });

  // Create another Promise
  const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Queen");
  });

  // Settle All
  Promise.allSettled([myPromise1, myPromise2]).then((results) =>
    results.forEach((x) => console.log(x.status)),
  );
}

{
  const getGlobal = function() {
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw new Error('Cannot find global object');
  };
}

{
  const myObject = import.meta;
}

// w3schools>Basic JavaScript>JS Versions>JS 2019

{
  let text1 = "     Hello World!     ";
  let text2 = text1.trimStart();
}

{
  let text1 = "     Hello World!     ";
  let text2 = text1.trimEnd();
}

{
  const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
  ];

  const myObj = Object.fromEntries(fruits);
}

{
  try {
  // code
  } catch (err) {
  // code
  }
}

{
  try {
  // code
  } catch {
  // code
  }
}

{
  const myArr = [[1,2],[3,4],[5,6]];
  const newArr = myArr.flat();
}

{
  const myArr = [1, 2, 3, 4, 5, 6];
  const newArr = myArr.flatMap(x => [x, x * 10]);
}

{
  const myArr = [
    {name:"X00",price:100 },
    {name:"X01",price:100 },
    {name:"X02",price:100 },
    {name:"X03",price:100 },
    {name:"X04",price:110 },
    {name:"X05",price:110 },
    {name:"X06",price:110 },
    {name:"X07",price:110 }
  ];
}

{
  let text = JSON.stringify("\u26D4");
}

{
  // This is valid in ES2019:
  let text = "\u2028";
}

{
  function myFunction(p1, p2) {
    return p1 * p2;
  }
  let text = myFunction.toString();
}

// w3schools>Basic JavaScript>JS Versions>JS 2018

{
  //for await () {};
}

{
  let myPromise = new Promise(() => {});

  myPromise.then();
  myPromise.catch();
  myPromise.finally();
}

{
  let a, rest;
  const arr1 = [1,2,3,4,5,6,7,8];

  [a, ...rest] = arr1;
}

{
  let a, b, rest;
  const arr1 = [1,2,3,4,5,6,7,8];

  [a, b, ...rest] = arr1;
}

{
  // Create an Object:
  const car = {type:"Fiat", model:"500", color:"white"};

  // Destructure the Object
  let {type, model, color} = car;
}

{
  let text = "Line\nLine.";

  let pattern = /Line./gs;
  let result = text.match(pattern);
}

{
  let text = "Hello 😄";

  let pattern = /\p{RGI_Emoji}/v;
  let result = pattern.test(text);
}

{
  let text = "Hello W3Schools";

  let pattern = /(?<=Hello )W3Schools/;
  let result = pattern.test(text);
}

{
  let text = "Hello W3Schools";

  let pattern = /(?<=Hello )W3Schools/;
  let result = pattern.test(text);
}

{
  const text = "Name: John Doe";

  // Using named capturing groups
  const regex = /(?<firstName>\w+) (?<lastName>\w+)/;
  const match = text.match(regex);

  let fName = match.groups.firstName;
  let lName = match.groups.lastName;
}

// w3schools>Basic JavaScript>JS Versions>JS 2017

{
  let text = "5";
  text = text.padStart(4,0);
}

{
  let text = "5";
  text = text.padEnd(4,0);
}

{
  const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
  };

  let text = Object.entries(person);
}

{
  const fruits = {Bananas:300, Oranges:200, Apples:500};

  let text = "";
  for (let [fruit, value] of Object.entries(fruits)) {

  }
}

{
  const fruits = {Bananas:300, Oranges:200, Apples:500};

  const myMap = new Map(Object.entries(fruits));
}

{
  const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
  };

  let text = Object.values(person);
}

{
  async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
      setTimeout(function() { myResolve("I love You !!"); }, 3000);
    });

  }

  myDisplay();
}

{
  // function myFunc(x,,,) {};
  // const myArr = [1,2,3,4,,,];
  // const myObj = {fname: John, age:50,,,};
}

{
  const myProp = Object.getOwnPropertyNames({});
}

{
  const myProp = Object.getOwnPropertyDescriptors({});
}

{
  const clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors({}));
}

// w3schools>Basic JavaScript>JS Versions>JS 2016

{
  let x = 5;
  let z = x ** 2;
}

{
  let x = 5;
  let z = Math.pow(x,2);
}

{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  fruits.includes("Mango");
}

// w3schools>Basic JavaScript>JS Versions>JS 2015 (ES6)

{
  let x = 10;
  // Here x is 10
  {
    let x = 2;
    // Here x is 2
  }
  // Here x is 10
}

{
  let x = 10;
  // Here x is 10
  {
    const x = 2;
    // Here x is 2
  }
  // Here x is 10
}

{
  let myFunction = function(a, b) {return a * b}
}

{
  let myFunction = (a, b) => a * b;
}

{
  // This will not work
  let myFunction = (x, y) => { x * y } ;

  // This will not work
  //let myFunction2 = (x, y) => return x * y ;

  // Only this will work
  let myFunction3 = (x, y) => { return x * y };
}

{
  // Create an Object
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  // Destructuring Assignment
  let { firstName, age } = person;
}

{
  // Create an Array
  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  // Destructuring Assignment
  let [fruit1, fruit2] = fruits;
}

{
  const numbers = [23,55,21,87,56];
  let minValue = Math.min(...numbers);
  let maxValue = Math.max(...numbers);
}

{
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [...arr1, ...arr2];
}

{
  const q1 = ["Jan", "Feb", "Mar"];
  const q2 = ["Apr", "May", "Jun"];
  const q3 = ["Jul", "Aug", "Sep"];
  const q4 = ["Oct", "Nov", "Dec"];

  const year = [...q1, ...q2, ...q3, ...q4];
}

{
  const cars = ["BMW", "Volvo", "Mini"];
  let text = "";

  for (let x of cars) {
    text += x + " ";
  }
}

{
  let language = "JavaScript";
  let text = "";

  for (let x of language) {
      text += x + " ";
  }
}

{
  const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
}

{
  // Create a Set
  const letters = new Set();

  // Add some values to the Set
  letters.add("a");
  letters.add("b");
  letters.add("c");
}

{
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);
}

{
  const myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
  });

  // "Consuming Code" (Must wait for a fulfilled Promise).
  myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
  );
}

{
  const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });

  myPromise.then(function(value) {
  });
}

{
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  let id = Symbol('id');
  person[id] = 140353;
  // Now person[id] = 140353
  // but person.id is still undefined
}

{
  Symbol("id") == Symbol("id"); // false
}

{
  function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
  }
  myFunction(5); // will return 15
}

{
  function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }

  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
}

{
  let text = "Hello world, welcome to the universe.";
  text.includes("world")    // Returns true
}

{
  let text = "Hello world, welcome to the universe.";

  text.startsWith("Hello")   // Returns true
}

{
  let text = "John Doe";
  text.endsWith("Doe")    // Returns true
}

{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const f = fruits.entries();

  for (let x of f) {
  }
}

{
  Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]
}

{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const keys = fruits.keys();

  let text = "";
  for (let x of keys) {
    text += x;
  }
}

{
  const numbers = [4, 9, 16, 25, 29];
  let first = numbers.find(myFunction);

  function myFunction(value, index, array) {
    return value > 18;
  }
}

{
  const numbers = [4, 9, 16, 25, 29];
  let first = numbers.findIndex(myFunction);

  function myFunction(value, index, array) {
    return value > 18;
  }
}

{
  // Create an Object
  const person = {name: "John", lastname: "Doe"};

  let answer = Reflect.has(person, "name");
  let answer2 = "name" in person;
}

{
  // Create an Object
  const user = { name: "Jan", age: 40 };

  //Create a Proxy
  const proxy = new Proxy(user, {
    get(target, property) {
      console.log("Getting: " + property);
      return target[property];
    },
    set(target, property, value) {
      console.log("Setting: " + property);
      return target[property];
    }
  });

  proxy.name = "John";
  let text = proxy.name;
}

{
  Math.trunc(4.9);    // returns 4
  Math.trunc(4.7);    // returns 4
  Math.trunc(4.4);    // returns 4
  Math.trunc(4.2);    // returns 4
  Math.trunc(-4.2);    // returns -4
}

{
  Math.sign(-4);    // returns -1
  Math.sign(0);    // returns 0
  Math.sign(4);    // returns 1
}

{
  Math.cbrt(8);    // returns 2
  Math.cbrt(64);    // returns 4
  Math.cbrt(125);    // returns 5
}

{
  Math.log2(2);    // returns 1
}

{
  Math.log10(10);    // returns 1
}

{
  let x = Number.EPSILON;
}

{
  let x = Number.MIN_SAFE_INTEGER;
}

{
  let x = Number.MAX_SAFE_INTEGER;
}

{
  Number.isInteger(10);        // returns true
  Number.isInteger(10.5);      // returns false
}

{
  Number.isSafeInteger(10);    // returns true
  Number.isSafeInteger(12345678901234567890);  // returns false
}

{
  isFinite(10/0);       // returns false
  isFinite(10/1);       // returns true
}

{
  isNaN("Hello");       // returns true
}

{
  // Create Target Object
  const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  // Create Source Object
  const person2 = {firstName: "Anne",lastName: "Smith"};

  // Assign Source to Target
  Object.assign(person1, person2);
}

{
  let text = "Hello 😄";

  let pattern = /\p{Emoji}/u;
  let result = pattern.test(text);
}

{
  let text = "Hello 😄";

  let pattern = /\p{Emoji}/;
  let result = pattern.test(text);
}

{
  let text = "abc def ghi";
  let pattern = /\w+/y;

  // Start match from position 4
  pattern.lastIndex = 4;
  let result = text.match(pattern);
}

{
  let text = "abc def ghi";
  let pattern = /\w+/;

  // Start match from position 4
  pattern.lastIndex = 4;
  let result = text.match(pattern);
}

{
  
}
{
  
}
{
  
}
{
  
}






// w3schools>JS Advanced>JS Iterations>JS Functions> Function Definitions
{
  function myFunction(a, b) {return a * b;}
}

{
  const x = function (a, b) {return a * b};
  let z = x(4, 3);
}

{
  const myFunction = new Function("a", "b", "return a * b");
  let x = myFunction(4, 3);
}

{
  const myFunction = function (a, b) {return a * b};
  let x = myFunction(4, 3);
}

{
  myFunction(5);

  function myFunction(y) {
    return y * y;
  }
}

{
  function myFunction(a, b) {
    return a * b;
  }

  let x = myFunction(4, 3);
}

{
  function myFunction(a, b) {
    return a * b;
  }

  let x = myFunction(4, 3) * 2;
}

{
  function myFunction(a, b) {
    return arguments.length;
  }
}

{
  function myFunction(a, b) {
    return a * b;
  }

  let text = myFunction.toString();
}

// w3schools>JS Advanced>JS Iterations>JS Functions> Function this

{
  let x = this;
}

{
  "use strict";
  let x = this;
}

{
  function myFunction() {
    return this;
  }
}

{
  "use strict";
  function myFunction() {
    return this;
  }
}

// w3schools>JS Advanced>JS Iterations>JS Functions> Function Invocation

{
  function myFunction(a, b) {
    return a * b;
  }
  myFunction(10, 2);           // Will return 20
}

{
  function myFunction(a, b) {
    return a * b;
  }
  //window.myFunction(10, 2);    // Will also return 20
}

{
  let x = myFunction();            // x will be the window object
  function myFunction() {
    return this;
  }
}

{
  const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  myObject.fullName();         // Will return "John Doe"
}

{
  const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this;
    }
  }

  // This will return [object Object] (the owner object)
  myObject.fullName();  
}

{
  // This is a function constructor:
  function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
  }

  // This creates a new object
  const myObj = new myFunction("John", "Doe");

  // This will return "John"
  myObj.firstName;  
}

// w3schools>JS Advanced>JS Iterations>JS Functions> Function IIFE

{
  (function () {
    // Code to run immediately
  })();
}

{
  (function () {
    let text = "Hello! I called myself.";
  })();
}

{
  (function (name) {
    let text = "Hello " + name;
  })("John Doe");  
}

{
  (() => {
    let text = "Hello! I called myself.";
  })();
}

{
  ((name) => {
    let text = "Hello " + name;
  })("John Doe");
}

{
  const counter = (function () {
    let value = 0;
    return {
      increment() { value++; },
      get() { return value; }
    };
  })();

  counter.increment();
  let x = counter.get();
}

{
  (function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1); // recursive call
  })(5);
}

// w3schools>JS Advanced>JS Iterations>JS Functions> Function Call

{
  const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }

  // This will return "John Doe":
  person.fullName();
}

{
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
}

{
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

  // This will return "Mary Doe"
  person.fullName.call(person2);
}

{
  const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }

  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }

  person.fullName.call(person1, "Oslo", "Norway");
}

// w3schools>JS Advanced>JS Iterations>JS Functions> Function Apply

{
  const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }

  const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }

  // This will return "Mary Doe":
  person.fullName.apply(person1);
}

{
  const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }

  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }

  person.fullName.apply(person1, ["Oslo", "Norway"]);
}

{
  const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }

  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }

  person.fullName.call(person1, "Oslo", "Norway");
}

{
  Math.max(1,2,3);  // Will return 3

  Math.max.apply(null, [1,2,3]); // Will also return 3

  Math.max.apply(Math, [1,2,3]); // Will also return 3

  Math.max.apply(" ", [1,2,3]); // Will also return 3

  Math.max.apply(0, [1,2,3]); // Will also return 3
}

// w3schools>JS Advanced>JS Iterations>JS Functions> Function Bind

{
  const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }

  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }

  let fullName = person.fullName.bind(member);
}

// w3schools>JS Advanced>JS Iterations>JS Functions> Function Closures

{
  function myFunction() {
    let a = 4;
    return a * a;
  }
}

{
  let a = 4;
  function myFunction() {
    return a * a;
  }
}

{
  function myFunction() {
    a = 4;
  }
}

{
  // Initiate counter
  let counter = 0;

  // Function to increment counter
  function add() {
    counter += 1;
  }

  // Call add() 3 times
  add();
  add();
  add();

  // The counter should now be 3
}

{
  // Initiate counter
  let counter = 0;

  // Function to increment counter
  function add() {
    let counter = 0;
    counter += 1;
  }

  // Call add() 3 times
  add();
  add();
  add();

  // The counter should now be 3. But it is 0
}

{
  // Function to increment counter
  function add() {
    let counter = 0;
    counter += 1;
    return counter;
  }

  let x= 0;
  // Call add() 3 times
  x = add();
  x = add();
  x = add();

  // The counter should now be 3. But it is 1.
}

{
  function add() {
    let counter = 0;
    function plus() {counter += 1;}
    plus();   
    return counter;
  }
}

{
  function myCounter() {
    let counter = 0;
    return function() {
      counter++;
      return counter;
    };
  }
  const add = myCounter();
  add();
  add();
  add();

  // the counter is now 3
}

// w3schools>JS Advanced>JS Objects> Object Definitions

{
  // Create an Object
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
}

{
  // Create an Object
  const person = new Object({
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  });
}

{
  // Create an Object:
  const person = {
    firstName: "John",
    lastName: "Doe"
  };

  // Create new Object
  const man = Object.create(person);
  man.firstName = "Peter";
}

{
  const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
  ];

  const myObj = Object.fromEntries(fruits);
}

{
  // Create Target Object
  const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  // Create Source Object
  const person2 = {firstName: "Anne",lastName: "Smith"};

  // Assign Source to Target
  Object.assign(person1, person2);
}

{
  //Create an Object
  const person = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }

  // Try to create a copy
  const x = person;

  // This will change age in person:
  x.age = 10;
}

// w3schools>JS Advanced>JS Objects> Object Constructors

{
  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  const mySister = new Person("Anna", "Rally", 18, "green");

  const mySelf = new Person("Johnny", "Rally", 22, "green");

  myFather.nationality = "English";

  Person.prototype.nationality = "English";

  myMother.changeName = function (name) {
    this.lastName = name;
  }

  Person.prototype.changeName = function (name) {
    this.lastName = name;
  }

  myMother.changeName("Doe");
}

{
  function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
  }
}

{
  function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.fullName = function() {
      return this.firstName + " " + this.lastName;
    };
  }
}

{
  new Object()   // A new Object object
  new Array()    // A new Array object
  new Map()      // A new Map object
  new Set()      // A new Set object
  new Date()     // A new Date object
  //new RegExp()   // A new RegExp object
  new Function() // A new Function object

  "";           // primitive string
  0;            // primitive number
  false;        // primitive boolean

  {};           // object object
  [];           // array object
  /()/          // regexp object
  function s(){}; // function
}

// w3schools>JS Advanced>JS Objects> Object this

{
  const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
}

{
  const person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this;
    }
  };
}

{
  const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
}

{
  const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }

  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }

  // Return "John Doe":
  person1.fullName.call(person2);
}

{
  const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }

  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }

  let fullName = person.fullName.bind(member);
}

// w3schools>JS Advanced>JS Objects> Object Destructuring

{
  // Create an Object
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };

  // Destructuring
  let {firstName, lastName} = person;
}

{
  // Create an Object
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };

  // Destructuring
  let {lastName, firstName} = person;
}

{
  // Create an Object
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };

  // Destructuring
  let {firstName, lastName, country = "US"} = person;
}

{
  // Create an Object
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };

  // Destructuring
  let {lastName : name} = person;
}

{
  // Create a String
  let name = "W3Schools";

  // Destructuring
  let [a1, a2, a3, a4, a5] = name;
}

{
  // Create an Array
  const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

  // Destructuring
  let [fruit1, fruit2] = fruits;
}

{
  // Create an Array
  const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

  // Destructuring
  let [fruit1,,,fruit2] = fruits;
}

{
  // Create an Array
  const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
  // Destructuring
  let {[0]:fruit1 ,[1]:fruit2} = fruits;
}

{
  // Create an Array
  const numbers = [10, 20, 30, 40, 50, 60, 70];

  // Destructuring
  const [a,b, ...rest] = numbers
}

{
  // Create a Map
  const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  // Destructuring
  let text = "";
  for (const [key, value] of fruits) {
    text += key + " is " + value;
  }
}

{
  let firstName = "John";
  let lastName = "Doe";

  // Destructuring
  [firstName, lastName] = [lastName, firstName];
}

// w3schools>JS Advanced>JS Objects> Object Prototypes

{
  function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }

  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
}

{
  function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
  }
}

{
  function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }

  Person.prototype.nationality = "English";
}

{
  function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }

  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };
}

// w3schools>JS Advanced>JS Objects> Object Iterations

{
  // Create Target Object
  const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  // Create Source Object
  const person2 = {firstName: "Anne",lastName: "Smith"};

  // Assign Source to Target
  Object.assign(person1, person2);
}

{
  const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
  };

  let text = Object.entries(person);
}

{
  const fruits = {Bananas:300, Oranges:200, Apples:500};

  let text = "";
  for (let [fruit, value] of Object.entries(fruits)) {
    text += fruit + ": " + value;
  }
}

{
  const fruits = {Bananas:300, Oranges:200, Apples:500};

  const myMap = new Map(Object.entries(fruits));
}

{
  const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
  ];

  const myObj = Object.fromEntries(fruits);
}

{
  const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
  };

  let text = Object.values(person);
}

{
  // Create an Array
  const fruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];

  // Callback function to Group Elements
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }

  // Group by Quantity
  const result = Object.groupBy(fruits, myCallback);
}

{
  // Create an Array
  const fruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];

  // Callback function to Group Elements
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }

  // Group by Quantity
  const result = Object.groupBy(fruits, myCallback);
}

{
  // Create an Object
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  // Get the Keys
  const keys = Object.keys(person);
}

{
  const person = {
    fname:" John",
    lname:" Doe",
    age: 25
  };

  let txt = "";

  for (let x in person) {
    txt += person[x];
  }
}

// w3schools>JS Advanced>JS Objects> Object Management

{
  // Create an Object:
  const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
  };

  // Add a Property
  Object.defineProperty(person, "year", {value:"2008"});
}

{
  // Create an Object:
  const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
  };

  // Change a Property
  Object.defineProperty(person, "language", {value : "NO"});

  Object.defineProperty(person, "language", {writable:false});

  Object.defineProperty(person, "language", {enumerable:false});
}

{
  // Create an Object
  const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
  };

  // Get all Properties
  Object.getOwnPropertyNames(person);
}

{
  // Create an Object
  const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
  };

  // Set the language Property not enumerable
  Object.defineProperty(person, "language", {enumerable:false});

  // Get all Properties
  Object.getOwnPropertyNames(person);
}

{
  // Create an Object
  const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
  };

  // Change the "language" Property
  Object.defineProperty(person, "language", {enumerable:false});

  // Get all Enumerable Properties
  Object.keys(person);
}

{
  //Create an object
  const person = {firstName:"John", lastName:"Doe"};

  // Define a getter
  Object.defineProperty(person, "fullName", {
    get: function () {return this.firstName + " " + this.lastName;}
  });
}

{
  // Define object
  const obj = {counter:0};

  // Define setters
  Object.defineProperty(obj, "reset", {
    get : function () {this.counter = 0;}
  });
  Object.defineProperty(obj, "increment", {
    get : function () {this.counter++;}
  });
  Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--;}
  });
  Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;}
  });
  Object.defineProperty(obj, "subtract", {
    set : function (i) {this.counter -= i;}
  });

  // Play with the counter:
  obj.reset;
  obj.add = 5;
  obj.subtract = 1;
  obj.increment;
  obj.decrement;
}

// w3schools>JS Advanced>JS Objects> Object Get / Set

{
  // Create an object:
  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  };
}

{
  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };

  // Set an object property using a setter:
  person.lang = "en";
}

{
  const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() { // access fullName as a function: person.fullName().
      return this.firstName + " " + this.lastName;
    },
    get fullName() { // access fullName as a property: person.fullName; simpler syntax
      return this.firstName + " " + this.lastName;
    }
  };
}

{
  // Create an object:
  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language.toUpperCase();
    }
  };
}

{
  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang.toUpperCase();
    }
  };

  // Set an object property using a setter:
  person.lang = "en";
}

{
  // Define object
  const obj = {counter : 0};

  // Define setters and getters
  Object.defineProperty(obj, "reset", {
    get : function () {this.counter = 0;}
  });
  Object.defineProperty(obj, "increment", {
    get : function () {this.counter++;}
  });
  Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--;}
  });
  Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;}
  });
  Object.defineProperty(obj, "subtract", {
    set : function (value) {this.counter -= value;}
  });

  // Play with the counter:
  obj.reset;
  obj.add = 5;
  obj.subtract = 1;
  obj.increment;
  obj.decrement;
}

// w3schools>JS Advanced>JS Objects> Object Protection

{
  // Prevents re-assignment
  const car = {type:"Fiat", model:"500", color:"white"};

  // Prevents adding object properties
  Object.preventExtensions(car)

  // Returns true if properties can be added to an object
  Object.isExtensible(car)

  // Prevents adding and deleting object properties
  Object.seal(car)

  // Returns true if object is sealed
  Object.isSealed(car)

  // Prevents any changes to an object
  Object.freeze(car)

  // Returns true if object is frozen
  Object.isFrozen(car)
}

{
  // Create Object
  const person = {firstName:"John", lastName:"Doe"};

  // Prevent Extensions
  Object.preventExtensions(person);

  // This will throw an error
  person.nationality = "English";
}

{
  // Create Array
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  Object.preventExtensions(fruits);

  // This will throw an error:
  //fruits.push("Kiwi");
}

{
  // Create Object
  const person = {firstName:"John", lastName:"Doe"};

  // Prevent Extensions
  Object.preventExtensions(person);

  // This will return false
  let answer = Object.isExtensible(person);
}

{
  // Create Array
  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  // Prevent Extensions
  Object.preventExtensions(fruits);

  // This will return false
  let answer = Object.isExtensible(fruits);
}

{
  "use strict"
  // Create Object
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  // Seal Object
  Object.seal(person)

  // This will throw an error
  //delete person.age;
}

{
  // Create Object
  const person = {firstName:"John", lastName:"Doe"};

  // Seal Object
  Object.seal(person);

  // This will return true
  let answer = Object.isSealed(person);
}

{
  // Create Array
  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  // Seal Array
  Object.seal(fruits);

  // This will return true
  let answer = Object.isSealed(fruits);
}

{
  "use strict"
  // Create Object
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  // Freeze Object
  Object.freeze(person)

  // This will throw an error
  //person.age = 51;
}

{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  Object.freeze(fruits);

  // This will trow an error:
  //fruits.push("Kiwi");
}

{
  // Create Object
  const person = {firstName:"John", lastName:"Doe"};

  // Freeze Object
  Object.freeze(person);

  // This will return true
  let answer = Object.isFrozen(person);
}

{
  // Create Array
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  Object.freeze(fruits);

  // This will return true:
  let answer = Object.isFrozen(fruits);
}

// w3schools>JS Advanced>JS Classes> JS Classes

{
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);
}

{
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }

  const myCar = new Car("Ford", 2014);
}

{
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }

  const date = new Date();
  let year = date.getFullYear();

  const myCar = new Car("Ford", 2014);
}

{
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      // date = new Date();  // This will not work
      const date = new Date(); // This will work
      return date.getFullYear() - this.year;
    }
  }
}

// w3schools>JS Advanced>JS Classes> JS Class Inheritance

{
  class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }

  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }

  let myCar = new Model("Ford", "Mustang");
}

{
  class Car {
    constructor(brand) {
      this.carname = brand;
    }
    get cnam() {
      return this.carname;
    }
    set cnam(x) {
      this.carname = x;
    }
  }

  const myCar = new Car("Ford");
}

{
  class Car {
    constructor(brand) {
      this._carname = brand;
    }
    get carname() {
      return this._carname;
    }
    set carname(x) {
      this._carname = x;
    }
  }

  const myCar = new Car("Ford");
}

{
  class Car {
    constructor(brand) {
      this._carname = brand;
    }
    get carname() {
      return this._carname;
    }
    set carname(x) {
      this._carname = x;
    }
  }

  const myCar = new Car("Ford");
  myCar.carname = "Volvo";
}

{
  //You cannot use the class yet.
  //myCar = new Car("Ford") will raise an error.

  class Car {
    constructor(brand) {
      this.carname = brand;
    }
  }

  //Now you can use the class:
  const myCar = new Car("Ford")
}

// w3schools>JS Advanced>JS Classes> JS Class Static

{
  class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
  }

  const myCar = new Car("Ford");
}

{
  class Car {
    constructor(name) {
      this.name = name;
    }
    static hello(x) {
      return "Hello " + x.name;
    }
  }
  const myCar = new Car("Ford");
}

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

{
  function* myGenerator() {} // returns generator object {value:1, done: true|false}
}

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

// w3schools>JS Advanced>JS Asynchronous>JS Control Flow

{
  let x = 5;
  let y = 6;
  let z = x + y;
}

{
  let text = "Unknown";
  let age = 20;
  if (age >= 18) {
    text = "Adult";
  } else {
    text = "Minor";
  }
}

{
  for (let i = 0; i < 5; i++) {
    text += "The number is " + i;
  }
}

{
  for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i;
  }
}

{
  function myFunction(p1, p2) {
    return p1 * p2;
  }
}

{
  function myDisplayer(some) {
    
  }

  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }

  myCalculator(5, 5, myDisplayer);
}

{/*
  fetch("https://api.example.com")
    then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));*/
}

{
  async function getData() {
    try {
      const res = await fetch("https://api.example.com");
      const data = await res.json();
      console.log(data);
    } catch (err) {
    console.error(err);
    }
  }
}

// w3schools>JS Advanced>JS Asynchronous>JS Callbacks

{
  function myFirst() {
    console.log("Hello");
  }

  function mySecond() {
    console.log("Goodbye");
  }

  myFirst();
  mySecond();
}

{
  function myFirst() {
    console.log("Hello");
  }

  function mySecond() {
    console.log("Goodbye");
  }

  mySecond();
  myFirst();
}

{
  function myDisplayer(some) {

  }

  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }

  let result = myCalculator(5, 5);
  myDisplayer(result);
}

{
  function myDisplayer(some) {

  }

  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }

  myCalculator(5, 5);
}

{
  function myDisplayer(some) {

  }

  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }

  myCalculator(5, 5, myDisplayer);
}

{
  // Create an Array
  const myNumbers = [4, 1, -20, -7, 5, 9, -6];

  // Call removeNeg with a callback
  const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

  // Display Result

  // Keep only positive numbers
  function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
      if (callback(x)) {
        myArray.push(x);
      }
    }
    return myArray;
  }
}

// w3schools>JS Advanced>JS Asynchronous>JS Asynchronous

{
  function myDisplayer(something) {

  }

  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }

  myCalculator(5, 5, myDisplayer);
}

{
  setTimeout(myFunction, 3000);

  function myFunction() {
  }
}

{
  setTimeout(function() { myFunction("I love You !!!"); }, 3000);

  function myFunction(value) {

  }
}

{
  setInterval(myFunction, 1000);

  function myFunction() {
    let d = new Date();
    let x =
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
  }
}

// w3schools>JS Advanced>JS Asynchronous>JS Promises

{
  let myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
  });

  // "Consuming Code" (Must wait for a fulfilled Promise)
  myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
  );
}

{
  function myDisplayer(some) {
  }

  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;

  // The producing code (this may take some time)

    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });

  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
}

{
  setTimeout(function() { myFunction("I love You !!!"); }, 3000);

  function myFunction(value) {

  }
}

{
  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });

  myPromise.then(function(value) {

  });
}

{/*
  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(req.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }

  getFile(myDisplayer);*/
}

{/*
  let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });

  myPromise.then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
  );*/
}

{
  // Create a Promise
  const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "King");
  });

  // Create another Promise
  const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Queen");
  });

  // Settle All
  Promise.allSettled([myPromise1, myPromise2]).then((results) =>
    results.forEach((x) => console.log(x.status)),
  );
}

// w3schools>JS Advanced>JS Asynchronous>JS Async/Await

{
  async function myFunction() {
    return "Hello";
  }

  function myFunction2() {
  return Promise.resolve("Hello");

  myFunction().then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
  );
}
}

{
  async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
  );
}

{
  async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {console.log(value);}
  );
}

{
  async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("I love You !!");
    });
    let s = await myPromise;
  }

  myDisplay();
}

{
  async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      resolve("I love You !!");
    });
    let s = await myPromise;
  }

  myDisplay();
}

{
  async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 3000);
    });
    let s = await myPromise;
  }

  myDisplay();
}

{/*
  async function getFile() {
    let myPromise = new Promise(function(resolve) {
      let req = new XMLHttpRequest();
      req.open('GET', "mycar.html");
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          resolve("File not Found");
        }
      };
      req.send();
    });
    let s = await myPromise;
  }

  getFile();*/
}

// w3schools>JS Advanced>JS Meta & Proxy> Meta Programming

{
  const user = { name: "Jan", age: 40 };

  const myArr = Object.keys(user);
}

{
  // Create an Object
  const person = {name: "John", age: 41};

  Object.defineProperty(person, "name", {
    get() { return "secret"; }
  });

  let name = person.name;
}

{
  const fn = new Function("a", "b", "return a + b");
}

{
  // Create an Object
  const user = { name: "Jan", age: 40 };

  //Create a Proxy
  const proxy = new Proxy(user, {
    set(target, property, value) {
      console.log(property + "; " + value);
      return target[property];
    }
  });

  proxy.name = "John";
  proxy.age = 45;
  proxy.name = "Paul";
}

{
  // Create an Object
  const user = {name: "Jan", age: 40};

  // Create a Proxy
  const proxy = new Proxy(user, {
    set(target, property, value) {
      console.log(property + ": " + value);
      // Safe forwarding with Reflect
      return Reflect.set(target, property, value);
    }
  });
}

// w3schools>JS Advanced>JS Meta & Proxy> Meta Reflect

{
  // Create an Object
  const person = {name: "John", lastname: "Doe"};

  let answer = Reflect.has(person, "name");

  let answer2 = "name" in person;
}

{
  // Create an Object
  const person = {name: "John", lastname: "Doe"};

  Reflect.deleteProperty(person, "name");

  delete person.name;
}

{
  // Create an Object
  const user = {name: "Jan", age: 40};

  let age = Reflect.get(user, "age");

  let age2 = user.age;
}

{
  // Create an Object
  const user = {name: "Jan", age: 40};

  Reflect.set(user, "age", 41);

  let age = Reflect.get(user, "age");

  user.age = 41;
}

{
  function greet(message) {
    return message + ", " + this.name;
  }

  const person = {name: "Jan"};

  let msg = Reflect.apply(greet, person, ["Hello"]);

  let msg2 = greet.apply(person, ["Hello"]);
}

{
  // Create a new Array
  const colors = Reflect.construct(Array, ["red", "green", "blue"]);

  // Create a new Array
  const colors2 = new Array(["red", "green", "blue"]);
}

{
  // Create an Object
  const user = {};

  // Add a Property
  Reflect.defineProperty(user, "id", {
    value: 123,
    writable: false
  });

    // Add a Property
  Object.defineProperty(user, "id", {
    value: 123,
    writable: false
  });
}

{
  const sym = Symbol("secret");
  const obj = { a: 1, [sym]: 2 };

  let keys = Reflect.ownKeys(obj);

  let keys2 = Object.keys(obj);

  let answer = Reflect.isExtensible(obj);

  let answer2 = Reflect.isExtensible(obj);
}

{
  Reflect.isExtensible({}); // false (does not throw)
  Object.isExtensible({});  // TypeError
}

{
  // Create an Object
  const user = { name: "Jan", age: 40 };

  // Create a Proxy
  const proxy = new Proxy(user, {
    set(target, property, value) {
      log(property + ": " + value);
      // safe forwarding
      return Reflect.set(target, property, value);
    }
  });
}

// w3schools>JS Advanced>JS Meta & Proxy> Meta Proxy

{
  const user = { name: "Jan" };

  const proxy = new Proxy(user, {
    get(target, prop) {
      return target[prop];
    }
  });
}

{
  // Create an Object
  const user = { name: "Jan", age: 40 };

  //Create a Proxy
  const proxy = new Proxy(user, {
    get(target, property) {
      console.log("Getting: " + property);
      return target[property];
    },
    set(target, property, value) {
      console.log("Setting: " + property);
      return target[property];
    }
  });

  proxy.name = "John";
  proxy.age = 42;

  let text1 = proxy.name;
  let text2 = proxy.age
}

{
  // Create an Object
  const user = { name: "Jan", age: 40 };

  // Create a Proxy
  const proxy = new Proxy(user, {
    get(target, property) {
      console.log("Getting: " + property);     // safe forwarding
      return Reflect.get(target, property);
    },
    set(target, property, value) {
      console.log("Setting: " + property);     // safe forwarding
      return Reflect.set(target, property, value);
    }
  });

  proxy.name = "John";
  proxy.age = 42;

  let text1 = proxy.name;
  let text2 = proxy.age
}

{
  // Create an Object
  const user = { name: "Jan", age: 40 };

  // Create a Proxy
  const proxy = new Proxy(user, {
    set(target, prop, value) {
      if (prop === "age" && value < 0) {
        text = "Age cannot be negative!";
      }
      return Reflect.set(target, prop, value);
    }
  });

  proxy.age = 45; // OK
  proxy.age = -5; // Error
}

{
  // Create an Object
  const person = {
    first: "John",
    last: "Doe"
  };

  // Create a Proxy
  const virtual = new Proxy(person, {
    get(target, prop) {
      if (prop === "fullName") {
        return target.first + " " + target.last;
      }
      return Reflect.get(target, prop);
    }
  });

  let text = virtual.fullName; // "John Doe"
}

{
  const fn = new Function("a", "b", "return a + b");

  let result = fn(3, 2);
}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}

{

}








































console.log("END OF JAVASCRIPT DEMO! THANKS!");