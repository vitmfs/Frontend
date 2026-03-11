//https://www.w3schools.com/typescript/index.php
console.log('Hello World!');

//https://www.w3schools.com/typescript/typescript_getstarted.php
{
  function greet(name: string): string {
    return `Hello, ${name}!`;
  }

  const message: string = greet("World");
  console.log(message);

  //npx tsc hello.ts
  /*
  function greet(name) {
    return "Hello, ".concat(name, "!");
  }

  const message = greet("World");
  console.log(message);
  */

}

//https://www.w3schools.com/typescript/typescript_simple_types.php
{
  let isActive: boolean = true;
  let hasPermission = false; // TypeScript infers 'boolean' type

  let decimal: number = 6;
  let hex: number = 0xf00d;       // Hexadecimal
  let binary: number = 0b1010;     // Binary
  let octal: number = 0o744;      // Octal
  let float: number = 3.14;      // Floating point

  let color: string = "blue";
  let fullName: string = 'John Doe';
  let age: number = 30;
  let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;

  const bigNumber: bigint = 9007199254740991n;
  const hugeNumber = BigInt(9007199254740991); // Alternative syntax

  const uniqueKey: symbol = Symbol('description');
  const obj = {
    [uniqueKey]: 'This is a unique property'
  };
  console.log(obj[uniqueKey]); // "This is a unique property"
}

//https://www.w3schools.com/typescript/typescript_explicit_inference.php
{
  /*
  // String
  greeting: string = "Hello, TypeScript!";

  // Number
  userCount: number = 42;

  // Boolean
  isLoading: boolean = true;

  // Array of numbers
  scores: number[] = [100, 95, 98];

  // Function with explicit parameter and return types
  function greet(name: string): string {
    return `Hello, ${name}!`;
  }

  // TypeScript will ensure you pass the correct argument type
  greet("Alice"); // OK
  greet(42);     // Error: Argument of type '42' is not assignable to parameter of type 'string'
  */
  // TypeScript infers 'string'
  let username = "alice";

  // TypeScript infers 'number'
  let score = 100;

  // TypeScript infers 'boolean[]'
  let flags = [true, false, true];

  // TypeScript infers return type as 'number'
  /*
  function add(a: number, b: number) {
    return a + b;
  }
    */

  // TypeScript infers the shape of the object
  const user = {
  name: "Alice",
  age: 30,
  isAdmin: true
  };

  // TypeScript knows these properties exist
  console.log(user.name);  // OK
  console.log(user.email); // Error: Property 'email' does not exist

  username: string = "alice";
  //username = 42; // Error: Type 'number' is not assignable to type 'string'

  score = 100;  // TypeScript infers 'number'
  //score = "high";  // Error: Type 'string' is not assignable to type 'number'

  // This is valid JavaScript but can lead to bugs
  /*
  function add(a, b) {
    return a + b;
  }
  */

  console.log(add("5", 3)); // Returns "53" (string concatenation)

  function add(a: number, b: number): number {
    return a + b;
  }

  console.log(add("5", 3)); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

  // 1. JSON.parse returns 'any' because the structure isn't known at compile time
  const data = JSON.parse('{ "name": "Alice", "age": 30 }');

  // 2. Variables declared without initialization
  let something;  // Type is 'any'
  something = 'hello';
  something = 42;  // No error

}

//https://www.w3schools.com/typescript/typescript_special_types.php
{
  let u = true;
  u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
  Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

  let v: any = true;
  v = "string"; // no error as it can be "any" type
  Math.round(v); // no error as it can be "any" type

  let w: unknown = 1;
  w = "string"; // no error
  w = {
    runANonExistentMethod: () => {
      console.log("I think therefore I am");
    }
  } as { runANonExistentMethod: () => void}
  // How can we avoid the error for the code commented out below when we don't know the type?
  // w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
  if(typeof w === 'object' && w !== null) {
    (w as { runANonExistentMethod: Function }).runANonExistentMethod();
  }
  // Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting

  function processValue(value: unknown) {
    if (typeof value === 'string') {
      // value is now treated as string
      console.log(value.toUpperCase());
    } else if (Array.isArray(value)) {
      // value is now treated as any[]
      console.log(value.length);
    }
  }

  function throwError(message: string): never {
    throw new Error(message);
  }

  type Shape = Circle | Square | Triangle;

  function getArea(shape: Shape): number {
    switch (shape.kind) {
      case 'circle':
        return Math.PI * shape.radius ** 2;
      case 'square':
        return shape.sideLength ** 2;
      default:
        // TypeScript knows this should never happen
        const _exhaustiveCheck: never = shape;
        return _exhaustiveCheck;
    }
  }

  let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

  let y: undefined = undefined;
  let z: null = null;

  // Optional parameter (implicitly `string | undefined`)
  function greet(name?: string) {
    return `Hello, ${name || 'stranger'}`;
  }

  // Optional property in an interface
  interface User {
    name: string;
    age?: number; // Same as `number | undefined` }
  }

  // Nullish coalescing (??) - only uses default if value is null or undefined
  //const value = input ?? 'default';

  // Optional chaining (?.) - safely access nested properties
  //const street = user?.address?.street;
}

//https://www.w3schools.com/typescript/typescript_arrays.php
{
  const names: string[] = [];
  names.push("Dylan"); // no error
  // names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

  const names2: readonly string[] = ["Dylan"];
  names2.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
  // try removing the readonly modifier and see if it works?

  const numbers = [1, 2, 3]; // inferred to type number[]
  numbers.push(4); // no error
  // comment line below out to see the successful assignment
  numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
  let head: number = numbers[0]; // no error
}

//https://www.w3schools.com/typescript/typescript_tuples.php
{
  // define our tuple
  let ourTuple: [number, boolean, string];

  // initialize correctly
  ourTuple = [5, false, 'Coding God was here'];

  // define our tuple
  let ourTuple2: [number, boolean, string];

  // initialized incorrectly which throws an error
  ourTuple2 = [false, 'Coding God was mistaken', 5];

  // define our tuple
  let ourTuple3: [number, boolean, string];
  // initialize correctly
  ourTuple3 = [5, false, 'Coding God was here'];
  // We have no type safety in our tuple for indexes 3+
  ourTuple3.push('Something new and wrong');
  console.log(ourTuple3);

  // define our readonly tuple
  const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
  // throws error as it is readonly.
  ourReadonlyTuple.push('Coding God took a day off');

  const graph: [x: number, y: number] = [55.2, 41.3];

  const graph2: [number, number] = [55.2, 41.3];
  const [x, y] = graph2;
}

//https://www.w3schools.com/typescript/typescript_object_types.php
{
  const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };

  const car2 = {
    type: "Toyota",
  };
  car2.type = "Ford"; // no error
  car2.type = 2; // Error: Type 'number' is not assignable to type 'string'.

  const car3: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
    type: "Toyota",
  };
  car3.mileage = 2000;

  const car4: { type: string, mileage?: number } = { // no error
    type: "Toyota"
  };
  car4.mileage = 2000;

  const nameAgeMap: { [index: string]: number } = {};
  nameAgeMap.Jack = 25; // no error
  nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

}

//https://www.w3schools.com/typescript/typescript_enums.php
{
  enum CardinalDirections {
    North,
    East,
    South,
    West
  }
  let currentDirection = CardinalDirections.North;
  // logs 0
  console.log(currentDirection);
  // throws error as 'North' is not a valid enum
  //currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.

  enum CardinalDirections {
    North = 1,
    East,
    South,
    West
  }
  // logs 1
  console.log(CardinalDirections.North);
  // logs 4
  console.log(CardinalDirections.West);

  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);

  enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  // logs "North"
  console.log(CardinalDirections.North);
  // logs "West"
  console.log(CardinalDirections.West);
}

//https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php
{
  type CarYear = number
  type CarType = string
  type CarModel = string
  type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
  }

  const carYear: CarYear = 2001
  const carType: CarType = "Toyota"
  const carModel: CarModel = "Corolla"
  const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
  };

  type Animal = { name: string };
  type Bear = Animal & { honey: boolean };
  const bear: Bear = { name: "Winnie", honey: true };

  type Status = "success" | "error";
  let response: Status = "success";

  interface Rectangle {
    height: number,
    width: number
  }

  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };

  interface Animal { name: string; } interface Animal { age: number; } const dog: Animal = { name: "Fido", age: 5 };

  interface Rectangle {
    height: number,
    width: number
  }

  interface ColoredRectangle extends Rectangle {
    color: string
  }

  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };

}

//https://www.w3schools.com/typescript/typescript_union_types.php
{
  function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('404');

  function printStatusCode2(code: string | number) {
    console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
  }
}

//https://www.w3schools.com/typescript/typescript_functions.php
{
  // the `: number` here specifies that this function returns a number
  function getTime(): number {
    return new Date().getTime();
  }

  function printHello(): void {
    console.log('Hello!');
  }

  function multiply(a: number, b: number) {
    return a * b;
  }

  // the `?` operator here marks parameter `c` as optional
  function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }

  function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }

  function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }

  function add2(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }

  type Negate = (value: number) => number;

  // in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
  const negateFunction: Negate = (value) => value * -1;
}

//https://www.w3schools.com/typescript/typescript_casting.php
{
  let x: unknown = 'hello';
  console.log((x as string).length);

  let x2: unknown = 4;
  console.log((x2 as string).length); // prints undefined since numbers don't have a length

  console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

  let x3: unknown = 'hello';
  console.log((<string>x3).length);
  let x4 = 'hello';
  console.log(((x4 as unknown) as number).length); // x is not actually a number so this will return undefined
}

//https://www.w3schools.com/typescript/typescript_classes.php
{
  
  class Person {
    name: string;
  }

  const person = new Person();
  person.name = "Jane";
  

  class Person2 {
    private name: string;

    public constructor(name: string) {
      this.name = name;
    }

    public getName(): string {
      return this.name;
    }
  }

  const person2 = new Person2("Jane");
  console.log(person2.getName()); // person.name isn't accessible from outside the class since it's private

  class Person3 {
    // name is a private member variable
    public constructor(private name: string) {}

    public getName(): string {
      return this.name;
    }
  }

  const person3 = new Person3("Jane");
  console.log(person3.getName());

  class Person4 {
    private readonly name: string;

    public constructor(name: string) {
      // name cannot be changed after this initial definition, which has to be either at its declaration or in the constructor.
      this.name = name;
    }

    public getName(): string {
      return this.name;
    }
  }

  const person4 = new Person4("Jane");
  console.log(person4.getName());

  interface Shape {
    getArea: () => number;
  }

  class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
      return this.width * this.height;
    }
  }

  interface Shape {
    getArea: () => number;
  }

  class Rectangle2 implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
      return this.width * this.height;
    }
  }

  class Square extends Rectangle {
    public constructor(width: number) {
      super(width, width);
    }

    // getArea gets inherited from Rectangle
  }

  interface Shape {
    getArea: () => number;
  }

  class Rectangle3 implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
      return this.width * this.height;
    }

    public toString(): string {
      return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
  }

  class Square2 extends Rectangle {
    public constructor(width: number) {
      super(width, width);
    }

    // this toString replaces the toString from Rectangle
    public override toString(): string {
      return `Square[width=${this.width}]`;
    }
  }

  abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
  }

  class Rectangle4 extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
      super();
    }

    public getArea(): number {
      return this.width * this.height;
    }
  }
}

//https://www.w3schools.com/typescript/typescript_basic_generics.php
{
  function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }
  console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

  class NamedValue<T> {
    private _value: T | undefined;

    constructor(private name: string) {}

    public setValue(value: T) {
      this._value = value;
    }

    public getValue(): T | undefined {
      return this._value;
    }

    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }

  let value = new NamedValue<number>('myNumber');
  value.setValue(10);
  console.log(value.toString()); // myNumber: 10

  type Wrapped<T> = { value: T };

  const wrappedValue: Wrapped<number> = { value: 10 };

  class NamedValue2<T = string> {
    private _value: T | undefined;

    constructor(private name: string) {}

    public setValue(value: T) {
      this._value = value;
    }

    public getValue(): T | undefined {
      return this._value;
    }

    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }

  let value2 = new NamedValue2('myNumber');
  value2.setValue('myValue');
  console.log(value2.toString()); // myNumber: myValue

  function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
  }
}

//https://www.w3schools.com/typescript/typescript_utility_types.php
{
  interface Point {
    x: number;
    y: number;
  }

  let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
  pointPart.x = 10;

  interface Car {
    make: string;
    model: string;
    mileage?: number;
  }

  let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
  };

  const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
  };

  interface Person {
    name: string;
    age: number;
    location?: string;
  }

  const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
  };

  interface Person {
    name: string;
    age: number;
    location?: string;
  }

  const bob2: Pick<Person, 'name'> = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
  };

  type Primitive = string | number | boolean
  const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.

  type PointGenerator = () => { x: number; y: number; };
  const point2: ReturnType<PointGenerator> = {
    x: 10,
    y: 20
  };

  type PointPrinter = (p: { x: number; y: number; }) => void;
  const point3: Parameters<PointPrinter>[0] = {
    x: 10,
    y: 20
  };

  interface Person {
    name: string;
    age: number;
  }
  const person: Readonly<Person> = {
    name: "Dylan",
    age: 35,
  };
  person.name = 'Israel'; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.
}

//https://www.w3schools.com/typescript/typescript_keyof.php
{
  interface Person {
    name: string;
    age: number;
  }
  // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
  function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
  }
  let person = {
    name: "Max",
    age: 27
  };
  printPersonProperty(person, "name"); // Printing person property name: "Max"

  type StringMap = { [key: string]: unknown };
  // `keyof StringMap` resolves to `string` here
  function createStringPair(property: keyof StringMap, value: string): StringMap {
    return { [property]: value };
  }
}

//https://www.w3schools.com/typescript/typescript_null.php
{
  let value: string | undefined | null = null;
  value = 'hello';
  value = undefined;

  interface House {
    sqft: number;
    yard?: {
      sqft: number;
    };
  }
  function printYardSize(house: House) {
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined) {
      console.log('No yard');
    } else {
      console.log(`Yard is ${yardSize} sqft`);
    }
  }

  let home: House = {
    sqft: 500
  };

  printYardSize(home); // Prints 'No yard'

  function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
  }

  printMileage(null); // Prints 'Mileage: Not Available'
  printMileage(0); // Prints 'Mileage: 0'

  function getValue(): string | undefined {
    return 'hello';
  }
  let value2 = getValue();
  console.log('value length: ' + value2!.length);

  let array: number[] = [1, 2, 3];
  let value3 = array[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`
}

//https://www.w3schools.com/typescript/typescript_definitely_typed.php
{
  type Color = "red" | "green" | "blue";
  type HexColor<T extends Color> = `#${string}`;

  // Usage:
  let myColor: HexColor<"blue"> = "#0000FF";

  type DynamicObject = { [key: `dynamic_${string}`]: string };

  // Usage:
  let obj: DynamicObject = { dynamic_key: "value" };
}

//https://www.w3schools.com/typescript/typescript_advanced_types.php
{
  // Convert all properties to boolean
  type Flags<T> = {
    [K in keyof T]: boolean;
  };

  interface User {
    id: number;
    name: string;
    email: string;
  }

  type UserFlags = Flags<User>;
  // Equivalent to:
  // {
  //   id: boolean;
  //   name: boolean;
  //   email: boolean;
  // }

  // Make all properties optional
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type OptionalTodo = {
    [K in keyof Todo]?: Todo[K];
  };

  // Remove 'readonly' and '?' modifiers
  type Concrete<T> = {
    -readonly [K in keyof T]-?: T[K];
  };

  // Add 'readonly' and 'required' to all properties
  type ReadonlyRequired<T> = {
    +readonly [K in keyof T]-?: T[K];
  };

  // Add prefix to all property names
  type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
  };

  type UserGetters = Getters<User>;
  // {
  //   getId: () => number;
  //   getName: () => string;
  //   getEmail: () => string;
  // }

  // Filter out properties
  type MethodsOnly<T> = {
    [K in keyof T as T[K] extends Function ? K : never]: T[K];
  };

  type IsString<T> = T extends string ? true : false;

  type A = IsString<string>;    // true
  type B = IsString<number>;    // false
  type C = IsString<'hello'>;    // true
  type D = IsString<string | number>; // boolean

  // Extract array element type
  type ArrayElement<T> = T extends (infer U)[] ? U : never;
  type Numbers = ArrayElement<number[]>; // number

  // Get return type of a function
  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

  // Get parameter types as a tuple
  type Parameters<T> = T extends (...args: infer P) => any ? P : never;

  // Get constructor parameter types
  type ConstructorParameters<T extends new (...args: any) => any> =
    T extends new (...args: infer P) => any ? P : never;

  // Get instance type from a constructor
  type InstanceType<T extends new (...args: any) => any> =
    T extends new (...args: any) => infer R ? R : any;

  // Without distribution
  type ToArrayNonDist<T> = T extends any ? T[] : never;
  type StrOrNumArr = ToArrayNonDist<string | number>; // (string | number)[]

  // With distribution
  type ToArray<T> = [T] extends [any] ? T[] : never;
  type StrOrNumArr2 = ToArray<string | number>; // string[] | number[]

  // Filter out non-string types
  type FilterStrings<T> = T extends string ? T : never;
  type Letters = FilterStrings<'a' | 'b' | 1 | 2 | 'c'>; // 'a' | 'b' | 'c'

  type Greeting = `Hello, ${string}`;

  const validGreeting: Greeting = 'Hello, World!';
  const invalidGreeting: Greeting = 'Hi there!'; // Error

  // With unions
  type Color = 'red' | 'green' | 'blue';
  type Size = 'small' | 'medium' | 'large';

  type Style = `${Color}-${Size}`;
  // 'red-small' | 'red-medium' | 'red-large' |
  // 'green-small' | 'green-medium' | 'green-large' |
  // 'blue-small' | 'blue-medium' | 'blue-large'

  // Built-in string manipulation types
  type T1 = Uppercase<'hello'>;  // 'HELLO'
  type T2 = Lowercase<'WORLD'>;  // 'world'
  type T3 = Capitalize<'typescript'>;  // 'Typescript'
  type T4 = Uncapitalize<'TypeScript'>;  // 'typeScript'

  // Create an event handler type
  type EventType = 'click' | 'change' | 'keydown';
  type EventHandler = `on${Capitalize<EventType>}`;
  // 'onClick' | 'onChange' | 'onKeydown'

  // Extract route parameters
  type ExtractRouteParams<T> =
    T extends `${string}:${infer Param}/${infer Rest}`
      ? { [K in Param | keyof ExtractRouteParams<`${Rest}`>]: string }
      : T extends `${string}:${infer Param}`
      ? { [K in Param]: string }
      : {};

  type Params = ExtractRouteParams<'/users/:userId/posts/:postId'>;
  // { userId: string; postId: string; }

  // Create a type-safe event emitter
  type EventMap = {
    click: { x: number; y: number };
    change: string;
    keydown: { key: string; code: number };
  };

  type EventHandlers = {
    [K in keyof EventMap as `on${Capitalize<K>}`]: (event: EventMap[K]) => void;
  };

  // Basic types
  interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
  }

  // Make all properties optional
  type PartialUser = Partial<User>;

  // make all properties required
  type RequiredUser = Required<PartialUser>;

  // make all properties read-only
  type ReadonlyUser = Readonly<User>;

  // pick specific properties
  type UserPreview = Pick<User, 'id' | 'name'>;

  // omit specific properties
  type UserWithoutEmail = Omit<User, 'email'>;

  // extract property types
  type UserId = User['id']; // number
  type UserKeys = keyof User; // 'id' | 'name' | 'email' | 'createdAt'

  // Create a type that excludes null and undefined
  type NonNullable<T> = T extends null | undefined ? never : T;

  // Exclude types from a union
  type Numbers = 1 | 2 | 3 | 'a' | 'b';
  type JustNumbers = Exclude<Numbers, string>; // 1 | 2 | 3

  // Extract types from a union
  type JustStrings = Extract<Numbers, string>; // 'a' | 'b'

  // Get the type that is not in the second type
  type A = { a: string; b: number; c: boolean };
  type B = { a: string; b: number };
  type C = Omit<A, keyof B>; // { c: boolean }

  // Create a type with all properties as mutable
  type Mutable<T> = {
    -readonly [K in keyof T]: T[K];
  };

  // Simple binary tree
  type BinaryTree<T> = {
    value: T;
    left?: BinaryTree<T>;
    right?: BinaryTree<T>;
  };

  // JSON-like data structure
  type JSONValue =
    | string
    | number
    | boolean
    | null
    | JSONValue[]
    | { [key: string]: JSONValue };

  // Nested comments
  type Comment = {
    id: number;
    content: string;
    replies: Comment[];
    createdAt: Date;
  };

  // Type for a linked list
  type LinkedList<T> = {
    value: T;
    next: LinkedList<T> | null;
  };

  // Type for a directory structure
  type File = {
    type: 'file';
    name: string;
    size: number;
  };

  type Directory = {
    type: 'directory';
    name: string;
    children: (File | Directory)[];
  };

  // Type for a state machine
  type State = {
    value: string;
    transitions: {
      [event: string]: State;
    };
  };

  // Type for a recursive function
  type RecursiveFunction<T> = (x: T | RecursiveFunction<T>) => void;
}

