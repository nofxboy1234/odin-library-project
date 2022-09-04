// const calculator = (() => {
//   const add = (a, b) => a + b;
//   const sub = (a, b) => a - b;
//   const mul = (a, b) => a * b;
//   const div = (a, b) => a / b;
//   return {
//     add,
//     sub,
//     mul,
//     div,
//   };
// })();

// calculator.add(3, 5); // 8
// calculator.sub(6, 2); // 4
// calculator.mul(14, 5534); // 77476

// const myModule = (function () {
//   'use strict';

//   const _privateProperty = 'Hello World';
//   const publicProperty = 'I am a public property';

//   function _privateMethod() {
//     console.log(_privateProperty);
//   }

//   const publicMethod = () => {
//     _privateMethod();
//   };

//   return {
//     publicMethod,
//     publicProperty,
//   };
// })();

// myModule.publicMethod(); // outputs 'Hello World'
// console.log(myModule.publicProperty); // outputs 'I am a public property'
// console.log(myModule._privateProperty); // is undefined protected by the module closure
// // myModule._privateMethod(); // is TypeError protected by the module closure

// const formatter = (function () {
//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
//   const timesRun = [];

//   // const setTimesRun = () => {
//   //   log('Setting times run');
//   //   ++timesRun;
//   // };

//   const makeUppercase = (text) => {
//     log('Making uppercase');
//     timesRun.push(null);
//     return text.toUpperCase();
//   };

//   // const getTimesRun = () => timesRun;

//   return {
//     makeUppercase,
//     timesRun,
//     // getTimesRun,
//   };
// })();

// console.log(formatter.makeUppercase('tomek'));
// console.log(formatter.makeUppercase('tomek'));
// console.log(formatter.makeUppercase('tomek'));
// console.log(formatter.timesRun.length);

// formatter.timesRun.push(null);
// console.log(formatter.timesRun.length);

// console.log('\n');

// formatter.timesRun = [null, null, null, null, null, null];
// console.log(formatter.timesRun.length);

// console.log('\n');

// console.log(formatter.timesRun.length);

// // console.log(formatter.makeUppercase('Tomek'));
// // console.log(formatter.makeUppercase('Tomek'));
// // console.log(formatter.makeUppercase('Tomek'));

// // console.log(formatter.timesRun);
// // console.log(formatter.timesRun.length);
// // // console.log(formatter.getTimesRun());

// // formatter.timesRun = 10;

// // console.log(formatter.timesRun);
// // console.log(formatter.timesRun.length);
// // // console.log(formatter.getTimesRun());

// // console.log('\n');

// // const formatter2 = formatter;
// // console.log(formatter2.timesRun);
// // console.log(formatter.timesRun.length);
// // // console.log(formatter2.getTimesRun());

// // console.log('\n');

const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${firstName} ${lastName}`;
  },
});

const user1 = createUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
});

const user2 = createUser({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@doe.com',
});

console.log(user1);
console.log(user2);
console.log('\n');
console.log(user1.fullName());

const createObjectFromArray = ([key, value]) => ({
  [key]: value,
});

createObjectFromArray(['name', 'John']); // { name: "John" }

const a = ['name', 'John'];
let key = '';
let value = '';
[key, value] = a;
console.log(key);
console.log(value);
let b = [key];
console.log(b);

class User {
  constructor({ firstName, lastName, email }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user3 = new User({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
});

const user4 = new User({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@doe.com',
});

console.log(user3.fullName());