//https://www.w3schools.com/typescript/typescript_type_guards.php
{
  // Simple type guard with typeof
  function formatValue(value: string | number): string {
    if (typeof value === 'string') {
      // TypeScript knows value is string here
      return value.trim().toUpperCase();
    } else {
      // TypeScript knows value is number here
      return value.toFixed(2);
    }
  }

  // Example usage
  const result1 = formatValue('  hello  ');  // "HELLO"
  const result2 = formatValue(42.1234);      // "42.12"

  class Bird {
    fly() {
      console.log("Flying...");
    }
  }

  class Fish {
    swim() {
      console.log("Swimming...");
    }
  }

  function move(animal: Bird | Fish) {
    if (animal instanceof Bird) {
      // TypeScript knows animal is Bird here
      animal.fly();
    } else {
      // TypeScript knows animal is Fish here
      animal.swim();
    }
  }

  interface Car {
    make: string;
    model: string;
    year: number;
  }

  interface Motorcycle {
    make: string;
    model: string;
    year: number;
    type: "sport" | "cruiser";
  }

  // Type predicate function
  function isCar(vehicle: Car | Motorcycle): vehicle is Car {
    return (vehicle as Motorcycle).type === undefined;
  }

  function displayVehicleInfo(vehicle: Car | Motorcycle) {
    console.log(`Make: ${vehicle.make}, Model: ${vehicle.model}, Year: ${vehicle.year}`);

    if (isCar(vehicle)) {
      // TypeScript knows vehicle is Car here
      console.log("This is a car");
    } else {
      // TypeScript knows vehicle is Motorcycle here
      console.log(`This is a ${vehicle.type} motorcycle`);
    }
  }

  interface Circle {
    kind: "circle";
    radius: number;
  }

  interface Square {
    kind: "square";
    sideLength: number;
  }

  type Shape = Circle | Square;

  function calculateArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        // TypeScript knows shape is Circle here
        return Math.PI * shape.radius ** 2;
      case "square":
        // TypeScript knows shape is Square here
        return shape.sideLength ** 2;
    }
  }

  interface Dog {
    bark(): void;
  }

  interface Cat {
    meow(): void;
  }

  function makeSound(animal: Dog | Cat) {
    if ("bark" in animal) {
      // TypeScript knows animal is Dog here
      animal.bark();
    } else {
      // TypeScript knows animal is Cat here
      animal.meow();
    }
  }

  // Type assertion function
  function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== 'string') {
      throw new Error('Value is not a string');
    }
  }

  // Type assertion function with custom error
  function assert(condition: unknown, message: string): asserts condition {
    if (!condition) {
      throw new Error(message);
    }
  }

  // Usage
  function processInput(input: unknown) {
    assertIsString(input);
    // input is now typed as string
    console.log(input.toUpperCase());
  }

  // With custom error
  function processNumber(value: unknown): number {
    assert(typeof value === 'number', 'Value must be a number');
    // value is now typed as number
    return value * 2;
  }
}

//https://www.w3schools.com/typescript/typescript_conditional_types.php
{
  type IsString<T> = T extends string ? true : false;

  // Usage examples
  type Result1 = IsString<string>; // true
  type Result2 = IsString<number>; // false
  type Result3 = IsString<"hello">; // true (literal types extend their base types)

  // We can use this with variables too
  let a: IsString<string>; // a has type 'true'
  let b: IsString<number>; // b has type 'false'

  type ToArray<T> = T extends any ? T[] : never;

  // When used with a union type, it applies to each member of the union
  type StringOrNumberArray = ToArray<string | number>;
  // This becomes ToArray<string> | ToArray<number>
  // Which becomes string[] | number[]

  // We can also extract specific types from a union
  type ExtractString<T> = T extends string ? T : never;
  type StringsOnly = ExtractString<string | number | boolean | "hello">;
  // Result: string | "hello"

  // Extract the return type of a function type
  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

  // Examples
  function greet() { return "Hello, world!"; }
  function getNumber() { return 42; }

  type GreetReturnType = ReturnType<typeof greet>; // string
  type NumberReturnType = ReturnType<typeof getNumber>; // number

  // Extract element type from array
  type ElementType<T> = T extends (infer U)[] ? U : never;
  type NumberArrayElement = ElementType<number[]>; // number
  type StringArrayElement = ElementType<string[]>; // string

  // Extract<T, U> - Extracts types from T that are assignable to U
  type OnlyStrings = Extract<string | number | boolean, string>; // string

  // Exclude<T, U> - Excludes types from T that are assignable to U
  type NoStrings = Exclude<string | number | boolean, string>; // number | boolean

  // NonNullable<T> - Removes null and undefined from T
  type NotNull = NonNullable<string | null | undefined>; // string

  // Parameters<T> - Extracts parameter types from a function type
  type Params = Parameters<(a: string, b: number) => void>; // [string, number]

  // ReturnType<T> - Extracts the return type from a function type
  type Return = ReturnType<() => string>; // string

  // Deeply unwrap Promise types
  type UnwrapPromise<T> = T extends Promise<infer U> ? UnwrapPromise<U> : T;

  // Examples
  type A = UnwrapPromise<Promise<string>>; // string
  type B = UnwrapPromise<Promise<Promise<number>>>; // number
  type C = UnwrapPromise<boolean>; // boolean

  type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

  // Usage
  type T0 = TypeName<string>; // "string"
  type T1 = TypeName<42>; // "number"
  type T2 = TypeName<true>; // "boolean"
  type T3 = TypeName<() => void>; // "function"
  type T4 = TypeName<Date[]>; // "object"

  // A function that returns different types based on input type
  function processValue<T>(value: T): T extends string
    ? string
    : T extends number
    ? number
    : T extends boolean
    ? boolean
    : never {

    if (typeof value === "string") {
      return value.toUpperCase() as any; // Type assertion needed due to limitations
    } else if (typeof value === "number") {
      return (value * 2) as any;
    } else if (typeof value === "boolean") {
      return (!value) as any;
    } else {
      throw new Error("Unsupported type");
    }
  }

  // Usage
  const stringResult = processValue("hello"); // Returns "HELLO" (type is string)
  const numberResult = processValue(10); // Returns 20 (type is number)
  const boolResult = processValue(true); // Returns false (type is boolean)
}

//https://www.w3schools.com/typescript/typescript_mapped_types.php
{
  // Small example
  type Person = { name: string; age: number };
  type PartialPerson = { [P in keyof Person]?: Person[P] };
  type ReadonlyPerson = { readonly [P in keyof Person]: Person[P] };

  // Define an object type
  interface Person {
    name: string;
    age: number;
    email: string;
  }

  // Create a mapped type that makes all properties optional
  type PartialPerson = {
    [P in keyof Person]?: Person[P];
  };

  // Usage
  const partialPerson: PartialPerson = {
    name: "John"
    // age and email are optional
  };

  // Create a mapped type that makes all properties readonly
  type ReadonlyPerson = {
    readonly [P in keyof Person]: Person[P];
  };

  // Usage
  const readonlyPerson: ReadonlyPerson = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
  };

  // readonlyPerson.age = 31; // Error: Cannot assign to 'age' because it is a read-only property

  interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
  }

  // Partial<T> - Makes all properties optional
  type PartialUser = Partial<User>;
  // Equivalent to: { id?: number; name?: string; email?: string; isAdmin?: boolean; }

  // Required<T> - Makes all properties required
  type RequiredUser = Required<Partial<User>>;
  // Equivalent to: { id: number; name: string; email: string; isAdmin: boolean; }

  // Readonly<T> - Makes all properties readonly
  type ReadonlyUser = Readonly<User>;
  // Equivalent to: { readonly id: number; readonly name: string; ... }

  // Pick<T, K> - Creates a type with a subset of properties from T
  type UserCredentials = Pick<User, "email" | "id">;
  // Equivalent to: { email: string; id: number; }

  // Omit<T, K> - Creates a type by removing specified properties from T
  type PublicUser = Omit<User, "id" | "isAdmin">;
  // Equivalent to: { name: string; email: string; }

  // Record<K, T> - Creates a type with specified keys and value types
  type UserRoles = Record<"admin" | "user" | "guest", string>;
  // Equivalent to: { admin: string; user: string; guest: string; }

  // Base interface
  interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
  }

  // Create a mapped type to convert all properties to string type
  type StringifyProperties<T> = {
    [P in keyof T]: string;
  };

  // Usage
  type StringProduct = StringifyProperties<Product>;
  // Equivalent to: { id: string; name: string; price: string; inStock: string; }

  // Create a mapped type that adds validation functions for each property
  type Validator<T> = {
    [P in keyof T]: (value: T[P]) => boolean;
  };

  // Usage
  const productValidator: Validator<Product> = {
    id: (id) => id > 0,
    name: (name) => name.length > 0,
    price: (price) => price >= 0,
    inStock: (inStock) => typeof inStock === "boolean"
  };

  // Base interface with some readonly and optional properties
  interface Configuration {
    readonly apiKey: string;
    readonly apiUrl: string;
    timeout?: number;
    retries?: number;
  }

  // Remove readonly modifier from all properties
  type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
  };

  // Usage
  type MutableConfig = Mutable<Configuration>;
  // Equivalent to: { apiKey: string; apiUrl: string; timeout?: number; retries?: number; }

  // Make all optional properties required
  type RequiredProps<T> = {
    [P in keyof T]-?: T[P];
  };

  // Usage
  type RequiredConfig = RequiredProps<Configuration>;
  // Equivalent to: { readonly apiKey: string; readonly apiUrl: string; timeout: number; retries: number; }

  // Base interface
  interface ApiResponse {
    data: unknown;
    status: number;
    message: string;
    timestamp: number;
  }

  // Conditional mapped type: Convert each numeric property to a formatted string
  type FormattedResponse<T> = {
    [P in keyof T]: T[P] extends number ? string : T[P];
  };

  // Usage
  type FormattedApiResponse = FormattedResponse<ApiResponse>;
  // Equivalent to: { data: unknown; status: string; message: string; timestamp: string; }

  // Another example: Filter for only string properties
  type StringPropsOnly<T> = {
    [P in keyof T as T[P] extends string ? P : never]: T[P];
  };

  // Usage
  type ApiResponseStringProps = StringPropsOnly<ApiResponse>;
  // Equivalent to: { message: string; }
}

//https://www.w3schools.com/typescript/typescript_type_inference.php
{
  // TypeScript infers these variable types
  let name = "Alice"; // inferred as string
  let age = 30; // inferred as number
  let isActive = true; // inferred as boolean
  let numbers = [1, 2, 3]; // inferred as number[]
  let mixed = [1, "two", true]; // inferred as (string | number | boolean)[]

  // Using the inferred types
  name.toUpperCase(); // Works because name is inferred as string
  age.toFixed(2); // Works because age is inferred as number
  // name.toFixed(2); // Error: Property 'toFixed' does not exist on type 'string'

  // Return type is inferred as string
  function greet(name: string) {
    return `Hello, ${name}!`;
  }

  // Return type is inferred as number
  function add(a: number, b: number) {
    return a + b;
  }

  // Return type is inferred as string | number
  function getValue(key: string) {
    if (key === "name") {
      return "Alice";
    } else {
      return 42;
    }
  }
  // Using the inferred return types
  let greeting = greet("Bob"); // inferred as string
  let sum = add(5, 3); // inferred as number
  let value = getValue("age"); // inferred as string | number

  // The type of the callback parameter is inferred from the array method context
  const names = ["Alice", "Bob", "Charlie"];

  // Parameter 'name' is inferred as string
  names.forEach(name => {
    console.log(name.toUpperCase());
  });

  // Parameter 'name' is inferred as string, and the return type is inferred as number
  const nameLengths = names.map(name => {
    return name.length;
  });

  // nameLengths is inferred as number[]

  // Parameter types in event handlers are also inferred
  /*
  document.addEventListener("click", event => {
    // 'event' is inferred as MouseEvent
    console.log(event.clientX, event.clientY);
  });
  */

  // TypeScript infers the type of this object
  const user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    active: true,
    details: {
      age: 30,
      address: {
        city: "New York",
        country: "USA"
      }
    }
  };

  // Accessing inferred properties
  console.log(user.name.toUpperCase());
  console.log(user.details.age.toFixed(0));
  console.log(user.details.address.city.toLowerCase());

  // Type errors would be caught
  // console.log(user.age); // Error: Property 'age' does not exist on type '...'
  // console.log(user.details.name); // Error: Property 'name' does not exist on type '...'
  // console.log(user.details.address.zip); // Error: Property 'zip' does not exist on type '...'

  // Regular type inference (widens to string)
  let name2 = "Alice";  // type: string

  // Const assertion (narrows to literal type)
  const nameConst = "Alice" as const;  // type: "Alice"

  // With objects
  const user2 = {
    id: 1,
    name: "Alice",
    roles: ["admin", "user"] as const  // readonly tuple
  } as const;

  // user.name = "Bob";  // Error: Cannot assign to 'name' because it is a read-only property

  function processValue(value: string | number) {
    // Type is narrowed to string in this block
    if (typeof value === "string") {
      console.log(value.toUpperCase());
    }
    // Type is narrowed to number here
    else {
      console.log(value.toFixed(2));
    }
  }

  // Discriminated unions
  interface Circle { kind: "circle"; radius: number; }
  interface Square { kind: "square"; size: number; }
  type Shape = Circle | Square;

  function area(shape: Shape) {
    // Type is narrowed based on 'kind' property
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.size ** 2;
    }
  }

  // 1. Let TypeScript infer simple types
  let message = "Hello"; // Good: no need for explicit type here

  // 2. Provide explicit types for function parameters
  function formatName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
  }

  // 3. Consider adding return type annotations for complex functions
  function processData(input: string[]): { count: number; items: string[] } {
    return {
      count: input.length,
      items: input.map(item => item.trim())
    };
  }

  // 4. Use explicit type annotations for empty arrays or objects
  const emptyArray: string[] = []; // Without annotation, inferred as any[]
  const configOptions: Record<string, unknown> = {}; // Without annotation, inferred as {}

  // 5. Use type assertions when TypeScript cannot infer correctly
  //const canvas = document.getElementById("main-canvas") as HTMLCanvasElement;

  // Good: Explicit type for complex return values
  function processData2(input: string[]): { results: string[]; count: number } {
    return {
      results: input.map(processItem),
      count: input.length
    };
  }

  // Good: Explicit type for empty arrays
  const items: Array<{ id: number; name: string }> = [];

  // Good: Explicit type for configuration objects
  const config: {
    apiUrl: string;
    retries: number;
    timeout: number;
  } = {
    apiUrl: "https://api.example.com",
    retries: 3,
    timeout: 5000
  };

}

//https://www.w3schools.com/typescript/typescript_literal_types.php
{
  // A variable with a string literal type
  let direction: "north" | "south" | "east" | "west";

  // Valid assignments
  direction = "north";
  direction = "south";

  // Invalid assignments would cause errors
  // direction = "northeast"; // Error: Type '"northeast"' is not assignable to type '"north" | "south" | "east" | "west"'
  // direction = "up"; // Error: Type '"up"' is not assignable to type '"north" | "south" | "east" | "west"'

  // Using string literal types in functions
  function move(direction: "north" | "south" | "east" | "west") {
    console.log(`Moving ${direction}`);
  }

  move("east"); // Valid
  // move("up"); // Error: Argument of type '"up"' is not assignable to parameter of type...

  // A variable with a numeric literal type
  let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;

  // Valid assignments
  diceRoll = 1;
  diceRoll = 6;

  // Invalid assignments would cause errors
  // diceRoll = 0; // Error: Type '0' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'
  // diceRoll = 7; // Error: Type '7' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'
  // diceRoll = 2.5; // Error: Type '2.5' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'

  // Using numeric literal types in functions
  function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return Math.floor(Math.random() * 6) + 1 as 1 | 2 | 3 | 4 | 5 | 6;
  }

  const result = rollDice();
  console.log(`You rolled a ${result}`);

  // A type that can only be the literal value 'true'
  type YesOnly = true;

  // A function that must return true
  function alwaysSucceed(): true {
    // Always returns the literal value 'true'
    return true;
  }

  // Boolean literal combined with other types
  type SuccessFlag = true | "success" | 1;
  type FailureFlag = false | "failure" | 0;

  function processResult(result: SuccessFlag | FailureFlag) {
    if (result === true || result === "success" || result === 1) {
      console.log("Operation succeeded");
    } else {
      console.log("Operation failed");
    }
  }

  processResult(true); // "Operation succeeded"
  processResult("success"); // "Operation succeeded"
  processResult(1); // "Operation succeeded"
  processResult(false); // "Operation failed"

  // Object with literal property values
  type HTTPSuccess = {
    status: 200 | 201 | 204;
    statusText: "OK" | "Created" | "No Content";
    data: any;
  };

  type HTTPError = {
    status: 400 | 401 | 403 | 404 | 500;
    statusText: "Bad Request" | "Unauthorized" | "Forbidden" | "Not Found" | "Internal Server Error";
    error: string;
  };

  type HTTPResponse = HTTPSuccess | HTTPError;

  function handleResponse(response: HTTPResponse) {
    if (response.status >= 200 && response.status < 300) {
      console.log(`Success: ${response.statusText}`);
      console.log(response.data);
    } else {
      console.log(`Error ${response.status}: ${response.statusText}`);
      console.log(`Message: ${response.error}`);
    }
  }

  // Example usage
  const successResponse: HTTPSuccess = {
    status: 200,
    statusText: "OK",
    data: { username: "john_doe", email: "john@example.com" }
  };

  const errorResponse: HTTPError = {
    status: 404,
    statusText: "Not Found",
    error: "User not found in database"
  };

  handleResponse(successResponse);
  handleResponse(errorResponse);

  // Basic template literals
  type Direction = "north" | "south" | "east" | "west";
  type Distance = "1km" | "5km" | "10km";

  // Using template literals to combine them
  type DirectionAndDistance = `${Direction}-${Distance}`;
  // "north-1km" | "north-5km" | "north-10km" | "south-1km" | ...

  let route: DirectionAndDistance;
  route = "north-5km"; // Valid
  route = "west-10km"; // Valid
  // route = "north-2km"; // Error
  // route = "5km-north"; // Error

  // Advanced string manipulation
  type EventType = "click" | "hover" | "scroll";
  type EventTarget = "button" | "link" | "div";
  type EventName = `on${Capitalize<EventType>}${Capitalize<EventTarget>}`;
  // "onClickButton" | "onClickLink" | "onClickDiv" | ...

  // Dynamic property access
  type User = {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
  };

  type GetterName<T> = `get${Capitalize<string & keyof T>}`;
  type UserGetters = {
  [K in keyof User as GetterName<User>]: () => User[K];
  };
  // { getId: () => number; getName: () => string; ... }

  // String pattern matching
  type ExtractRouteParams<T extends string> =
    T extends `${string}:${infer Param}/${infer Rest}`
      ? Param | ExtractRouteParams<Rest>
      : T extends `${string}:${infer Param}`
        ? Param
      : never;

  type Params = ExtractRouteParams<"/users/:userId/posts/:postId">; // "userId" | "postId"

  // CSS units and values
  type CssUnit = 'px' | 'em' | 'rem' | '%' | 'vh' | 'vw';
  type CssValue = `${number}${CssUnit}`;

  let width: CssValue = '100px'; // Valid
  let height: CssValue = '50%'; // Valid
  // let margin: CssValue = '10'; // Error
  // let padding: CssValue = '2ex'; // Error

  // API versioning
  type ApiVersion = 'v1' | 'v2' | 'v3';
  type Endpoint = 'users' | 'products' | 'orders';
  type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

  type ApiUrl = `https://api.example.com/${ApiVersion}/${Endpoint}`;

  // Complex example: Dynamic SQL query builder
  type Table = 'users' | 'products' | 'orders';
  type Column<T extends Table> =
    T extends 'users' ? 'id' | 'name' | 'email' | 'created_at' :
    T extends 'products' ? 'id' | 'name' | 'price' | 'in_stock' :
    T extends 'orders' ? 'id' | 'user_id' | 'total' | 'status' : never;

  type WhereCondition<T extends Table> = {
    [K in Column<T>]?: {
      equals?: any;
      notEquals?: any;
      in?: any[];
    };
  };

  function query<T extends Table>(
    table: T,
    where?: WhereCondition<T>
  ): `SELECT * FROM ${T}${string}` {
    // Implementation would build the query
    return `SELECT * FROM ${table}` as const;
  }

  // Usage
  const userQuery = query('users', {
    name: { equals: 'John' },
    created_at: { in: ['2023-01-01', '2023-12-31'] }
  });
  // Type: "SELECT * FROM users WHERE ..."
}

//https://www.w3schools.com/typescript/typescript_namespaces.php
namespace Validation {
  // Everything inside this block belongs to the Validation namespace

  // Export things you want to make available outside the namespace
  export interface StringValidator {
    isValid(s: string): boolean;
  }

  // This is private to the namespace (not exported)
  const lettersRegexp = /^[A-Za-z]+$/;

  // Exported class - available outside the namespace
  export class LettersValidator implements StringValidator {
    isValid(s: string): boolean {
      return lettersRegexp.test(s);
    }
  }

  // Another exported class
  export class ZipCodeValidator implements StringValidator {
    isValid(s: string): boolean {
      return /^[0-9]+$/.test(s) && s.length === 5;
    }
  }
}

// Using the namespace members
let letterValidator = new Validation.LettersValidator();
let zipCodeValidator = new Validation.ZipCodeValidator();

console.log(letterValidator.isValid("Hello")); // true
console.log(letterValidator.isValid("Hello123")); // false

console.log(zipCodeValidator.isValid("12345")); // true
console.log(zipCodeValidator.isValid("1234")); // false - wrong length

namespace App {
  export namespace Utils {
    export function log(msg: string): void {
      console.log(`[LOG]: ${msg}`);
    }

    export function error(msg: string): void {
      console.error(`[ERROR]: ${msg}`);
    }
  }

  export namespace Models {
    export interface User {
      id: number;
      name: string;
      email: string;
    }

    export class UserService {
      getUser(id: number): User {
        return { id, name: "John Doe", email: "john@example.com" };
      }
    }
  }
}

// Using nested namespaces
App.Utils.log("Application starting");

const userService = new App.Models.UserService();
const user2 = userService.getUser(1);

App.Utils.log(`User loaded: ${user2.name}`);

// This would be a type error in TypeScript
// App.log("directly accessing log"); // Error - log is not a direct member of App

namespace VeryLongNamespace {
  export namespace DeeplyNested {
    export namespace Components {
      export class Button {
        display(): void {
          console.log("Button displayed");
        }
      }
      export class TextField {
        display(): void {
          console.log("TextField displayed");
        }
      }
    }
  }
}

// Without alias - very verbose
const button1 = new VeryLongNamespace.DeeplyNested.Components.Button();
button1.display();

// With namespace alias
import Components = VeryLongNamespace.DeeplyNested.Components;
const button2 = new Components.Button();
button2.display();

// With specific member alias
import Button = VeryLongNamespace.DeeplyNested.Components.Button;
const button3 = new Button();
button3.display();

namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean;
  }
}

/// <reference path="validators.ts" />
namespace Validation {
  const lettersRegexp = /^[A-Za-z]+$/;

  export class LettersValidator implements StringValidator {
    isValid(s: string): boolean {
      return lettersRegexp.test(s);
    }
  }
}

/// <reference path="validators.ts" />
namespace Validation {
  const zipCodeRegexp = /^[0-9]+$/;

  export class ZipCodeValidator implements StringValidator {
    isValid(s: string): boolean {
      return zipCodeRegexp.test(s) && s.length === 5;
    }
  }
}

/// <reference path="validators.ts" />
/// <reference path="letters-validator.ts" />
/// <reference path="zipcode-validator.ts" />

// Now you can use the validators from multiple files
let validators: { [s: string]: Validation.StringValidator } = {};
validators["letters"] = new Validation.LettersValidator();
validators["zipcode"] = new Validation.ZipCodeValidator();

// Some samples to validate
let strings = ["Hello", "98052", "101"];

// Validate each
strings.forEach(s => {
  for (let name in validators) {
    console.log(`"${s}" - ${validators[name].isValid(s) ? "matches" : "does not match"} ${name}`);
  }
});

// Original namespace
declare namespace Express {
  interface Request {
    user?: { id: number; name: string };
  }
  interface Response {
    json(data: any): void;
  }
}

// Later in your application (e.g., in a .d.ts file)
declare namespace Express {
  // Augment the Request interface
  interface Request {
    // Add custom properties
    requestTime?: number;
    // Add methods
    log(message: string): void;
  }

  // Add new types
  interface UserSession {
    userId: number;
    expires: Date;
  }
}

// Usage in your application
/*
const app = express();

app.use((req: Express.Request, res: Express.Response, next) => {
  // Augmented properties and methods are available
  req.requestTime = Date.now();
  req.log('Request started');
  next();
});
*/

// Generic namespace example
namespace DataStorage {
  export interface Repository<T> {
    getAll(): T[];
    getById(id: number): T | undefined;
    add(item: T): void;
    update(id: number, item: T): boolean;
    delete(id: number): boolean;
  }

  // Concrete implementation
  export class InMemoryRepository<T> implements Repository<T> {
    private items: T[] = [];

    getAll(): T[] {
      return [...this.items];
    }

    getById(id: number): T | undefined {
      return this.items[id];
    }

    add(item: T): void {
      this.items.push(item);
    }

    update(id: number, item: T): boolean {
      if (id >= 0 && id < this.items.length) {
        this.items[id] = item;
        return true;
      }
      return false;
    }

    delete(id: number): boolean {
      if (id >= 0 && id < this.items.length) {
        this.items.splice(id, 1);
        return true;
      }
      return false;
    }
  }
}

// Usage
interface User {
  id: number;
  name: string;
  email: string;
}

const userRepo = new DataStorage.InMemoryRepository<User>();
userRepo.add({ id: 1, name: 'John Doe', email: 'john@example.com' });
const allUsers = userRepo.getAll();

// Before: Using namespaces
namespace MyApp {
  export namespace Services {
    export class UserService {
      getUser(id: number) { /* ... */ }
    }
  }
}

// After: Using ES modules
// services/UserService.ts
/*
export class UserService {
  getUser(id: number) {  }
}

// app.ts
import { UserService } from './services/UserService';
const userService = new UserService();
*/

//https://www.w3schools.com/typescript/typescript_index_signatures.php
{
  // This interface represents an object with string keys and string values
  interface StringDictionary {
    [key: string]: string;
  }

  // Creating a compliant object
  const names: StringDictionary = {
    firstName: "Alice",
    lastName: "Smith",
    "100": "One Hundred"
  };

  // Accessing properties
  console.log(names["firstName"]); // "Alice"
  console.log(names["lastName"]); // "Smith"
  console.log(names["100"]); // "One Hundred"

  // Adding new properties dynamically
  names["age"] = "30";

  // This would cause an error
  // names["age"] = 30; // Error: Type 'number' is not assignable to type 'string'

  // Object with number indexes
  interface NumberDictionary {
    [index: number]: any;
  }

  const scores: NumberDictionary = {
    0: "Zero",
    1: 100,
    2: true
  };

  console.log(scores[0]); // "Zero"
  console.log(scores[1]); // 100
  console.log(scores[2]); // true

  // Adding a complex object
  scores[3] = { passed: true };

  interface UserInfo {
    name: string; // Required property with specific name
    age: number;  // Required property with specific name
    [key: string]: string | number; // All other properties must be string or number
  }

  const user: UserInfo = {
    name: "Alice", // Required
    age: 30,      // Required
    address: "123 Main St", // Optional
    zipCode: 12345 // Optional
  };

  // This would cause an error
  // const invalidUser: UserInfo = {
  //  name: "Bob",
  //  age: "thirty", // Error: Type 'string' is not assignable to type 'number'
  //  isAdmin: true  // Error: Type 'boolean' is not assignable to type 'string | number'
  // };

  interface ReadOnlyStringArray {
    readonly [index: number]: string;
  }

  const names2: ReadOnlyStringArray = ["Alice", "Bob", "Charlie"];

  console.log(names2[0]); // "Alice"

  // This would cause an error
  // names[0] = "Andrew"; // Error: Index signature in type 'ReadOnlyStringArray' only permits reading

  // Type for API responses with dynamic keys
  interface ApiResponse<T> {
    data: {
      [resourceType: string]: T[];  // e.g., { "users": User[], "posts": Post[] }
    };
    meta: {
      page: number;
      total: number;
      [key: string]: any;  // Allow additional metadata
    };
  }

  // Example usage with a users API
  interface User {
    id: number;
    name: string;
    email: string;
  }

  // Mock API response
  const apiResponse: ApiResponse<User> = {
    data: {
      users: [
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" }
      ]
    },
    meta: {
      page: 1,
      total: 2,
      timestamp: "2023-01-01T00:00:00Z"
    }
  };

  // Accessing the data
  const users = apiResponse.data.users;
  console.log(users[0].name);  // "Alice"

  interface ConflictingTypes {
    [key: string]: number;
    name: string; // Error: not assignable to string index type 'number'
  }

  interface FixedTypes {
    [key: string]: number | string;
    name: string;  // OK
    age: number;   // OK
  }

  // Index signature
  interface StringMap {
    [key: string]: string;
  }

  // Record
  type StringRecord = Record<string, string>;
}

//https://www.w3schools.com/typescript/typescript_declaration_merging.php
{
  // First declaration
  interface Person {
    name: string;
    age: number;
  }

  // Second declaration with the same name
  interface Person {
    address: string;
    email: string;
  }

  // TypeScript merges them into:
  // interface Person {
  // name: string;
  // age: number;
  // address: string;
  // email: string;
  // }

  const person: Person = {
    name: "John",
    age: 30,
    address: "123 Main St",
    email: "john@example.com"
  };

  console.log(person);

  // Function overloads
  function processValue(value: string): string;
  function processValue(value: number): number;
  function processValue(value: boolean): boolean;

  // Implementation that handles all overloads
  function processValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
      return value.toUpperCase();
    } else if (typeof value === "number") {
      return value * 2;
    } else {
      return !value;
    }
  }

  // Using the function with different types
  console.log(processValue("hello")); // "HELLO"
  console.log(processValue(10)); // 20
  console.log(processValue(true)); // false

  /*
  namespace Validation {
    export interface StringValidator {
      isValid(s: string): boolean;
    }
  }
  */

  /*
  namespace Validation {
    export interface NumberValidator {
      isValid(n: number): boolean;
    }

    export class ZipCodeValidator implements StringValidator {
      isValid(s: string): boolean {
        return s.length === 5 && /^\d+$/.test(s);
      }
    }
  }

  // After merging:
  // namespace Validation {
  // export interface StringValidator { isValid(s: string): boolean; }
  // export interface NumberValidator { isValid(n: number): boolean; }
  // export class ZipCodeValidator implements StringValidator { ... }
  // }

  // Using the merged namespace
  const zipValidator = new Validation.ZipCodeValidator();

  console.log(zipValidator.isValid("12345")); // true
  console.log(zipValidator.isValid("1234")); // false
  console.log(zipValidator.isValid("abcde")); // false
  */

  // Interface declaration
  interface Cart {
    calculateTotal(): number;
  }

  // Class declaration with same name
  class Cart {
    items: { name: string; price: number }[] = [];

    addItem(name: string, price: number): void {
      this.items.push({ name, price });
    }

    // Must implement the interface method
    calculateTotal(): number {
      return this.items.reduce((sum, item) => sum + item.price, 0);
    }
  }

  // Using the merged class and interface
  const cart = new Cart();
  cart.addItem("Book", 15.99);
  cart.addItem("Coffee Mug", 8.99);

  console.log(`Total: $${cart.calculateTotal().toFixed(2)}`);

  // First part of the enum
  enum Direction {
    North,
    South
  }

  // Second part of the enum
  enum Direction {
    East = 2,
    West = 3
  }

  // After merging:
  // enum Direction {
  // North = 0,
  // South = 1,
  // East = 2,
  // West = 3
  // }

  console.log(Direction.North); // 0
  console.log(Direction.South); // 1
  console.log(Direction.East); // 2
  console.log(Direction.West); // 3

  // Can also access by value
  console.log(Direction[0]); // "North"
  console.log(Direction[2]); // "East"

  // Original library definition
  // Imagine this comes from a third-party library
  /*
  declare namespace LibraryModule {
    export interface User {
      id: number;
      name: string;
    }
    export function getUser(id: number): User;
  }

  // Augmenting with additional functionality (your code)
  declare namespace LibraryModule {
    // Add new interface
    export interface UserPreferences {
      theme: string;
      notifications: boolean;
    }

    // Add new property to existing interface
    export interface User {
      preferences?: UserPreferences;
    }

    // Add new function
    export function getUserPreferences(userId: number): UserPreferences;
  }

  // Using the augmented module
  const user = LibraryModule.getUser(123);
  console.log(user.preferences?.theme);

  const prefs = LibraryModule.getUserPreferences(123);
  console.log(prefs.notifications);
  */

  //https://www.w3schools.com/typescript/typescript_async.php
  {
    // Create a typed Promise that resolves to a string
    const fetchGreeting = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const success = Math.random() > 0.5;
          if (success) {
            resolve("Hello, TypeScript!");
          } else {
            reject(new Error("Failed to fetch greeting"));
          }
        }, 1000);
      });
    };

    // Using the Promise with proper type inference
    fetchGreeting()
      .then((greeting) => {
        // TypeScript knows 'greeting' is a string
        console.log(greeting.toUpperCase());
      })
      .catch((error: Error) => {
        console.error("Error:", error.message);
      });
  }


  // Define types for our API response
  interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user' | 'guest';
  }

  // Function that returns a Promise of User array
  async function fetchUsers(): Promise<User[]> {
    console.log('Fetching users...');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
      { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
      { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user' }
    ];
  }

  // Async function to process users
  async function processUsers() {
    try {
      // TypeScript knows users is User[]
      const users = await fetchUsers();
      console.log(`Fetched ${users.length} users`);

      // Type-safe property access
      const adminEmails = users
        .filter(user => user.role === 'admin')
        .map(user => user.email);

      console.log('Admin emails:', adminEmails);
      return users;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Failed to process users:', error.message);
      } else {
        console.error('An unknown error occurred');
      }
      throw error; // Re-throw to let caller handle
    }
  }

  // Execute the async function
  processUsers()
    .then(users => console.log('Processing complete'))
    .catch(err => console.error('Processing failed:', err));

  // async function getString(): string { } // Error: must return Promise
  // async function getString(): Promise<string> { } // Correct

  interface Product {
    id: number;
    name: string;
    price: number;
  }

  async function fetchProduct(id: number): Promise<Product> {
    console.log(`Fetching product ${id}...`);
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
    return { id, name: `Product ${id}`, price: Math.floor(Math.random() * 100) };
  }

  async function fetchMultipleProducts() {
    try {
      // Start all fetches in parallel
      const [product1, product2, product3] = await Promise.all([
        fetchProduct(1),
        fetchProduct(2),
        fetchProduct(3)
      ]);

      const total = [product1, product2, product3]
        .reduce((sum, product) => sum + product.price, 0);
      console.log(`Total price: $${total.toFixed(2)}`);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  fetchMultipleProducts();

  // Define a type for the callback
  type FetchCallback = (error: Error | null, data?: string) => void;

  // Function that takes a typed callback
  function fetchDataWithCallback(url: string, callback: FetchCallback): void {
    // Simulate async operation
    setTimeout(() => {
      try {
        // Simulate successful response
        callback(null, "Response data");
      } catch (error) {
        callback(error instanceof Error ? error : new Error('Unknown error'));
      }
    }, 1000);
  }

  // Using the callback function
  fetchDataWithCallback('https://api.example.com', (error, data) => {
    if (error) {
      console.error('Error:', error.message);
      return;
    }
    
    // TypeScript knows data is a string (or undefined)
    if (data) {
      console.log(data.toUpperCase());
    }
  });

  // Different types of promises
  const fetchUser = (id: number): Promise<{ id: number; name: string }> =>
    Promise.resolve({ id, name: `User ${id}` });

  const fetchPosts = (userId: number): Promise<Array<{ id: number; title: string }>> =>
    Promise.resolve([     { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' }
    ]);

  const fetchStats = (userId: number): Promise<{ views: number; likes: number }> =>
    Promise.resolve({ views: 100, likes: 25 });

  // Run all in parallel
  async function loadUserDashboard(userId: number) {
    try {
      const [user, posts, stats] = await Promise.all([
        fetchUser(userId),
        fetchPosts(userId),
        fetchStats(userId)
      ]);

      // TypeScript knows the types of user, posts, and stats
      console.log(`User: ${user.name}`);
      console.log(`Posts: ${posts.length}`);
      console.log(`Likes: ${stats.likes}`);
      
      return { user, posts, stats };
    } catch (error) {
      console.error('Failed to load dashboard:', error);
      throw error;
    }
  }

  // Execute with a user ID
  loadUserDashboard(1);

  // Helper function for timeout
  const timeout = (ms: number): Promise<never> =>
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`Timeout after ${ms}ms`)), ms)
    );

  // Simulate API call with timeout
  async function fetchWithTimeout<T>(
    promise: Promise<T>,
    timeoutMs: number = 5000
  ): Promise<T> {
    return Promise.race([
      promise,
      timeout(timeoutMs).then(() => {
        throw new Error(`Request timed out after ${timeoutMs}ms`);
      }),
    ]);
  }

  // Usage example
  async function fetchUserData() {
    try {
      const response = await fetchWithTimeout(
        fetch('https://api.example.com/user/1'),
        3000 // 3 second timeout
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', (error as Error).message);
      throw error;
    }
  }

  // Simulate multiple API calls with different outcomes
  const fetchData = async (id: number) => {
    // Randomly fail some requests
    if (Math.random() > 0.7) {
      throw new Error(`Failed to fetch data for ID ${id}`);
    }
    return { id, data: `Data for ${id}` };
  };

  // Process multiple items with individual error handling
  async function processBatch(ids: number[]) {
    const promises = ids.map(id =>
      fetchData(id)
        .then(value => ({ status: 'fulfilled' as const, value }))
        .catch(reason => ({ status: 'rejected' as const, reason }))
    );

    // Wait for all to complete
    const results = await Promise.allSettled(promises);

    // Process results
    const successful = results
      .filter((result): result is PromiseFulfilledResult<{ status: 'fulfilled', value: any }> =>
        result.status === 'fulfilled' &&
        result.value.status === 'fulfilled'
      )
      .map(r => r.value.value);

    const failed = results
      .filter((result): result is PromiseRejectedResult |
        PromiseFulfilledResult<{ status: 'rejected', reason: any }> => {
        if (result.status === 'rejected') return true;
        return result.value.status === 'rejected';
      });

    console.log(`Successfully processed: ${successful.length}`);
    console.log(`Failed: ${failed.length}`);

    return { successful, failed };
  }

  // Process a batch of IDs
  processBatch([1, 2, 3, 4, 5]);


  // Base error class for our application
  class AppError extends Error {
    constructor(
      message: string,
      public readonly code: string,
      public readonly details?: unknown
    ) {
      super(message);
      this.name = this.constructor.name;
      Error.captureStackTrace?.(this, this.constructor);
    }
  }

  // Specific error types
  class NetworkError extends AppError {
    constructor(message: string, details?: unknown) {
      super(message, 'NETWORK_ERROR', details);
    }
  }

  class ValidationError extends AppError {
    constructor(
      public readonly field: string,
      message: string
    ) {
      super(message, 'VALIDATION_ERROR', { field });
    }
  }

  class NotFoundError extends AppError {
    constructor(resource: string, id: string | number) {
      super(
        `${resource} with ID ${id} not found`,
        'NOT_FOUND',
        { resource, id }
      );
    }
  }

  // Usage example
  async function fetchUserData2(userId: string): Promise<{ id: string; name: string }> {
    try {
      // Simulate API call
      const response = await fetch(`/api/users/${userId}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new NotFoundError('User', userId);
        } else if (response.status >= 500) {
          throw new NetworkError('Server error', { status: response.status });
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }
      
      const data = await response.json();
      
      // Validate response data
      if (!data.name) {
        throw new ValidationError('name', 'Name is required');
      }
      
      return data;
    } catch (error) {
      if (error instanceof AppError) {
        // Already one of our custom errors
        throw error;
      }
      // Wrap unexpected errors
      throw new AppError(
        'Failed to fetch user data',
        'UNEXPECTED_ERROR',
        { cause: error }
      );
    }
  }

  // Error handling in the application
  async function displayUserProfile(userId: string) {
    try {
      const user = await fetchUserData2(userId);
      console.log('User profile:', user);
    } catch (error) {
      if (error instanceof NetworkError) {
        console.error('Network issue:', error.message);
        // Show retry UI
      } else if (error instanceof ValidationError) {
        console.error('Validation failed:', error.message);
        // Highlight the invalid field
      } else if (error instanceof NotFoundError) {
        console.error('Not found:', error.message);
        // Show 404 page
      } else {
        console.error('Unexpected error:', error);
        // Show generic error message
      }
    }
  }

  // Execute with example data
  displayUserProfile('123');

  // Async generator function
  async function* generateNumbers(): AsyncGenerator<number, void, unknown> {
    let i = 0;
    while (i < 5) {
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield i++;
    }
  }

  // Using the async generator
  async function consumeNumbers() {
    for await (const num of generateNumbers()) {
      // TypeScript knows num is a number
      console.log(num * 2);
    }
  }

}

//https://www.w3schools.com/typescript/typescript_decorators.php
{
  /*
  class="code-comment">// A simple class decorator that logs class definition
  function logClass(constructor: Function) {
    console.log(`Class ${constructor.name} was defined at ${new Date().toISOString()}`);
  }

  class="code-comment">// Applying the decorator
  @logClass
  class UserService {
    getUsers() {
      return ['Alice', 'Bob', 'Charlie'];
    }
  }

  class="code-comment">// Output when the file is loaded: "Class UserService was defined at [timestamp]"
  */
}

//https://www.w3schools.com/typescript/typescript_error_handling.php
{
  function divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }

  try {
    const result = divide(10, 0);
    console.log(result);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }

  class ValidationError extends Error {
    constructor(message: string, public field?: string) {
      super(message);
      this.name = 'ValidationError';
      // Restore prototype chain
      Object.setPrototypeOf(this, ValidationError.prototype);
    }
  }

  class DatabaseError extends Error {
    constructor(message: string, public code: number) {
      super(message);
      this.name = 'DatabaseError';
      Object.setPrototypeOf(this, DatabaseError.prototype);
    }
  }

  // Usage
  function validateUser(user: any) {
    if (!user.name) {
      throw new ValidationError('Name is required', 'name');
    }
    if (!user.email.includes('@')) {
      throw new ValidationError('Invalid email format', 'email');
    }
  }

  // Type guards
  /*
  function isErrorWithMessage(error: unknown): error is { message: string } {
    return (
      typeof error === 'object' &&
      error !== null &&
      'message' in error &&
      typeof (error as Record"">).message === 'string'
    );
  }
    */

  function isValidationError(error: unknown): error is ValidationError {
    return error instanceof ValidationError;
  }

  // Usage in catch block
  try {
    validateUser({});
  } catch (error: unknown) {
    if (isValidationError(error)) {
      console.error(`Validation error in ${error.field}: ${error.message}`);
    } else if (isErrorWithMessage(error)) {
      console.error('An error occurred:', error.message);
    } else {
      console.error('An unknown error occurred');
    }
  }

  function assertIsError(error: unknown): asserts error is Error {
    if (!(error instanceof Error)) {
      throw new Error('Caught value is not an Error instance');
    }
  }

  try {
    // ...
  } catch (error) {
    assertIsError(error);
    console.error((error as Error).message); // TypeScript now knows error is Error
  }

  interface User {
    id: number;
    name: string;
    email: string;
  }

  // Using async/await with try/catch
  async function fetchUser(userId: number): Promise {
    try {
      const response = await fetch(`/api/users/${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json() as User;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Failed to fetch user:', error.message);
      }
      throw error; // Re-throw to allow caller to handle
    }
  }

  // Using Promise.catch() for error handling
  function fetchUserPosts(userId: number): Promise {
    return fetch(`/api/users/${userId}/posts`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Failed to fetch posts:', error);
        return []; // Return empty array as fallback
      });
  }

  // Bad: Unhandled promise rejection
  /*
  fetchData().then(data => console.log(data));

  // Good: Handle both success and error cases
  fetchData()
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));

  // Or use void for intentionally ignored errors
  void fetchData().catch(console.error);
  */

  /*
  import React, { Component, ErrorInfo, ReactNode } from 'react';

  interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
  }

  interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
  }

  class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    public state: ErrorBoundaryState = {
      hasError: false
    };

    public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
      return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.error('Uncaught error:', error, errorInfo);
      // Log to error reporting service
    }

    public render() {
      if (this.state.hasError) {
        return this.props.fallback || (
          <div className="error-boundary">
            <h2>Something went wrong</h2>
            <p>{this.state.error?.message}</p>
            <button onClick={() => this.setState({ hasError: false })}>
              Try again
            </button>
          </div>
        );
      }

      return this.props.children;
    }
  }

  // Usage
  function App() {
    return (
      <ErrorBoundary fallback={<div>Oops! Something broke.</div>}>
        <MyComponent />
      </ErrorBoundary>
    );
  }
  */

  // Bad: Silent failure
  try { /* ... */ } catch { /* empty */ }

  // Good: At least log the error
  try { /* ... */ } catch (error) {
    console.error('Operation failed:', error);
  }

  class NetworkError extends Error {
    constructor(public status: number, message: string) {
      super(message);
      this.name = 'NetworkError';
    }
  }

  class ValidationError2 extends Error {
    constructor(public field: string, message: string) {
      super(message);
      this.name = 'ValidationError';
    }
  }

  // In a data access layer
  async function getUser(id: string): Promise {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      throw new NetworkError(response.status, 'Failed to fetch user');
    }
    return response.json();
  }

  // In a UI component
  async function loadUser() {
    try {
      const user = await getUser('123');
      setUser(user);
    } catch (error) {
      if (error instanceof NetworkError) {
        if (error.status === 404) {
          showError('User not found');
        } else {
          showError('Network error. Please try again later.');
        }
      } else {
        showError('An unexpected error occurred');
      }
    }
  }

  // Bad: Unhandled promise rejection
  //fetchData();

  // Good: Handle the rejection
  //fetchData().catch(console.error);

  // Bad: Error is of type 'unknown'
  /*
  try { } catch (error) {
    console.log(error.message); // Error: Property 'message' does not exist on type 'unknown'
  }

  // Good: Narrow the type
  try { } catch (error) {
    if (error instanceof Error) {
      console.log(error.message); // OK
    }
  }
  */

  // Bad: Error is silently ignored
  /*
  function saveData(data: Data) {
    try {
      database.save(data);
    } catch {
      // Ignore
    }
  }

  // Better: Log the error and/or notify the user
  function saveData(data: Data) {
    try {
      database.save(data);
    } catch (error) {
      console.error('Failed to save data:', error);
      showError('Failed to save data. Please try again.');
    }
  }
  */


}

//https://www.w3schools.com/typescript/typescript_best_practices.php
{
  // Bad: Redundant type annotation
  //const name: string = 'John';

  // Good: Let TypeScript infer the type
  const name = 'John';

  // Bad: Redundant return type
  /*
  function add(a: number, b: number): number {
    return a + b;
  }
    */

  // Good: Let TypeScript infer return type
  function add(a: number, b: number) {
    return a + b;
  }

  // Bad: No type information
  /*
  function processUser(user) {
    return user.name.toUpperCase();
  }
  */

  // Good: Explicit parameter and return types
  interface User {
    id: number;
    name: string;
    email?: string; // Optional property
  }

  function processUser(user: User): string {
    return user.name.toUpperCase();
  }

  // Use interface for object shapes that can be extended/implemented
  interface User {
    id: number;
    name: string;
  }

  // Extending an interface
  interface AdminUser extends User {
    permissions: string[];
  }

  // Use type for unions, tuples, or mapped types
  type UserRole = 'admin' | 'editor' | 'viewer';

  // Union types
  type UserId = number | string;

  // Mapped types
  type ReadonlyUser = Readonly<User>;

  // Tuple types
  type Point = [number, number];

  // Bad: Loses type safety
  /*
  function logValue(value: any) {
    console.log(value.toUpperCase()); // No error until runtime
  }
    */

  // Better: Use generic type parameter
  function logValue<T>(value: T) {
    console.log(String(value)); // Safer, but still not ideal
  }

  // Best: Be specific about expected types
  function logString(value: string) {
    console.log(value.toUpperCase()); // Type-safe
  }

  // When you need to accept any value but still be type-safe
  function logUnknown(value: unknown) {
    if (typeof value === 'string') {
      console.log(value.toUpperCase());
    } else {
      console.log(String(value));
    }
  }


  // user/user.model.ts
  /*
  export interface User {
    id: string;
    name: string;
    email: string;
  }

  // user/user.service.ts
  import { User } from './user.model';

  export class UserService {
    private users: User[] = [];

    addUser(user: User) {
      this.users.push(user);
    }

    getUser(id: string): User | undefined {
      return this.users.find(user => user.id === id);
    }
  }

  // user/index.ts (barrel file)
  export * from './user.model';
  export * from './user.service';
  */

  // Good
  // user.service.ts // Service classes
  // user.model.ts // Type definitions
  // user.controller.ts // Controllers
  // user.component.ts // Components
  // user.utils.ts // Utility functions
  // user.test.ts // Test files

  // // Bad
  // UserService.ts // Avoid PascalCase for file names
  // user_service.ts // Avoid snake_case
  // userService.ts // Avoid camelCase for file names

  // Bad: No type information
  /*
  function process(user, notify) {
    notify(user.name);
  }

  // Good: Explicit parameter and return types
  function processUser(
    user: User,
    notify: (message: string) => void
  ): void {
    notify(`Processing user: ${user.name}`);
  }

  // Use default parameters instead of conditionals
  function createUser(
    name: string,
    role: UserRole = 'viewer',
    isActive: boolean = true
  ): User {
    return { name, role, isActive };
  }

  // Use rest parameters for variable arguments
  function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
  */

  /*
  // Bad: Too many responsibilities
  function processUserData(userData: any) {
    // Validation
    if (!userData || !userData.name) throw new Error('Invalid user data');

    // Data transformation
    const processedData = {
      ...userData,
      name: userData.name.trim(),
      createdAt: new Date()
    };

    // Side effect
    saveToDatabase(processedData);

    // Notification
    sendNotification(processedData.email, 'Profile updated');

    return processedData;
  }

  // Better: Split into smaller, focused functions
  function validateUserData(data: unknown): UserData {
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid user data');
    }
    return data as UserData;
  }

  function processUserData(userData: UserData): ProcessedUserData {
    return {
      ...userData,
      name: userData.name.trim(),
      createdAt: new Date()
    };
  }
  */
 
  /*
  // Bad: Not handling errors
  async function fetchData() {
    const response = await fetch('/api/data');
    return response.json();
  }

  // Good: Proper error handling
  async function fetchData<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json() as T;
    } catch (error) {
      console.error('Failed to fetch data:', error);
      throw error; // Re-throw to allow caller to handle
    }
  }

  // Better: Use Promise.all for parallel operations
  async function fetchMultipleData<T>(urls: string[]): Promise<T[]> {
    try {
      const promises = urls.map(url => fetchData<T>(url));
      return await Promise.all(promises);
    } catch (error) {
      console.error('One or more requests failed:', error);
      throw error;
    }
  }

  // Example usage
  interface User {
    id: string;
    name: string;
    email: string;
  }

  // Fetch user data with proper typing
  async function getUserData(userId: string): Promise<User> {
    return fetchData<User>(`/api/users/${userId}`);
  }
  */

  /*
  // Bad: Nested async/await (callback hell)
  async function processUser(userId: string) {
    const user = await getUser(userId);
    if (user) {
      const orders = await getOrders(user.id);
      if (orders.length > 0) {
        const latestOrder = orders[0];
        const items = await getOrderItems(latestOrder.id);
        return { user, latestOrder, items };
      }
    }
    return null;
  }

  // Better: Flatten the async/await chain
  async function processUser(userId: string) {
    const user = await getUser(userId);
    if (!user) return null;

    const orders = await getOrders(user.id);
    if (orders.length === 0) return { user, latestOrder: null, items: [] };

    const latestOrder = orders[0];
    const items = await getOrderItems(latestOrder.id);

    return { user, latestOrder, items };
  }

  // Best: Use Promise.all for independent async operations
  async function processUser(userId: string) {
    const [user, orders] = await Promise.all([
      getUser(userId),
      getOrders(userId)
    ]);

    if (!user) return null;
    if (orders.length === 0) return { user, latestOrder: null, items: [] };

    const latestOrder = orders[0];
    const items = await getOrderItems(latestOrder.id);

    return { user, latestOrder, items };
  }
  */

  /*
  // Bad: Hard to test due to direct dependencies
  class PaymentProcessor {
    async processPayment(amount: number) {
      const paymentGateway = new PaymentGateway();
      return paymentGateway.charge(amount);
    }
  }

  // Better: Use dependency injection
  interface PaymentGateway {
    charge(amount: number): Promise<boolean>;
  }

  class PaymentProcessor {
    constructor(private paymentGateway: PaymentGateway) {}

    async processPayment(amount: number): Promise<boolean> {
      if (amount <= 0) {
        throw new Error('Amount must be greater than zero');
      }
      return this.paymentGateway.charge(amount);
    }
  }

  // Test example with Jest
  describe('PaymentProcessor', () => {
    let processor: PaymentProcessor;
    let mockGateway: jest.Mocked<PaymentGateway>;

    beforeEach(() => {
      mockGateway = {
        charge: jest.fn()
      };
      processor = new PaymentProcessor(mockGateway);
    });

    it('should process a valid payment', async () => {
      mockGateway.charge.mockResolvedValue(true);
      const result = await processor.processPayment(100);
      expect(result).toBe(true);
      expect(mockGateway.charge).toHaveBeenCalledWith(100);
    });

    it('should throw for invalid amount', async () => {
      await expect(processor.processPayment(-50))
        .rejects
        toThrow('Amount must be greater than zero');
    });
  });
  */

  /*
  */

  // Using @ts-expect-error to test for type errors
  // @ts-expect-error - Should not allow negative values
  const invalidUser: User = { id: -1, name: 'Test' };

  // Using type assertions in tests
  function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== 'string') {
      throw new Error('Not a string');
    }
  }

  // Using utility types for testing
  type IsString<T> = T extends string ? true : false;
  type Test1 = IsString<string>; // true
  type Test2 = IsString<number>; // false

  // Using tsd for type testing (install with: npm install --save-dev tsd)
  /*
  import { expectType } from 'tsd';

  const user = { id: 1, name: 'John' };
  expectType<{ id: number; name: string }>(user);
  expectType<string>(user.name);
  */

  /*
  // Bad: Imports both type and value
  import { User, fetchUser } from './api';

  // Good: Separate type and value imports
  import type { User } from './api';
  import { fetchUser } from './api';

  // Even better: Use type-only imports when possible
  import type { User, UserSettings } from './types';

  // Type-only export
  export type { User };

  // Runtime export
  export { fetchUser };

  // In tsconfig.json, enable "isolatedModules": true
  // to ensure type-only imports are properly handled
  */

  /*
  // Bad: Deeply nested mapped types can be slow
  type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
  };

  // Better: Use built-in utility types when possible
  type User = {
    id: string;
    profile: {
      name: string;
      email: string;
    };
    preferences?: {
      notifications: boolean;
    };
  };

  // Instead of DeepPartial<User>, use Partial with type assertions
  const updateUser = (updates: Partial<User>) => {
    // Implementation
  };

  // For complex types, consider using interfaces
  interface UserProfile {
    name: string;
    email: string;
  }

  interface UserPreferences {
    notifications: boolean;
  }

  interface User {
    id: string;
    profile: UserProfile;
    preferences?: UserPreferences;
  }
  */

  /*
  // Without const assertion (wider type)
  const colors = ['red', 'green', 'blue'];
  // Type: string[]

  // With const assertion (narrower, more precise type)
  const colors = ['red', 'green', 'blue'] as const;
  // Type: readonly ["red", "green", "blue"]

  // Extract union type from const array
  type Color = typeof colors[number]; // "red" | "green" | "blue"

  // Objects with const assertions
  const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    features: ['auth', 'notifications'],
  } as const;

  // Type is:
  // {
  // readonly apiUrl: "https://api.example.com";
  // readonly timeout: 5000;
  // readonly features: readonly ["auth", "notifications"];
  // }
  */

  /*
  // Bad: Loses all type safety
  function process(data: any) {
    return data.map(item => item.name);
  }

  // Better: Use generics for type safety
  function process<T extends { name: string }>(items: T[]) {
    return items.map(item => item.name);
  }

  // Best: Use specific types when possible
  interface User {
    name: string;
    age: number;
  }

  function processUsers(users: User[]) {
    return users.map(user => user.name);
  }
  */

  /*
  // Redundant type annotation
  const name: string = 'John';

  // Let TypeScript infer the type
  const name = 'John'; // TypeScript knows it's a string

  // Redundant return type
  function add(a: number, b: number): number {
    return a + b;
  }

  // Let TypeScript infer the return type
  function add(a: number, b: number) {
    return a + b; // TypeScript infers number
  }
  */

  /*
  // Without type guard
  function process(input: string | number) {
    return input.toUpperCase(); // Error: toUpperCase doesn't exist on number
  }

  // With type guard
  function isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  function process(input: string | number) {
    if (isString(input)) {
      return input.toUpperCase(); // TypeScript knows input is string here
    } else {
      return input.toFixed(2); // TypeScript knows input is number here
    }
  }

  // Built-in type guards
  if (typeof value === 'string') { /value is string  }
  if (value instanceof Date) {  value is Date  }
  if ('id' in user) {  user has id property  }
  */

  /*
  // Bad: Potential runtime error
  function getLength(str: string | null) {
    return str.length; // Error: Object is possibly 'null'
  }

  // Good: Null check
  function getLength(str: string | null) {
    if (str === null) return 0;
    return str.length;
  }

  // Better: Use optional chaining and nullish coalescing
  function getLength(str: string | null) {
    return str?.length ?? 0;
  }

  // For arrays
  const names: string[] | undefined = [];
  const count = names?.length ?? 0; // Safely handle undefined

  // For object properties
  interface User {
    profile?: {
      name?: string;
    };
  }

  const user: User = {};
  const name = user.profile?.name ?? 'Anonymous';
  */



}






//https://www.typescriptlang.org/docs/
//https://www.typescriptlang.org/docs/handbook/intro.html
//https://www.typescriptlang.org/docs/handbook/2/modules.html

const classes = () => {
  {
    class Point {}
  }

  {
    class Point {
      x: number;
      y: number;
    }
    
    const pt = new Point();
    pt.x = 0;
    pt.y = 0;
  }

  {
    class Point {
      x = 0;
      y = 0;
    }
    
    const pt = new Point();
    // Prints 0, 0
    console.log(`${pt.x}, ${pt.y}`);
    //const pt = new Point();
    //pt.x = "0";
    //Type 'string' is not assignable to type 'number'.
  }

  {
    class BadGreeter {
      name: string;
    //Property 'name' has no initializer and is not definitely assigned in the constructor.
    }
  }

  {
    class GoodGreeter {
      name: string;
    
      constructor() {
        this.name = "hello";
      }
    }
  }

  {
    class OKGreeter {
      // Not initialized, but no error
      name!: string;
    }
  }
  
  {
    class Greeter {
      readonly name: string = "world";
    
      constructor(otherName?: string) {
        if (otherName !== undefined) {
          this.name = otherName;
        }
      }
    
      err() {
        this.name = "not ok";
      //Cannot assign to 'name' because it is a read-only property.
      }
    }
    const g = new Greeter();
    g.name = "also not ok";
    //Cannot assign to 'name' because it is a read-only property.
  }

  {
    class Point {
      x: number;
      y: number;
    
      // Normal signature with defaults
      constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
      }
    }
  }

  {
    class Point {
      x: number = 0;
      y: number = 0;
    
      // Constructor overloads
      constructor(x: number, y: number);
      constructor(xy: string);
      constructor(x: string | number, y: number = 0) {
        // Code logic here
      }
    }
  }
  
  {
    class Base {
      k = 4;
    }
    
    class Derived extends Base {
      constructor() {
        // Prints a wrong value in ES5; throws exception in ES6
        console.log(this.k);
        //'super' must be called before accessing 'this' in the constructor of a derived class.
        super();
      }
    }
  }

  {
    class Point {
      x = 10;
      y = 10;
    
      scale(n: number): void {
        this.x *= n;
        this.y *= n;
      }
    }
  }

  {
    let x: number = 0;
 
    class C {
      x: string = "hello";
    
      m() {
        // This is trying to modify 'x' from line 1, not the class property
        x = "world";
        //Type 'string' is not assignable to type 'number'.
      }
    }
  }
  
  {
    class C {
      _length = 0;
      get length() {
        return this._length;
      }
      set length(value) {
        this._length = value;
      }
    }
  }

  {
    class Thing {
      _size = 0;
    
      get size(): number {
        return this._size;
      }
    
      set size(value: string | number | boolean) {
        let num = Number(value);
    
        // Don't allow NaN, Infinity, etc
    
        if (!Number.isFinite(num)) {
          this._size = 0;
          return;
        }
    
        this._size = num;
      }
    }
  }

  {
    class MyClass {
      [s: string]: boolean | ((s: string) => boolean);
    
      check(s: string) {
        return this[s] as boolean;
      }
    }
  }

  {
    interface Pingable {
      ping(): void;
    }
    
    class Sonar implements Pingable {
      ping() {
        console.log("ping!");
      }
    }
    
    class Ball implements Pingable {
    // Class 'Ball' incorrectly implements interface 'Pingable'.
    //   Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
      pong() {
        console.log("pong!");
      }
    }
  }
  
  {
    interface Checkable {
      check(name: string): boolean;
    }
    
    class NameChecker implements Checkable {
      check(s) {
    //Parameter 's' implicitly has an 'any' type.
        // Notice no error here
        return s.toLowerCase() === "ok";
                    
      //any
      }
    }
  }

  {
    interface A {
      x: number;
      y?: number;
    }
    class C implements A {
      x = 0;
    }
    const c = new C();
    c.y = 10;
    //Property 'y' does not exist on type 'C'.
  }
  
  {
    class Animal {
      move() {
        console.log("Moving along!");
      }
    }
    
    class Dog extends Animal {
      woof(times: number) {
        for (let i = 0; i < times; i++) {
          console.log("woof!");
        }
      }
    }
    
    const d = new Dog();
    // Base class method
    d.move();
    // Derived class method
    d.woof(3);
  }
  
  {
    class Base {
      greet() {
        console.log("Hello, world!");
      }
    }
    
    class Derived extends Base {
      greet(name?: string) {
        if (name === undefined) {
          super.greet();
        } else {
          console.log(`Hello, ${name.toUpperCase()}`);
        }
      }
    }
    
    const d = new Derived();
    d.greet();
    d.greet("reader");

    // Alias the derived instance through a base class reference
    const b: Base = d;
    // No problem
    b.greet();
  }

  {
    class Base {
      greet() {
        console.log("Hello, world!");
      }
    }
    
    class Derived extends Base {
      // Make this parameter required
      greet(name: string) {
    // Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'.
    //   Type '(name: string) => void' is not assignable to type '() => void'.
    //     Target signature provides too few arguments. Expected 1 or more, but got 0.
        console.log(`Hello, ${name.toUpperCase()}`);
      }
    }

    const b: Base = new Derived();
    // Crashes because "name" will be undefined
    b.greet();
  }
  
  {
    interface Animal {
      dateOfBirth: any;
    }
    
    interface Dog extends Animal {
      breed: any;
    }
    
    class AnimalHouse {
      resident: Animal;
      constructor(animal: Animal) {
        this.resident = animal;
      }
    }
    
    class DogHouse extends AnimalHouse {
      // Does not emit JavaScript code,
      // only ensures the types are correct
      declare resident: Dog;
      constructor(dog: Dog) {
        super(dog);
      }
    }
  }
  
  {
    class Base {
      name = "base";
      constructor() {
        console.log("My name is " + this.name);
      }
    }
    
    class Derived extends Base {
      name = "derived";
    }
    
    // Prints "base", not "derived"
    const d = new Derived();
  }

  {
    class MsgError extends Error {
      constructor(m: string) {
        super(m);
      }
      sayHello() {
        return "hello " + this.message;
      }
    }
  }
  
  {
    class MsgError extends Error {
      constructor(m: string) {
        super(m);
    
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, MsgError.prototype);
      }
    
      sayHello() {
        return "hello " + this.message;
      }
    }
  }
  
  {
    class Greeter {
      public greet() {
        console.log("hi!");
      }
    }
    const g = new Greeter();
    g.greet();
  }

  {
    class Greeter {
      public greet() {
        console.log("Hello, " + this.getName());
      }
      protected getName() {
        return "hi";
      }
    }
    
    class SpecialGreeter extends Greeter {
      public howdy() {
        // OK to access protected member here
        console.log("Howdy, " + this.getName());
      }
    }
    const g = new SpecialGreeter();
    g.greet(); // OK
    g.getName();
    //Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.
  }
  
  {
    class Base {
      protected m = 10;
    }
    class Derived extends Base {
      // No modifier, so default is 'public'
      m = 15;
    }
    const d = new Derived();
    console.log(d.m); // OK
  }

  {
    class Base {
      protected x: number = 1;
    }
    class Derived1 extends Base {
      protected x: number = 5;
    }
    class Derived2 extends Base {
      f1(other: Derived2) {
        other.x = 10;
      }
      f2(other: Derived1) {
        other.x = 10;
    //Property 'x' is protected and only accessible within class 'Derived1' and its subclasses.
      }
    }
  }
  
  {
    class Base {
      private x = 0;
    }
    const b = new Base();
    // Can't access from outside the class
    console.log(b.x);
    //Property 'x' is private and only accessible within class 'Base'.
  }

  {
    class Derived extends Base {
      showX() {
        // Can't access in subclasses
        console.log(this.x);
    //Property 'x' is private and only accessible within class 'Base'.
      }
    }
  }
  
  {
    class Base {
      private x = 0;
    }
    class Derived extends Base {
    // Class 'Derived' incorrectly extends base class 'Base'.
    //   Property 'x' is private in type 'Base' but not in type 'Derived'.
      x = 1;
    }
  }

  {
    class A {
      private x = 10;
    
      public sameAs(other: A) {
        // No error
        return other.x === this.x;
      }
    }
  }

  {
    class MySafe {
      private secretKey = 12345;

    }
    // In a JavaScript file...
    const s = new MySafe();
    // Will print 12345
    console.log(s.secretKey);
  }
    
  {
    class MySafe {
      private secretKey = 12345;
    }
    
    const s = new MySafe();
    
    // Not allowed during type checking
    console.log(s.secretKey);
    //Property 'secretKey' is private and only accessible within class 'MySafe'.
    
    // OK
    console.log(s["secretKey"]);
  }

  {
    class Dog {
      #barkAmount = 0;
      personality = "happy";
    
      constructor() {}
    }
  }
  
  {
    "use strict";
    class Dog {
        #barkAmount = 0;
        personality = "happy";
        constructor() { }
    }
  }
  
  {
    "use strict";
    var _Dog_barkAmount;
    class Dog {
        constructor() {
            _Dog_barkAmount.set(this, 0);
            this.personality = "happy";
        }
    }
    _Dog_barkAmount = new WeakMap();
  }
  
  {
    class MyClass {
      static x = 0;
      static printX() {
        console.log(MyClass.x);
      }
    }
    console.log(MyClass.x);
    MyClass.printX();
  }
  
  {
    class MyClass {
      private static x = 0;
    }
    console.log(MyClass.x);
    //Property 'x' is private and only accessible within class 'MyClass'.
  }
  
  {
    class Base {
      static getGreeting() {
        return "Hello world";
      }
    }
    class Derived extends Base {
      myGreeting = Derived.getGreeting();
    }
  }
  
  {
    class S {
      static name = "S!";
    //Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.
    }
  }
  
  {
    // Unnecessary "static" class
    class MyStaticClass {
      static doSomething() {}
    }
    
    // Preferred (alternative 1)
    function doSomething() {}
    
    // Preferred (alternative 2)
    const MyHelperObject = {
      dosomething() {},
    };
  }
  
  {
    class Foo {
        static #count = 0;
    
        get count() {
            return Foo.#count;
        }
    
        static {
            try {
                const lastInstances = loadLastInstances();
                Foo.#count += lastInstances.length;
            }
            catch {}
        }
    }
  }
  
  {
    class Box<Type> {
      contents: Type;
      constructor(value: Type) {
        this.contents = value;
      }
    }
    
    const b = new Box("hello!");
        
    //const b: Box<string>
  }
  
  {
    class Box<Type> {
      static defaultValue: Type;
    //Static members cannot reference class type parameters.
    }
  }
  
  {
    class MyClass {
      name = "MyClass";
      getName() {
        return this.name;
      }
    }
    const c = new MyClass();
    const obj = {
      name: "obj",
      getName: c.getName,
    };
    
    // Prints "obj", not "MyClass"
    console.log(obj.getName());
  }
  
  {
    class MyClass {
      name = "MyClass";
      getName = () => {
        return this.name;
      };
    }
    const c = new MyClass();
    const g = c.getName;
    // Prints "MyClass" instead of crashing
    console.log(g());
  }
  
  {
    // TypeScript input with 'this' parameter
    function fn(this: SomeType, x: number) {
      /* ... */
    }
  }
  
  {
    // JavaScript output
    function fn(x) {
      /* ... */
    }
  }
  
  {
    class MyClass {
      name = "MyClass";
      getName(this: MyClass) {
        return this.name;
      }
    }
    const c = new MyClass();
    // OK
    c.getName();
    
    // Error, would crash
    const g = c.getName;
    console.log(g());
    //The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.
  }
  
  {
    class Box {
      contents: string = "";
      set(value: string) {
      
      //(method) Box.set(value: string): this
        this.contents = value;
        return this;
      }
    }
  }
  
  {
    class ClearableBox extends Box {
      clear() {
        this.contents = "";
      }
    }
    
    const a = new ClearableBox();
    const b = a.set("hello");
        
    //const b: ClearableBox
  }
  
  {
    class Box {
      content: string = "";
      sameAs(other: this) {
        return other.content === this.content;
      }
    }
    
    class DerivedBox extends Box {
      otherContent: string = "?";
    }
    
    const base = new Box();
    const derived = new DerivedBox();
    derived.sameAs(base);
    // Argument of type 'Box' is not assignable to parameter of type 'DerivedBox'.
    //   Property 'otherContent' is missing in type 'Box' but required in type 'DerivedBox'.
  }
  
  {
    class FileSystemObject {
      isFile(): this is FileRep {
        return this instanceof FileRep;
      }
      isDirectory(): this is Directory {
        return this instanceof Directory;
      }
      isNetworked(): this is Networked & this {
        return this.networked;
      }
      constructor(public path: string, private networked: boolean) {}
    }
    
    class FileRep extends FileSystemObject {
      constructor(path: string, public content: string) {
        super(path, false);
      }
    }
    
    class Directory extends FileSystemObject {
      children: FileSystemObject[];
    }
    
    interface Networked {
      host: string;
    }
    
    const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");
    
    if (fso.isFile()) {
      fso.content;
      
    //const fso: FileRep
    } else if (fso.isDirectory()) {
      //fso.children;
      
    //const fso: Directory
    } else if (fso.isNetworked()) {
      //fso.host;
      
    //const fso: Networked & FileSystemObject
    }
  }
  
  {
    class Box<T> {
      value?: T;
    
      hasValue(): this is { value: T } {
        return this.value !== undefined;
      }
    }
    
    const box = new Box<string>();
    box.value = "Gameboy";
    
    box.value;
        
    //(property) Box<string>.value?: string
    
    if (box.hasValue()) {
      box.value;
          
    //(property) value: string
    }
  }
  
  {
    class Params {
      constructor(
        public readonly x: number,
        protected y: number,
        private z: number
      ) {
        // No body necessary
      }
    }
    const a = new Params(1, 2, 3);
    console.log(a.x);
                
    //(property) Params.x: number
    console.log(a.z);
    //Property 'z' is private and only accessible within class 'Params'.
  }
  
  {
    const someClass = class<Type> {
      content: Type;
      constructor(value: Type) {
        this.content = value;
      }
    };
    
    const m = new someClass("Hello, world");
        
    //const m: someClass<string>
  }
  
  {
    class Point {
      createdAt: number;
      x: number;
      y: number
      constructor(x: number, y: number) {
        this.createdAt = Date.now()
        this.x = x;
        this.y = y;
      }
    }
    type PointInstance = InstanceType<typeof Point>
    
    function moveRight(point: PointInstance) {
      point.x += 5;
    }
    
    const point = new Point(3, 4);
    moveRight(point);
    point.x; // => 8
  }
  
  {
    abstract class Base {
      abstract getName(): string;
    
      printName() {
        console.log("Hello, " + this.getName());
      }
    }
    
    const b = new Base();
    //Cannot create an instance of an abstract class.
  }
  
  {
    class Derived extends Base {
      getName() {
        return "world";
      }
    }
    
    const d = new Derived();
    d.printName();
  }
  
  {
    class Derived extends Base {
    //Non-abstract class 'Derived' does not implement inherited abstract member getName from class 'Base'.
      // forgot to do anything
    }
  }
  
  {
    function greet(ctor: typeof Base) {
      const instance = new ctor();
    //Cannot create an instance of an abstract class.
      instance.printName();
    }
    // Bad!
    greet(Base);
  }
  
  {
    function greet(ctor: new () => Base) {
      const instance = new ctor();
      instance.printName();
    }
    greet(Derived);
    greet(Base);
    // Argument of type 'typeof Base' is not assignable to parameter of type 'new () => Base'.
    //   Cannot assign an abstract constructor type to a non-abstract constructor type.
  }
  
  {
    class Point1 {
      x = 0;
      y = 0;
    }
    
    class Point2 {
      x = 0;
      y = 0;
    }
    
    // OK
    const p: Point1 = new Point2();
  }
    
  {
    class Person {
      name: string;
      age: number;
    }
    
    class Employee {
      name: string;
      age: number;
      salary: number;
    }
    
    // OK
    const p: Person = new Employee();
  }
    
  {
    class Empty {}
 
    function fn(x: Empty) {
      // can't do anything with 'x', so I won't
    }
    
    // All OK!
    fn(window);
    fn({});
    fn(fn);
  }

};

const templateLiteralTypes = () => {
  {
    type World = "world";
 
    type Greeting = `hello ${World}`;
            
    //type Greeting = "hello world"
  }

  {
    type EmailLocaleIDs = "welcome_email" | "email_heading";
    type FooterLocaleIDs = "footer_title" | "footer_sendoff";
    
    type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
              
    //type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"
  }

  {
    type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
    type Lang = "en" | "ja" | "pt";
    
    type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
  }

  {
    const passedObject = {
      firstName: "Saoirse",
      lastName: "Ronan",
      age: 26,
    };
  }

  {
    const person = makeWatchedObject({
      firstName: "Saoirse",
      lastName: "Ronan",
      age: 26,
    });
    
    // makeWatchedObject has added `on` to the anonymous Object
    
    person.on("firstNameChanged", (newValue) => {
      console.log(`firstName was changed to ${newValue}!`);
    });
  }

  {
    type PropEventSource<Type> = {
        on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
    };
    
    /// Create a "watched object" with an `on` method
    /// so that you can watch for changes to properties.
    declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;
  }
  
  {
    const person = makeWatchedObject({
      firstName: "Saoirse",
      lastName: "Ronan",
      age: 26
    });
    
    person.on("firstNameChanged", () => {});
    
    // Prevent easy human error (using the key instead of the event name)
    person.on("firstName", () => {});
    //Argument of type '"firstName"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.
    
    // It's typo-resistant
    person.on("frstNameChanged", () => {});
    //Argument of type '"frstNameChanged"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.
  }
  
  {
    type PropEventSource<Type> = {
        on<Key extends string & keyof Type>
            (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
    };
    
    declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;
    
    const person = makeWatchedObject({
      firstName: "Saoirse",
      lastName: "Ronan",
      age: 26
    });
    
    person.on("firstNameChanged", newName => {
                                    
        //(parameter) newName: string
        console.log(`new name is ${newName.toUpperCase()}`);
    });
    
    person.on("ageChanged", newAge => {
                              
        //(parameter) newAge: number
        if (newAge < 0) {
            console.warn("warning! negative age");
        }
    })
  }
  
  {
    type Greeting = "Hello, world"
    type ShoutyGreeting = Uppercase<Greeting>
              
    type ShoutyGreeting = "HELLO, WORLD"
    
    type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
    type MainID = ASCIICacheKey<"my_app">
          
    //type MainID = "ID-MY_APP"
  }

  {
    type Greeting = "Hello, world"
    type QuietGreeting = Lowercase<Greeting>
              
    //type QuietGreeting = "hello, world"
    
    type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`
    type MainID = ASCIICacheKey<"MY_APP">
          
    //type MainID = "id-my_app"
  }

  {
    type LowercaseGreeting = "hello, world";
    type Greeting = Capitalize<LowercaseGreeting>;
            
    //type Greeting = "Hello, world"
  }

  {
    type UppercaseGreeting = "HELLO WORLD";
    type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
                  
    //type UncomfortableGreeting = "hELLO WORLD"
  }

};

const mappedTypes = () => {
  {
    type OnlyBoolsAndHorses = {
      [key: string]: boolean | Horse;
    };
    
    const conforms: OnlyBoolsAndHorses = {
      del: true,
      rodney: false,
    };
  }

  {
    type OptionsFlags<Type> = {
      [Property in keyof Type]: boolean;
    };
  }
  
  {
    type Features = {
      darkMode: () => void;
      newUserProfile: () => void;
    };
    
    type FeatureOptions = OptionsFlags<Features>;
    /*
    type FeatureOptions = {
      darkMode: boolean;
      newUserProfile: boolean;
    }
    */
  }
  
  {
    // Removes 'optional' attributes from a type's properties
    type Concrete<Type> = {
      [Property in keyof Type]-?: Type[Property];
    };
    
    type MaybeUser = {
      id: string;
      name?: string;
      age?: number;
    };
    
    type User = Concrete<MaybeUser>;
    /*    
    type User = {
        id: string;
        name: string;
        age: number;
    }
    */
  }
  
  {
    type MappedTypeWithNewProperties<Type> = {
        [Properties in keyof Type as NewKeyType]: Type[Properties]
    }
  }

  {
    type Getters<Type> = {
        [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
    };
    
    interface Person {
        name: string;
        age: number;
        location: string;
    }
    
    type LazyPerson = Getters<Person>;
    /*    
    type LazyPerson = {
        getName: () => string;
        getAge: () => number;
        getLocation: () => string;
    }
    */
  }

  {
    // Remove the 'kind' property
    type RemoveKindField<Type> = {
        [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
    };
    
    interface Circle {
        kind: "circle";
        radius: number;
    }
    
    type KindlessCircle = RemoveKindField<Circle>;
    /*        
    type KindlessCircle = {
        radius: number;
    }
    */
  }

  {
    type EventConfig<Events extends { kind: string }> = {
        [E in Events as E["kind"]]: (event: E) => void;
    }
    
    type SquareEvent = { kind: "square", x: number, y: number };
    type CircleEvent = { kind: "circle", radius: number };
    
    type Config = EventConfig<SquareEvent | CircleEvent>
    /*   
    type Config = {
        square: (event: SquareEvent) => void;
        circle: (event: CircleEvent) => void;
    }
    */
  }

  {
    type ExtractPII<Type> = {
      [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
    };
    
    type DBFields = {
      id: { format: "incrementing" };
      name: { type: string; pii: true };
    };
    
    type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
     
    /*
    type ObjectsNeedingGDPRDeletion = {
        id: false;
        name: true;
    }
    */
  }
};

const conditionalTypes = () => {
  {
    interface Animal {
      live(): void;
    }
    interface Dog extends Animal {
      woof(): void;
    }
    
    type Example1 = Dog extends Animal ? number : string;
            
    //type Example1 = number
    
    type Example2 = RegExp extends Animal ? number : string;
            
    //type Example2 = string
  }
  
  {
    interface IdLabel {
      id: number /* some fields */;
    }
    interface NameLabel {
      name: string /* other fields */;
    }
    
    function createLabel(id: number): IdLabel;
    function createLabel(name: string): NameLabel;
    function createLabel(nameOrId: string | number): IdLabel | NameLabel;
    function createLabel(nameOrId: string | number): IdLabel | NameLabel {
      throw "unimplemented";
    }
  }
  
  {
    type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;
  }
  
  {
    function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
      throw "unimplemented";
    }
    
    let a = createLabel("typescript");
      
    //let a: NameLabel
    
    let b = createLabel(2.8);
      
    //let b: IdLabel
    
    let c = createLabel(Math.random() ? "hello" : 42);
    //let c: NameLabel | IdLabel
  }
  
  {
    type MessageOf<T> = T["message"];
    //Type '"message"' cannot be used to index type 'T'.
  }
  
  {
    type MessageOf<T extends { message: unknown }> = T["message"];
 
    interface Email {
      message: string;
    }
    
    type EmailMessageContents = MessageOf<Email>;         
    //type EmailMessageContents = string
  }
  
  {
    type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
 
    interface Email {
      message: string;
    }
    
    interface Dog {
      bark(): void;
    }
    
    type EmailMessageContents = MessageOf<Email>;
                  
    //type EmailMessageContents = string
    
    type DogMessageContents = MessageOf<Dog>;
                
    //type DogMessageContents = never
  }
  
  {
    type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
  }
  
  {
    type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
      ? Return
      : never;
    
    type Num = GetReturnType<() => number>;
        
    type Num = number
    
    type Str = GetReturnType<(x: string) => string>;
        
    //type Str = string
    
    type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
          
    //type Bools = boolean[]
  }
  
  {
    declare function stringOrNum(x: string): number;
    declare function stringOrNum(x: number): string;
    declare function stringOrNum(x: string | number): string | number;
    
    type T1 = ReturnType<typeof stringOrNum>;
        
    //type T1 = string | number
  }

  {
    type ToArray<Type> = Type extends any ? Type[] : never;
  }
  
  {
    type ToArray<Type> = Type extends any ? Type[] : never;
 
    type StrArrOrNumArr = ToArray<string | number>;
              
    //type StrArrOrNumArr = string[] | number[]
  }
  
  {
    type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
 
    // 'ArrOfStrOrNum' is no longer a union.
    type ArrOfStrOrNum = ToArrayNonDist<string | number>;
              
    //type ArrOfStrOrNum = (string | number)[]
  }
};

const indexedAccessTypes = () => {
  {
    type Person = { age: number; name: string; alive: boolean };
    type Age = Person["age"];
    //type Age = number
  }
  
  {
    type I1 = Person["age" | "name"];
     
    //type I1 = string | number
    
    type I2 = Person[keyof Person];
        
    //type I2 = string | number | boolean
    
    type AliveOrName = "alive" | "name";
    type I3 = Person[AliveOrName];
        
    //type I3 = string | boolean
  }

  {
    type I1 = Person["alve"];
    //Property 'alve' does not exist on type 'Person'.
  }

  {
    const MyArray = [
      { name: "Alice", age: 15 },
      { name: "Bob", age: 23 },
      { name: "Eve", age: 38 },
    ];
    
    type Person = typeof MyArray[number];
          
    type Person = {
        name: string;
        age: number;
    }

    type Age = typeof MyArray[number]["age"];
        
    //type Age = number
    // Or
    type Age2 = Person["age"];
          
    //type Age2 = number
  }

  {
    const key = "age";
    type Age = Person[key];
    // Type 'key' cannot be used as an index type.
    // 'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'?
  }

  {
    type key = "age";
    type Age = Person[key];
  }
};

const typeofOperator = () => {
  
  {
    // Prints "string"
    console.log(typeof "Hello world");
  }
  
  {
    let s = "hello";
    let n: typeof s;
    //let n: string
  }
  
  {
    type Predicate = (x: unknown) => boolean;
    type K = ReturnType<Predicate>;
    //type K = boolean
  }
  
  {
    function f() {
      return { x: 10, y: 3 };
    }
    type P = ReturnType<f>;
    //'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?
  }
  
  {
    function f() {
      return { x: 10, y: 3 };
    }
    type P = ReturnType<typeof f>;
        
    type P = {
        x: number;
        y: number;
    }
  }
  
  {
    // Meant to use = ReturnType<typeof msgbox>
    //let shouldContinue: typeof msgbox("Are you sure you want to continue?");
    //',' expected.
  }
};

const keyofTypeOperator = () => {
  {
    type Point = { x: number; y: number };
    type P = keyof Point; 
    //type P = keyof Point
  }

  {
    type Arrayish = { [n: number]: unknown };
    type A = keyof Arrayish;
    //type A = number
    type Mapish = { [k: string]: boolean };
    type M = keyof Mapish;
    //type M = string | number
  }
  
};

const generics = () => {

  function identity(arg: number): number {
    return arg;
  }

  function identity(arg: any): any {
    return arg;
  }

  function identity<Type>(arg: Type): Type {
    return arg;
  }

  let output = identity<string>("myString");
  //let output: string

  //let output = identity("myString");
  //let output: string

  function identity<Type>(arg: Type): Type {
    return arg;
  }

  function loggingIdentity<Type>(arg: Type): Type {
    console.log(arg.length);
    //Property 'length' does not exist on type 'Type'.
    return arg;
  }

  function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
  }

  function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
  }

  function identity<Type>(arg: Type): Type {
    return arg;
  }
  
  //let myIdentity: <Type>(arg: Type) => Type = identity;

  function identity<Type>(arg: Type): Type {
    return arg;
  }
  
  //let myIdentity: <Input>(arg: Input) => Input = identity;

  function identity<Type>(arg: Type): Type {
    return arg;
  }
  
  let myIdentity: { <Type>(arg: Type): Type } = identity;

  {
    interface GenericIdentityFn {
      <Type>(arg: Type): Type;
    }
    
    function identity<Type>(arg: Type): Type {
      return arg;
    }
    
    let myIdentity: GenericIdentityFn = identity;
  }

  {
    interface GenericIdentityFn<Type> {
      (arg: Type): Type;
    }
    
    function identity<Type>(arg: Type): Type {
      return arg;
    }
    
    let myIdentity: GenericIdentityFn<number> = identity;
  }

  {
    class GenericNumber<NumType> {
      zeroValue: NumType;
      add: (x: NumType, y: NumType) => NumType;
    }
    
    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) {
      return x + y;
    };
  }

  {
    let stringNumeric = new GenericNumber<string>();
    stringNumeric.zeroValue = "";
    stringNumeric.add = function (x, y) {
      return x + y;
    };
    
    console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
  }

  {
    function loggingIdentity<Type>(arg: Type): Type {
      console.log(arg.length);
      //Property 'length' does not exist on type 'Type'.
      return arg;
    }

    loggingIdentity(3);
    loggingIdentity({ length: 10, value: 3 });
  }

  {
    function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
      return obj[key];
    }
    
    let x = { a: 1, b: 2, c: 3, d: 4 };
    
    getProperty(x, "a");
    getProperty(x, "m");
    //Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
  }

  {
    function create<Type>(c: { new (): Type }): Type {
      return new c();
    }
  }

  {
    class BeeKeeper {
      hasMask: boolean = true;
    }
    
    class ZooKeeper {
      nametag: string = "Mikle";
    }
    
    class Animal {
      numLegs: number = 4;
    }
    
    class Bee extends Animal {
      numLegs = 6;
      keeper: BeeKeeper = new BeeKeeper();
    }
    
    class Lion extends Animal {
      keeper: ZooKeeper = new ZooKeeper();
    }
    
    function createInstance<A extends Animal>(c: new () => A): A {
      return new c();
    }
    
    createInstance(Lion).keeper.nametag;
    createInstance(Bee).keeper.hasMask;
  }

  {
    declare function create(): Container<HTMLDivElement, HTMLDivElement[]>;
    declare function create<T extends HTMLElement>(element: T): Container<T, T[]>;
    declare function create<T extends HTMLElement, U extends HTMLElement>(
      element: T,
      children: U[]
    ): Container<T, U[]>;
  }

  {
    declare function create<T extends HTMLElement = HTMLDivElement, U extends HTMLElement[] = T[]>(
      element?: T,
      children?: U
    ): Container<T, U>;
    
    const div = create();
          
    //const div: Container<HTMLDivElement, HTMLDivElement[]>
    
    const p = create(new HTMLParagraphElement());
        
    //const p: Container<HTMLParagraphElement, HTMLParagraphElement[]>
  }

  {
    interface Producer<T> {
      make(): T;
    }
  }

  {
    interface Consumer<T> {
      consume: (arg: T) => void;
    }
  }

  {
    interface AnimalProducer {
      make(): Animal;
    }
    // A CatProducer can be used anywhere an
    // Animal producer is expected
    interface CatProducer {
      make(): Cat;
    }
  }

  {
    // Contravariant annotation
    interface Consumer<in T> {
      consume: (arg: T) => void;
    }
    // Covariant annotation
    interface Producer<out T> {
      make(): T;
    }
    // Invariant annotation
    interface ProducerConsumer<in out T> {
      consume: (arg: T) => void;
      make(): T;
    }
  }

  {
    // DON'T DO THIS - variance annotation
    // does not match structural behavior
    interface Producer<in out T> {
      make(): T;
    }
    // Not a type error -- this is a structural
    // comparison, so variance annotations are
    // not in effect
    const p: Producer<string | number> = {
        make(): number {
            return 42;
        }
    }
  }

  {
    // Error, this interface is definitely contravariant on T
    interface Foo<out T> {
      consume: (arg: T) => void;
    }
  }

};

const objectTypes = () => {
  function greet(person: { name: string; age: number }) {
    return "Hello " + person.name;
  }

  interface Person {
    name: string;
    age: number;
  }
  
  function greet(person: Person) {
    return "Hello " + person.name;
  }

  type Person = {
    name: string;
    age: number;
  };
  
  function greet(person: Person) {
    return "Hello " + person.name;
  }

  interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
  }
  
  function paintShape(opts: PaintOptions) {
    // ...
  }
  
  /*
  const shape = getShape();
  paintShape({ shape });
  paintShape({ shape, xPos: 100 });
  paintShape({ shape, yPos: 100 });
  paintShape({ shape, xPos: 100, yPos: 100 });
  */

  function paintShape(opts: PaintOptions) {
    let xPos = opts.xPos;
                    
    //(property) PaintOptions.xPos?: number | undefined
    let yPos = opts.yPos;
                    
    //(property) PaintOptions.yPos?: number | undefined
    // ...
  }

  function paintShape(opts: PaintOptions) {
    let xPos = opts.xPos === undefined ? 0 : opts.xPos;
        
    //let xPos: number
    let yPos = opts.yPos === undefined ? 0 : opts.yPos;
        
    //let yPos: number
    // ...
  }

  interface SomeType {
    readonly prop: string;
  }
  
  function doSomething(obj: SomeType) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
  
    // But we can't re-assign it.
    obj.prop = "hello";
    //Cannot assign to 'prop' because it is a read-only property.
  }

  interface Home {
    readonly resident: { name: string; age: number };
  }
  
  function visitForBirthday(home: Home) {
    // We can read and update properties from 'home.resident'.
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
  }
  
  function evict(home: Home) {
    // But we can't write to the 'resident' property itself on a 'Home'.
    home.resident = {
      //Cannot assign to 'resident' because it is a read-only property.
      name: "Victor the Evictor",
      age: 42,
    };
  }

  interface Person {
    name: string;
    age: number;
  }
  
  interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
  }
  
  let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
  };
  
  // works
  let readonlyPerson: ReadonlyPerson = writablePerson;
  
  console.log(readonlyPerson.age); // prints '42'
  writablePerson.age++;
  console.log(readonlyPerson.age); // prints '43'

  interface StringArray {
    [index: number]: string;
  }
  
  // const myArray: StringArray = getStringArray();
  // const secondItem = myArray[1];

  interface NumberDictionary {
    [index: string]: number;
  
    length: number; // ok
    name: string;
    //Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
  }

  interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
  }

  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }
  
  // let myArray: ReadonlyStringArray = getReadOnlyStringArray();
  // myArray[2] = "Mallory";
  //Index signature in type 'ReadonlyStringArray' only permits reading.

  interface SquareConfig {
    color?: string;
    width?: number;
  }
  
  function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
      color: config.color || "red",
      area: config.width ? config.width * config.width : 20,
    };
  }
  
  //let mySquare = createSquare({ colour: "red", width: 100 });
  //Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?

  //let mySquare = createSquare({ colour: "red", width: 100 });
  //Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?

  let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

  interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: unknown;
  }

  let squareOptions = { colour: "red", width: 100 };
  //let mySquare = createSquare(squareOptions);

  // let squareOptions = { colour: "red" };
  // let mySquare = createSquare(squareOptions);
  //Type '{ colour: string; }' has no properties in common with type 'SquareConfig'.

  interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }

  interface AddressWithUnit {
    name?: string;
    unit: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }

  interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }
 
  interface AddressWithUnit extends BasicAddress {
    unit: string;
  }

  interface Colorful {
    color: string;
  }
  
  interface Circle {
    radius: number;
  }
  
  interface ColorfulCircle extends Colorful, Circle {}
  
  const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
  };

  interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }
  
  type ColorfulCircle = Colorful & Circle;

  function draw(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
  }
  
  // okay
  draw({ color: "blue", radius: 42 });
  
  // oops
  draw({ color: "red", raidus: 42 });
  //Object literal may only specify known properties, but 'raidus' does not exist in type 'Colorful & Circle'. Did you mean to write 'radius'?

  interface Person {
    name: string;
  }
  interface Person {
    name: number;
  }

  interface Person1 {
    name: string;
  }
  
  interface Person2 {
    name: number;
  }
  
  type Staff = Person1 & Person2
  
  // declare const staffer: Staff;
  // staffer.name;
          
  //(property) name: never

  interface Box {
    contents: any;
  }

  interface Box {
    contents: unknown;
  }
  
  let x: Box = {
    contents: "hello world",
  };
  
  // we could check 'x.contents'
  if (typeof x.contents === "string") {
    console.log(x.contents.toLowerCase());
  }
  
  // or we could use a type assertion
  console.log((x.contents as string).toLowerCase());

  interface NumberBox {
    contents: number;
  }
  
  interface StringBox {
    contents: string;
  }
  
  interface BooleanBox {
    contents: boolean;
  }

  function setContents(box: StringBox, newContents: string): void;
  function setContents(box: NumberBox, newContents: number): void;
  function setContents(box: BooleanBox, newContents: boolean): void;
  function setContents(box: { contents: any }, newContents: any) {
    box.contents = newContents;
  }

  interface Box<Type> {
    contents: Type;
  }

  let box: Box<string>;

  interface Box<Type> {
    contents: Type;
  }
  interface StringBox {
    contents: string;
  }
  
  let boxA: Box<string> = { contents: "hello" };
  boxA.contents;
          
  //(property) Box<string>.contents: string
  
  let boxB: StringBox = { contents: "world" };
  boxB.contents;
          
  //(property) StringBox.contents: string

  interface Box<Type> {
    contents: Type;
  }
  
  interface Apple {
    // ....
  }
  
  // Same as '{ contents: Apple }'.
  type AppleBox = Box<Apple>;

  function setContents<Type>(box: Box<Type>, newContents: Type) {
    box.contents = newContents;
  }

  interface Box<Type> {
    contents: Type;
  }

  type Box<Type> = {
    contents: Type;
  };

  type OrNull<Type> = Type | null;
  
  type OneOrMany<Type> = Type | Type[];
  
  type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
            
  type OneOrManyOrNull<Type> = OneOrMany<Type> | null
  
  type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
                
  type OneOrManyOrNullStrings = OneOrMany<string> | null;

  function doSomething(value: Array<string>) {
    // ...
  }
  
  let myArray: string[] = ["hello", "world"];
  
  // either of these work!
  doSomething(myArray);
  doSomething(new Array("hello", "world"));

  interface Array<Type> {
    /**
     * Gets or sets the length of the array.
     */
    length: number;
  
    /**
     * Removes the last element from an array and returns it.
     */
    pop(): Type | undefined;
  
    /**
     * Appends new elements to an array, and returns the new length of the array.
     */
    push(...items: Type[]): number;
  
    // ...
  }

  function doStuff(values: ReadonlyArray<string>) {
    // We can read from 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);
  
    // ...but we can't mutate 'values'.
    values.push("hello!");
    //Property 'push' does not exist on type 'readonly string[]'.
  }

  //new ReadonlyArray("red", "green", "blue");
  //'ReadonlyArray' only refers to a type, but is being used as a value here.

  const roArray: ReadonlyArray<string> = ["red", "green", "blue"];

  function doStuff(values: readonly string[]) {
    // We can read from 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);
  
    // ...but we can't mutate 'values'.
    values.push("hello!");
    //Property 'push' does not exist on type 'readonly string[]'.
  }

  // let x: readonly string[] = [];
  // let y: string[] = [];
  
  // x = y;
  // y = x;
  //The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'.

  type StringNumberPair = [string, number];

  /*
  function doSomething(pair: [string, number]) {
    const a = pair[0];
        
    const a: string
    const b = pair[1];
          
    const b: number
    // ...
  }
  
  doSomething(["hello", 42]);
  */

  function doSomething(pair: [string, number]) {
    // ...
  
    const c = pair[2];
    //Tuple type '[string, number]' of length '2' has no element at index '2'.
  }

  function doSomething(stringHash: [string, number]) {
    const [inputString, hash] = stringHash;
  
    console.log(inputString);
                    
    //const inputString: string
  
    console.log(hash);
                
    //const hash: number
  }

  interface StringNumberPair {
    // specialized properties
    length: 2;
    0: string;
    1: number;
  
    // Other 'Array<string | number>' members...
    slice(start?: number, end?: number): Array<string | number>;
  }

  type Either2dOr3d = [number, number, number?];
  
  function setCoordinate(coord: Either2dOr3d) {
    const [x, y, z] = coord;
                
    //const z: number | undefined
  
    console.log(`Provided coordinates had ${coord.length} dimensions`);
                                                    
    //(property) length: 2 | 3
  }

  type StringNumberBooleans = [string, number, ...boolean[]];
  type StringBooleansNumber = [string, ...boolean[], number];
  type BooleansStringNumber = [...boolean[], string, number];

  const a: StringNumberBooleans = ["hello", 1];
  const b: StringNumberBooleans = ["beautiful", 2, true];
  const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];

  function readButtonInput(...args: [string, number, ...boolean[]]) {
    const [name, version, ...input] = args;
    // ...
  }

  function readButtonInput(name: string, version: number, ...input: boolean[]) {
    // ...
  }

  function doSomething(pair: readonly [string, number]) {
    // ...
  }

  function doSomething(pair: readonly [string, number]) {
    pair[0] = "hello!";
    //Cannot assign to '0' because it is a read-only property.
  }

  let point = [3, 4] as const;
 
  function distanceFromOrigin([x, y]: [number, number]) {
    return Math.sqrt(x ** 2 + y ** 2);
  }
  
  distanceFromOrigin(point);
  // Argument of type 'readonly [3, 4]' is not assignable to parameter of type '[number, number]'.
  // The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to the mutable type '[number, number]'.




  
};
objectTypes();

const moreOnFunctions = () => {
  function greeter(fn: (a: string) => void) {
    fn("Hello, World");
  }
  
  function printToConsole(s: string) {
    console.log(s);
  }
  
  greeter(printToConsole);

  type GreetFunction = (a: string) => void;
  function greeter(fn: GreetFunction) {
    // ...
  }

  type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }
  
  function myFunc(someArg: number) {
    return someArg > 3;
  }
  myFunc.description = "default description";
  
  doSomething(myFunc);

  type SomeConstructor = {
    new (s: string): SomeObject;
  };
  function fn(ctor: SomeConstructor) {
    return new ctor("hello");
  }

  interface CallOrConstruct {
    (n?: number): string;
    new (s: string): Date;
  }
  
  function fn(ctor: CallOrConstruct) {
    // Passing an argument of type `number` to `ctor` matches it against
    // the first definition in the `CallOrConstruct` interface.
    console.log(ctor(10));
                
    //(parameter) ctor: CallOrConstruct
    (n?: number) => string
    
      // Similarly, passing an argument of type `string` to `ctor` matches it
      // against the second definition in the `CallOrConstruct` interface.
      console.log(new ctor("10"));
                      
    //(parameter) ctor: CallOrConstruct
    //new (s: string) => Date
  }
  
  fn(Date);

  function firstElement(arr: any[]) {
    return arr[0];
  }

  function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
  }

  // s is of type 'string'
  const s = firstElement(["a", "b", "c"]);
  // n is of type 'number'
  const n = firstElement([1, 2, 3]);
  // u is of type undefined
  const u = firstElement([]);

  function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
  }
  
  // Parameter 'n' is of type 'string'
  // 'parsed' is of type 'number[]'
  const parsed = map(["1", "2", "3"], (n) => parseInt(n));

  function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }
  
  // longerArray is of type 'number[]'
  const longerArray = longest([1, 2], [1, 2, 3]);
  // longerString is of type 'alice' | 'bob'
  const longerString = longest("alice", "bob");
  // Error! Numbers don't have a 'length' property
  const notOK = longest(10, 100);

  function minimumLength<Type extends { length: number }>(
    obj: Type,
    minimum: number
  ): Type {
    if (obj.length >= minimum) {
      return obj;
    } else {
      return { length: minimum };
      // Type '{ length: number; }' is not assignable to type 'Type'.
      //   '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
    }
  }

  // 'arr' gets value { length: 6 }
  const arr = minimumLength([1, 2, 3], 6);
  // and crashes here because arrays have
  // a 'slice' method, but not the returned object!
  console.log(arr.slice(0));

  function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
  }

  //const arr = combine([1, 2, 3], ["hello"]);
  //Type 'string' is not assignable to type 'number'.

  //const arr = combine<string | number>([1, 2, 3], ["hello"]);

  function firstElement1<Type>(arr: Type[]) {
    return arr[0];
  }
  
  function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
  }
  
  // a: number (good)
  const a = firstElement1([1, 2, 3]);
  // b: any (bad)
  const b = firstElement2([1, 2, 3]);

  function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
  }
  
  function filter2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
  ): Type[] {
    return arr.filter(func);
  }

  function greet<Str extends string>(s: Str) {
    console.log("Hello, " + s);
  }
  
  greet("world");

  function greet(s: string) {
    console.log("Hello, " + s);
  }

  function f(n: number) {
    console.log(n.toFixed()); // 0 arguments
    console.log(n.toFixed(3)); // 1 argument
  }

  function f(x?: number) {
    // ...
  }
  f(); // OK
  f(10); // OK

  function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i);
    }
  }

  myForEach([1, 2, 3], (a) => console.log(a));
  myForEach([1, 2, 3], (a, i) => console.log(a, i));

  function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
      // I don't feel like providing the index today
      callback(arr[i]);
    }
  }

  myForEach([1, 2, 3], (a, i) => {
    console.log(i.toFixed());
  //'i' is possibly 'undefined'.
  });

  function makeDate(timestamp: number): Date;
  function makeDate(m: number, d: number, y: number): Date;
  function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
      return new Date(y, mOrTimestamp, d);
    } else {
      return new Date(mOrTimestamp);
    }
  }
  const d1 = makeDate(12345678);
  const d2 = makeDate(5, 5, 5);
  const d3 = makeDate(1, 3);
  //No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.

  function fn(x: string): void;
  function fn() {
    // ...
  }
  // Expected to be able to call with zero arguments
  fn();
  //Expected 1 arguments, but got 0.

  function fn(x: boolean): void;
  // Argument type isn't right
  function fn(x: string): void;
  //This overload signature is not compatible with its implementation signature.
  function fn(x: boolean) {}

  function fn(x: string): string;
  // Return type isn't right
  function fn(x: number): boolean;
  //This overload signature is not compatible with its implementation signature.
  function fn(x: string | number) {
    return "oops";
  }

  function len(s: string): number;
  function len(arr: any[]): number;
  function len(x: any) {
    return x.length;
  }

  len(""); // OK
  len([0]); // OK
  //len(Math.random() > 0.5 ? "hello" : [0]);

  // No overload matches this call.
  // Overload 1 of 2, '(s: string): number', gave the following error.
  //   Argument of type 'number[] | "hello"' is not assignable to parameter of type 'string'.
  //     Type 'number[]' is not assignable to type 'string'.
  // Overload 2 of 2, '(arr: any[]): number', gave the following error.
  //   Argument of type 'number[] | "hello"' is not assignable to parameter of type 'any[]'.
  //     Type 'string' is not assignable to type 'any[]'.

  function len(x: any[] | string) {
    return x.length;
  }

  const user = {
    id: 123,
  
    admin: false,
    becomeAdmin: function () {
      this.admin = true;
    },
  };

  interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
  }
  
  const db = getDB();
  const admins = db.filterUsers(function (this: User) {
    return this.admin;
  });

  interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
  }
  
  //const db = getDB();
  //const admins = db.filterUsers(() => this.admin);
  // The containing arrow function captures the global value of 'this'.
  // Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.

  // The inferred return type is void
  function noop() {
    return;
  }

  function f1(a: any) {
    a.b(); // OK
  }
  function f2(a: unknown) {
    a.b();
    //'a' is of type 'unknown'.
  }

  function safeParse(s: string): unknown {
    return JSON.parse(s);
  }
  
  // Need to be careful with 'obj'!
  const obj = safeParse(someRandomString);

  function fail(msg: string): never {
    throw new Error(msg);
  }

  function fn(x: string | number) {
    if (typeof x === "string") {
      // do something
    } else if (typeof x === "number") {
      // do something else
    } else {
      x; // has type 'never'!
    }
  }

  function doSomething(f: Function) {
    return f(1, 2, 3);
  }

  function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
  }
  // 'a' gets value [10, 20, 30, 40]
  //const a = multiply(10, 1, 2, 3, 4);

  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  arr1.push(...arr2);

  // Inferred type is number[] -- "an array with zero or more numbers",
  // not specifically two numbers
  //const args = [8, 5];
  //const angle = Math.atan2(...args);
  //A spread argument must either have a tuple type or be passed to a rest parameter.

  // Inferred as 2-length tuple
  const args = [8, 5] as const;
  // OK
  const angle = Math.atan2(...args);

  function sum({ a, b, c }) {
    console.log(a + b + c);
  }
  sum({ a: 10, b: 3, c: 9 });

  function sum({ a, b, c }: { a: number; b: number; c: number }) {
    console.log(a + b + c);
  }

  // Same as prior example
  type ABC = { a: number; b: number; c: number };
  function sum({ a, b, c }: ABC) {
    console.log(a + b + c);
  }

  type voidFunc = () => void;
 
  /*S
  const f1: voidFunc = () => {
    return true;
  };
  
  const f2: voidFunc = () => true;
  */
  
  const f3: voidFunc = function () {
    return true;
  };

  const v1 = f1();
 
  const v2 = f2();
  
  const v3 = f3();

  const src = [1, 2, 3];
  const dst = [0];
  
  src.forEach((el) => dst.push(el));

  /*
  function f2(): void {
    // @ts-expect-error
    return true;
  }
  
  const f3 = function (): void {
    // @ts-expect-error
    return true;
  };
  */


};

const Narrowing = () => {
  function padLeft(padding: number | string, input: string): string {
    throw new Error("Not implemented yet!");
  }

  function padLeft(padding: number | string, input: string): string {
    return " ".repeat(padding) + input;
  // Argument of type 'string | number' is not assignable to parameter of type 'number'.
  //   Type 'string' is not assignable to type 'number'.
  }

  function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
    }
    return padding + input;
  }

  function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
                          
      //(parameter) padding: number
    }
    return padding + input;
            
    //(parameter) padding: string
  }

  function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
      for (const s of strs) {
        //'strs' is possibly 'null'.
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      // do nothing
    }
  }

  function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
      return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
  }

  // both of these result in 'true'
  // Boolean("hello"); // type: boolean, value: true
  // !!"world"; // type: true,    value: true
  // This kind of expression is always truthy.

  function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }

  function printAll(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }

  function multiplyAll(
    values: number[] | undefined,
    factor: number
  ): number[] | undefined {
    if (!values) {
      return values;
    } else {
      return values.map((x) => x * factor);
    }
  }

  function example(x: string | number, y: string | boolean) {
    if (x === y) {
      // We can now call any 'string' method on 'x' or 'y'.
      x.toUpperCase();
      y.toLowerCase();
    } else {
      console.log(x);
                
      console.log(y);
                
    }
  }

  function printAll(strs: string | string[] | null) {
    if (strs !== null) {
      if (typeof strs === "object") {
        for (const s of strs) {
                        
          //(parameter) strs: string[]
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
                    
          //(parameter) strs: string
      }
    }
  }

  /*
  type Fish = { swim: () => void };
  type Bird = { fly: () => void };
  
  function move(animal: Fish | Bird) {
    if ("swim" in animal) {
      return animal.swim();
    }
  
    return animal.fly();
  }
  */

  type Fish = { swim: () => void };
  type Bird = { fly: () => void };
  type Human = { swim?: () => void; fly?: () => void };
  
  function move(animal: Fish | Bird | Human) {
    if ("swim" in animal) {
      animal;
        
      //(parameter) animal: Fish | Human
    } else {
      animal;
        
      //(parameter) animal: Bird | Human
    }
  }

  function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
                
      //(parameter) x: Date
    } else {
      console.log(x.toUpperCase());
                
      //(parameter) x: string
    }
  }

  let x = Math.random() < 0.5 ? 10 : "hello world!";
   
  //let x: string | number
  x = 1;
  
  console.log(x);
            
  //let x: number
  x = "goodbye!";
  
  console.log(x);

  //let x = Math.random() < 0.5 ? 10 : "hello world!";
   
  //let x: string | number
  x = 1;
  
  console.log(x);
            
  //let x: number
  x = true;
  //Type 'boolean' is not assignable to type 'string | number'.
  
  console.log(x);

  function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
    }
    return padding + input;
  }

  function example() {
    let x: string | number | boolean;
  
    x = Math.random() < 0.5;
  
    console.log(x);
              
    //let x: boolean
  
    if (Math.random() < 0.5) {
      x = "hello";
      console.log(x);
                
      //let x: string
    } else {
      x = 100;
      console.log(x);
                
      //let x: number
    }
  
    return x;
          
    //let x: string | number
  }

  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }

  // Both calls to 'swim' and 'fly' are now okay.
  let pet = getSmallPet();
  
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }

  const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
  const underWater1: Fish[] = zoo.filter(isFish);
  // or, equivalently
  const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
  
  // The predicate may need repeating for more complex examples
  const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
    if (pet.name === "sharkey") return false;
    return isFish(pet);
  });

  interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
  }

  function handleShape(shape: Shape) {
    // oops!
    if (shape.kind === "rect") {
      //This comparison appears to be unintentional because the types '"circle" | "square"' and '"rect"' have no overlap.
      // ...
    }
  }

  function getArea(shape: Shape) {
    return Math.PI * shape.radius ** 2;
    //'shape.radius' is possibly 'undefined'.
  }

  function getArea(shape: Shape) {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius ** 2;
      //'shape.radius' is possibly 'undefined'.
    }
  }

  interface Circle {
    kind: "circle";
    radius: number;
  }
  
  interface Square {
    kind: "square";
    sideLength: number;
  }
  
  type Shape = Circle | Square;

  function getArea(shape: Shape) {
    return Math.PI * shape.radius ** 2;
    // Property 'radius' does not exist on type 'Shape'.
    // Property 'radius' does not exist on type 'Square'.
  }

  function getArea(shape: Shape) {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius ** 2;
                        
      //(parameter) shape: Circle
    }
  }

  function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
                          
        //(parameter) shape: Circle
      case "square":
        return shape.sideLength ** 2;
                
        //(parameter) shape: Square
    }
  }

  type Shape = Circle | Square;
 
  function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.sideLength ** 2;
      default:
        const _exhaustiveCheck: never = shape;
        return _exhaustiveCheck;
    }
  }

  interface Triangle {
    kind: "triangle";
    sideLength: number;
  }
  
  type Shape = Circle | Square | Triangle;
  
  function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.sideLength ** 2;
      default:
        const _exhaustiveCheck: never = shape;
        //Type 'Triangle' is not assignable to type 'never'.
        return _exhaustiveCheck;
    }
  }






};


const everydayTypes = () => {
  let obj: any = { x: 0 };
  // None of the following lines of code will throw compiler errors.
  // Using `any` disables all further type checking, and it is assumed
  // you know the environment better than TypeScript.
  //obj.foo();
  //obj();
  obj.bar = 100;
  obj = "hello";
  const n: number = obj;

  let myName: string = "Alice";

  // No type annotation needed -- 'myName' inferred as type 'string'
  //let myName = "Alice";

  // Parameter type annotation
  function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }

  // Would be a runtime error if executed!
  // greet(42);
  // Argument of type 'number' is not assignable to parameter of type 'string'.

  function getFavoriteNumber(): number {
    return 26;
  }

  async function getFavoriteNumber(): Promise<number> {
    return 26;
  }

  const names = ["Alice", "Bob", "Eve"];
 
  // Contextual typing for function - parameter s inferred to have type string
  names.forEach(function (s) {
    console.log(s.toUpperCase());
  });
  
  // Contextual typing also applies to arrow functions
  names.forEach((s) => {
    console.log(s.toUpperCase());
  });

  // The parameter's type annotation is an object type
  function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 3, y: 7 });

  function printName(obj: { first: string; last?: string }) {
    // ...
  }
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });

  function printName(obj: { first: string; last?: string }) {
    // Error - might crash if 'obj.last' wasn't provided!
    //console.log(obj.last.toUpperCase());
  //'obj.last' is possibly 'undefined'.
    if (obj.last !== undefined) {
      // OK
      console.log(obj.last.toUpperCase());
    }
  
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
  }

  function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // Error
  printId({ myID: 22342 });

  function printId(id: number | string) {
    console.log(id.toUpperCase());
  // Property 'toUpperCase' does not exist on type 'string | number'.
  //   Property 'toUpperCase' does not exist on type 'number'.
  }

  function printId(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
  }

  function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }

  // Return type is inferred as number[] | string
  function getFirstThree(x: number[] | string) {
    return x.slice(0, 3);
  }

  type Point = {
    x: number;
    y: number;
  };
  
  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  
  printCoord({ x: 100, y: 100 });

  type ID = number | string;

  type UserInputSanitizedString = string;
 
  function sanitizeInput(str: string): UserInputSanitizedString {
    return sanitize(str);
  }
  
  // Create a sanitized input
  //let userInput = sanitizeInput(getInput());
  
  // Can still be re-assigned with a string though
  //userInput = "new input";

  interface Point {
    x: number;
    y: number;
  }
  
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  
  printCoord({ x: 100, y: 100 });

  //const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

  //const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

  const x = "hello" as number;

  //const a = expr as any as T;

  //let changingString = "Hello World";
  changingString = "Olá Mundo";
  // Because `changingString` can represent any possible string, that
  // is how TypeScript describes it in the type system
  changingString;
        
  //let changingString: string
  
  //const constantString = "Hello World";
  // Because `constantString` can only represent 1 possible string, it
  // has a literal type representation
  //constantString;
        
  //const constantString: "Hello World"

  //let x: "hello" = "hello";
  // OK
  //x = "hello";
  // ...
  //x = "howdy";

  function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
  }
  printText("Hello, world", "left");
  printText("G'day, mate", "centre");
  //Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'

  function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
  }

  interface Options {
    width: number;
  }
  function configure(x: Options | "auto") {
    // ...
  }
  configure({ width: 100 });
  configure("auto");
  configure("automatic");
  //Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.

  /*
  const obj = { counter: 0 };
  if (someCondition) {
    obj.counter = 1;
  }
    */

  /*
  declare function handleRequest(url: string, method: "GET" | "POST"): void;
 
  const req = { url: "https://example.com", method: "GET" };
  handleRequest(req.url, req.method);
  Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
  */

  // Change 1:
  const req = { url: "https://example.com", method: "GET" as "GET" };
  // Change 2
  //handleRequest(req.url, req.method as "GET");

  // const req = { url: "https://example.com", method: "GET" } as const;
  // handleRequest(req.url, req.method);

  function doSomething(x: string | null) {
    if (x === null) {
      // do nothing
    } else {
      console.log("Hello, " + x.toUpperCase());
    }
  }

  function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
  }

  // Creating a bigint via the BigInt function
  const oneHundred: bigint = BigInt(100);
  
  // Creating a BigInt via the literal syntax
  const anotherHundred: bigint = 100n;

  const firstName = Symbol("name");
  const secondName = Symbol("name");
  
  if (firstName === secondName) {
    //This comparison appears to be unintentional because the types 'typeof firstName' and 'typeof secondName' have no overlap.
    // Can't ever happen
  }

};
everydayTypes();

// Accessing the property 'toLowerCase'
// on 'message' and then calling it
const theBasics = () => {
  const message = "Hello World!";
  message.toLowerCase();
  // Calling 'message'
  //message();

  function fn(x) {
    return x.flip();
  }

  const user = {
    name: "Daniel",
    age: 26,
  };
  //user.location; // returns undefined

  const announcement = "Hello World!";
 
  // How quickly can you spot the typos?
  announcement.toLocaleLowercase();
  announcement.toLocalLowerCase();
  
  // We probably meant to write this...
  announcement.toLocaleLowerCase();

  function flipCoin() {
    // Meant to be Math.random()
    return Math.random < 0.5;
  }

  const value = Math.random() < 0.5 ? "a" : "b";
  if (value !== "a") {
    // ...
  } else if (value === "b") {
  //This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
    // Oops, unreachable
  }

  // Greets the world.
  console.log("Hello world!");

  // This is an industrial-grade general-purpose greeter function:
  function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}!`);
  }
  
  greet("Brendan");

  function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }

  function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  
  greet("Maddison", Date());

  let msg = "hello there!";

  "use strict";
  function greet(person, date) {
      console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
  }
  greet("Maddison", new Date());

  `Hello ${person}, today is ${date.toDateString()}!`;

};

























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











// TypeScript Cheat Sheet

{
  class ABC {

  }

  const abc = new ABC();
}

{
  class Bag {
    private item: any;
  }
}

{
  class Bag {
    #item: any;
  }

  const a: Bag = new Bag();

  class C implements Bag {

  }
}

{
  class User {

    static #userCount = 0;
    static registerUser(user: User) {

    }

    static { this.#userCount = -1; }

    id: string;
    email: string;
    displayName?: boolean;
    name!: string;
    #attributes: Map<any, any>;
    roles = ["user"];
    readonly createdAt = new Date();

    constructor(id: string, email: string) {
      this.id = id;
      this.email = email;
    }

    setName(name: string) { this.name = name }
    verifyName = (name: string) => {

    }

    get accountId(): string { return this.id }
    set accountId(value: string) { this.id = value }

    private makeRequest() {

    }

    protected handleRequest() {

    }

  }

}

{
  class Box<Type> {
    contents: Type;
    constructor(value: Type) {
      this.contents = value;
    }
  }

  const stringBox = new Box("a package");
}

{
  class Location {
    constructor(public x: number, public y: number) {

    }
  }

  const loc = new Location(20, 40);
  loc.x // 20
  loc.y // 40
}

{
  abstract class Animal {
    abstract getName(): string;
    printName() {
      console.log("Hello" + this.getName());
    }
  }

  class Dog extends Animal {
    getName(): string { return ""; }

  }
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

// w3schools>Basic JavaScript>JS Versions>JS 2009 (ES5)

{
  let str = "HELLO WORLD";
  str.charAt(0);     // returns H
}

{
  let str = "HELLO WORLD";
  str[0];           // returns H
}

{
  let obj = {name: "John", new: "yes"}
}

{
  var str = "       Hello World!        ";
  console.log(str.trim());
}

{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  let result = Array.isArray(fruits);
}

{
  const numbers = [45, 4, 9, 16, 25];

  numbers.forEach(myFunction);
}

{
  const numbers1 = [45, 4, 9, 16, 25];
  const numbers2 = numbers1.map(myFunction);

  function myFunction(value) {
    return value * 2;
  }
}

{
  const numbers = [45, 4, 9, 16, 25];
  const over18 = numbers.filter(myFunction);

  function myFunction(value) {
    return value > 18;
  }
}

{
  const numbers = [45, 4, 9, 16, 25];
  let sum = numbers.reduce(myFunction);

  function myFunction(total, value) {
    return total + value;
  }
}

{
  const numbers1 = [45, 4, 9, 16, 25];
  let sum = numbers1.reduceRight(myFunction);

  function myFunction(total, value) {
    return total + value;
  }
}

{
  const numbers = [45, 4, 9, 16, 25];
  let allOver18 = numbers.every(myFunction);

  function myFunction(value) {
    return value > 18;
  }
}

{
  const numbers = [45, 4, 9, 16, 25];
  let allOver18 = numbers.some(myFunction);

  function myFunction(value) {
    return value > 18;
  }
}

{
  const fruits = ["Apple", "Orange", "Apple", "Mango"];
  let position = fruits.indexOf("Apple") + 1;
}

{
  const fruits = ["Apple", "Orange", "Apple", "Mango"];
  let position = fruits.lastIndexOf("Apple") + 1;
}

{
  const txt = '{"name":"John", "age":30, "city":"New York"}'

  const myObj = JSON.parse(txt);
}

{
  const myObj = {name:"John", age:30, city:"New York"};
  const myJSON = JSON.stringify(myObj);
}

{
  let timInMSs = Date.now();
}

{
  const d = new Date();
}

{
  // Create an object:
  const Person = {
    firstName: "John",
    lastName : "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };

  // Display data from the object using a getter:
  const str = Person.fullName;
}

{
  const Person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
    set lang(value) {
      this.language = value.toUpperCase();
    }
  };

  // Set an object property using a setter:
  person.lang = "en";
}

{
  const Person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
    get lang() {
      return this.language;
    },
    set lang(value) {
      this.language = value;
    }
  };

  // Set an object property using a setter:
  person.lang = "en";
}

{
  // Create an Object:
  const person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
  };

  // Change a Property:
  Object.defineProperty(person, "language", {
    value: "EN",
    writable : true,
    enumerable : true,
    configurable : true
  });

  // Enumerate Properties
  let txt = "";
  for (let x in person) {
    txt += person[x] + "<br>";
  }
}

{
  // Create an Object:
  const person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
  };

  // Change a Property:
  Object.defineProperty(person, "language", {
    value: "EN",
    writable : true,
    enumerable : false,
    configurable : true
  });

  // Enumerate Properties
  let txt = "";
  for (let x in person) {
    txt += person[x];
  }
}

{
  // Create an Object:
  const person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO"
  };

  // Change a Property:
  Object.defineProperty(person, "language", {
    get : function() { return language },
    set : function(value) { language = value.toUpperCase()}
  });

  // Change Language
  person.language = "en";
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

{
  let person = {
    firstName: "John",
    lastName: " Doe",
    age: 46,
  }
}

{
  let points = [
    1,
    5,
    10,
    25,
    40,
    100,
  ];
}

{
  // Allowed:
  let person = '{"firstName":"John", "lastName":"Doe", "age":46}'
  JSON.parse(person)

  // Not allowed:
  //let person2 = '{"firstName":"John", "lastName":"Doe", "age":46,}'
  //JSON.parse(person2)
}

{
  // Allowed:
  let points = [40, 100, 1, 5, 25, 10];

  // Not allowed:
  let points2 = [40, 100, 1, 5, 25, 10,];
}


// w3schools>Basic JavaScript>JS Versions>JS 1999 (ES3)

{
  let text = "Visit W3Schools";
  let n = text.search(/w3schools/i);
}

{
  let x = 5;

  try {
    x = y + 1;
  } catch(err) {
    let text = err.name;
  }
}

{
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
}

{
  let text = "";
  let i = 0;

  do {
    text += "The number is " + i;
    i++;
  }
  while (i < 10);
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


// Node.js Tutorial

{
  /*
  let http = require('http');

  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
  }).listen(8080);
  */
}

{
  const os = require('os');
  console.log(os.platform());
}

{
  // Show the V8 engine version used by your Node.js installation
  console.log(`V8 version: ${process.versions.v8}`);
}

{
  // Get information about V8's heap memory usage
  const v8 = require('v8');
  const heapStats = v8.getHeapStatistics();

  console.log('Heap size limit:', (heapStats.heap_size_limit / 1024 / 1024).toFixed(2), 'MB');
  console.log('Total heap size:', (heapStats.total_heap_size / 1024 / 1024).toFixed(2), 'MB');
  console.log('Used heap size:', (heapStats.used_heap_size / 1024 / 1024).toFixed(2), 'MB');
}

{
  console.log('1. Start');

  // Next tick queue
  process.nextTick(() => console.log('2. Next tick'));

  // Microtask queue (Promise)
  Promise.resolve().then(() => console.log('3. Promise'));

  // Timer phase
  setTimeout(() => console.log('4. Timeout'), 0);

  // Check phase
  setImmediate(() => console.log('5. Immediate'));

  console.log('6. End');
}

{
  // Create a new Promise
  const myPromise = new Promise((resolve, reject) => {
    // Simulate an async operation (e.g., API call, file read)
    setTimeout(() => {
      const success = Math.random() > 0.5;
      
      if (success) {
        resolve('Operation completed successfully');
      } else {
        reject(new Error('Operation failed'));
      }
    }, 1000); // Simulate delay
  });

  // Using the Promise
  myPromise
    .then(result => console.log('Success:', result))
    .catch(error => console.error('Error:', error.message));
}

{
  function getUser(userId) {
    return new Promise((resolve, reject) => {
      // Simulating database call
      setTimeout(() => {
        resolve({ id: userId, name: 'John' });
      }, 1000);
    });
  }

  function getUserPosts(user) {
    return new Promise((resolve, reject) => {
      // Simulating API call
      setTimeout(() => {
        resolve(['Post 1', 'Post 2', 'Post 3']);
      }, 1000);
    });
  }

  // Chain the promises
  getUser(123)
    .then(user => {
      console.log('User:', user);
      return getUserPosts(user);
    })
    .then(posts => {
      console.log('Posts:', posts);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

{
  const fs = require('fs').promises;
  const promise1 = Promise.resolve('First result');
  const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second result'), 1000));
  const promise3 = fs.readFile('typescript_demo.ts', 'utf8'); // Read local file instead of fetch

  Promise.all([promise1, promise2, promise3])
    .then(results => {
      console.log('Results:', results);
      // results[0] is from promise1
      // results[1] is from promise2
      // results[2] is the content of data.txt
    })
    .catch(error => {
      console.error('Error in one of the promises:', error);
    });
}

{
  const promise1 = new Promise(resolve => setTimeout(() => resolve('First result'), 1000));
  const promise2 = new Promise(resolve => setTimeout(() => resolve('Second result'), 500));

  Promise.race([promise1, promise2])
    .then(result => {
      console.log('Fastest result:', result);
      // Will log 'Second result' because promise2 is faster
    });
}

{
  async function getData() {
    console.log('Starting...');
    const result = await someAsyncOperation();
    console.log(`Result: ${result}`);
    return result;
  }

  function someAsyncOperation() {
    return new Promise(resolve => {
      setTimeout(() => resolve('Operation completed'), 1000);
    });
  }

  // Call the async function
  getData().then(data => console.log('Final data:', data));

}

{
  const assert = require('assert').strict;

  // Function to test
  function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Inputs must be numbers');
    }
    return a + b;
  }
  // Test cases
  assert.strictEqual(add(2, 3), 5, '2 + 3 should equal 5');
  // Test error case
  assert.throws(
    () => add('2', 3),
    TypeError,
    'Should throw TypeError for non-number input'
  );
  console.log('All tests passed!');
}

{
  const util = require('util');

  // JavaScript built-in types
  console.log('util.types.isDate(new Date()):',
    util.types.isDate(new Date()));
  console.log('util.types.isRegExp(/test/):',
    util.types.isRegExp(/test/));
  console.log('util.types.isPromise(Promise.resolve()):',
    util.types.isPromise(Promise.resolve()));

  // Node.js-specific types
  console.log('util.types.isArrayBuffer(new ArrayBuffer(0)):',
    util.types.isArrayBuffer(new ArrayBuffer(0)));
  console.log('util.types.isSharedArrayBuffer(new SharedArrayBuffer(0)):',
    util.types.isSharedArrayBuffer(new SharedArrayBuffer(0)));
  console.log('util.types.isUint8Array(new Uint8Array()):',
    util.types.isUint8Array(new Uint8Array()));

  // More advanced types
  console.log('util.types.isProxy(new Proxy({}, {})):',
    util.types.isProxy(new Proxy({}, {})));
  console.log('util.types.isExternal(Requiring C++ binding):',
    'Not demonstrated in this example');
}

{
  const util = require('util');

  // Original function
  function oldFunction(x, y) {
    return x + y;
  }

  // Deprecate the function
  const deprecatedFunction = util.deprecate(
    oldFunction,
    'oldFunction() is deprecated. Use newFunction() instead.',
    'DEP0001'
  );

  // New function
  function newFunction(x, y) {
    return x + y;
  }

  // Using the deprecated function will show a warning
  console.log('Result:', deprecatedFunction(5, 10));

  // Using the new function
  console.log('Result:', newFunction(5, 10));
}

{
  const util = require('util');

  // Create debug loggers for different sections
  const debugApp = util.debuglog('app');
  const debugDB = util.debuglog('db');
  const debugAuth = util.debuglog('auth');

  // These messages only appear when NODE_DEBUG includes 'app'
  debugApp('Application starting...');
  debugApp('Configuration loaded from %j', { source: 'config.json' });

  // These messages only appear when NODE_DEBUG includes 'db'
  debugDB('Connected to database');
  debugDB('Query executed: %s', 'SELECT * FROM users');

  // These messages only appear when NODE_DEBUG includes 'auth'
  debugAuth('User authenticated: %s', 'john.doe');

  // To see these messages, run your app with:
  // NODE_DEBUG=app,db node your-app.js
  console.log('Application running normally (this always shows)');
}

{
  // Array spread - converting string to array of characters
  const chars = [...'hello'];
  console.log(chars);
}

{
  // Rest parameter in functions
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4, 5));
}

{
  // Basic default parameter
  function greet(name = 'Guest') {
    return `Hello, ${name}!`;
  }

  console.log(greet());
  console.log(greet('Kai'));
}

{
  // Simple class with constructor and method
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      return `Hello, I'm ${this.name}!`;
    }
  }

  // Create an instance
  const person = new Person('Alice', 25);
  console.log(person.greet()); // Hello, I'm Alice!
}

{
  // Parent class
  class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
      return `${this.name} makes a sound.`;
    }
  }

  // Child class
  class Dog extends Animal {
    speak() {
      return `${this.name} barks!`;
    }
  }

  const dog = new Dog('Rex');
  console.log(dog.speak());

}

{
  // Class with private field (# prefix)
  class Counter {
    #count = 0; // Private field

    increment() {
      this.#count++;
    }

    getCount() {
      return this.#count;
    }
  }

  const counter = new Counter();
  counter.increment();
  console.log(counter.getCount());
  // console.log(counter.#count); // Error: Private field
}

{
  // Creating a promise
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Simulating an API call
      setTimeout(() => {
        const data = { id: 1, name: 'Product' };
        const success = true;

        if (success) {
          resolve(data); // Fulfilled with data
        } else {
          reject(new Error('Failed to fetch data')); // Rejected with error
        }
      }, 1000);
    });
  };

  // Using a promise
  console.log('Fetching data...');

  fetchData()
    .then(data => {
      console.log('Data received:', data);
      return data.id; // Return value is passed to the next .then()
    })
    .then(id => {
      console.log('Processing ID:', id);
    })
    .catch(error => {
      console.error('Error:', error.message);
    })
    .finally(() => {
      console.log('Operation completed (success or failure)');
    });

  console.log('Continuing execution while fetch happens in background');
}

{
  // Function that returns a promise
  const fetchUser = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id > 0) {
          resolve({ id, name: `User ${id}` });
        } else {
          reject(new Error('Invalid user ID'));
        }
      }, 1000);
    });
  };

  // Using async/await
  async function getUserData(id) {
    try {
      console.log('Fetching user...');
      const user = await fetchUser(id); // Waits for the promise to resolve
      console.log('User data:', user);

      // You can use the result directly
      return `${user.name}'s profile`;
    } catch (error) {
      // Handle errors with try/catch
      console.error('Error fetching user:', error.message);
      return 'Guest profile';
    }
  }

  // Async functions always return promises
  console.log('Starting...');
  getUserData(1)
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Unexpected error:', error));
  console.log('This runs before getUserData completes');
}

{
  function getUserCity(user) {
    return user?.address?.city;
  }

  const user1 = {
    name: 'Alice',
    address: { city: 'New York', country: 'USA' }
  };

  const user2 = {
    name: 'Bob'
  };

  const user3 = null;

  console.log(getUserCity(user1)); // 'New York'
  console.log(getUserCity(user2)); // undefined
  console.log(getUserCity(user3)); // undefined
}

{
  function calculatePrice(price, tax) {
    // Only uses default if tax is null or undefined
    return price + (tax ?? 0.1) * price;
  }

  console.log(calculatePrice(100, 0)); // 100 (correct! tax of 0 was used)
  console.log(calculatePrice(100, null)); // 110 (using default)
}

{
  // Helper function to simulate an API call
  function fetchData(id) {
    return new Promise(resolve => {
      setTimeout(() => resolve(`Data for ID ${id}`), 1000);
    });
  }

  // Sequential execution (~3 seconds total)
  async function fetchSequential() {
    console.time('sequential');
    const data1 = await fetchData(1);
    const data2 = await fetchData(2);
    const data3 = await fetchData(3);
    console.timeEnd('sequential');
    return [data1, data2, data3];
  }

  // Run the sequential example
  fetchSequential().then(results => {
    console.log('Sequential results:', results);
  });
}

{
  // Helper function to simulate an API call
  function fetchData(id) {
    return new Promise(resolve => {
      setTimeout(() => resolve(`Data for ID ${id}`), 1000);
    });
  }

  // Parallel execution (~1 second total)
  async function fetchParallel() {
    console.time('parallel');
    const results = await Promise.all([
      fetchData(1),
      fetchData(2),
      fetchData(3)
    ]);
    console.timeEnd('parallel');
    return results;
  }

  // Run the parallel example
  fetchParallel().then(results => {
    console.log('Parallel results:', results);
  });
}

{
  // Process identification
  console.log('Process ID (PID):', process.pid);

  // Platform information
  console.log('Platform:', process.platform);
  console.log('Node.js version:', process.version);

  // Memory usage (in bytes)
  console.log('Memory usage:', process.memoryUsage());

  // Command line arguments
  console.log('Arguments:', process.argv);
}

{
  // Primitive types
  let isDone: boolean = false;
  let count: number = 10;
  let name: string = 'TypeScript';

  // Arrays
  let numbers: number[] = [1, 2, 3];
  let names: Array<string> = ['Alice', 'Bob'];

  // Tuples
  let user: [string, number] = ['Alice', 25];

  // Enums
  enum Color {Red, Green, Blue}
  let color: Color = Color.Green;
}

{
  // Interface
  interface User {
    id: number;
    name: string;
    email?: string; // Optional property
  }

  // Type alias
  type Point = {
    x: number;
    y: number;
  };

  // Using the interface
  function printUser(user: User) {
    console.log(`User: ${user.name}`);
  }
}

{
  // Union type
  function formatId(id: string | number) {
    return `ID: ${id}`;
  }

  // Intersection type
  type User = { name: string } & { id: number };
}

{
  type Fish = { swim: () => void };
  type Bird = { fly: () => void };

  function isFish(pet: Fish | Bird): pet is Fish {
    return 'swim' in pet;
  }
}

{
  // Generic function with constraints
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  // Generic interface with default type
  interface PaginatedResponse<T = any> {
    data: T[];
    total: number;
    page: number;
    limit: number;
  }

  // Using generic types with async/await in Node.js
  async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
  }
}

{
  // Mapped types
  type ReadonlyUser = {
    readonly [K in keyof User]: User[K];
  };

  // Conditional types
  type NonNullableUser = NonNullable<User | null | undefined>; // User

  // Type inference with conditional types
  type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
  function getUser() {
    return { id: 1, name: 'Alice' } as const;
  }
  type UserReturnType = GetReturnType<typeof getUser>; // { readonly id: 1; readonly name: "Alice"; }
}

{
  // Type inference with variables
  const name = 'Alice'; // TypeScript infers type: string
  const age = 30; // TypeScript infers type: number
  const active = true; // TypeScript infers type: boolean

  // Type inference with arrays
  const numbers = [1, 2, 3]; // TypeScript infers type: number[]
  const mixed = [1, 'two', true]; // TypeScript infers type: (string | number | boolean)[]

  // Type inference with functions
  function getUser() {
    return { id: 1, name: 'Alice' }; // Return type inferred as { id: number; name: string; }
  }

  const user = getUser(); // user inferred as { id: number; name: string; }
  console.log(user.name); // Type checking works on inferred properties
}
