// --------Prototypes--------
// function Plant() {
//   this.country = 'Mexico';
//   this.isOrganic = true;
// }

// // Add the showNameAndColor method to the Plant prototype property
// Plant.prototype.showNameAndColor = function () {
//   console.log('I am a ' + this.name + ' and my color is ' + this.color);
// };

// // Add the amIOrganic method to the Plant prototype property
// Plant.prototype.amIOrganic = function () {
//   if (this.isOrganic) console.log('I am organic, Baby!');
// };

// function Fruit(fruitName, fruitColor) {
//   this.name = fruitName;
//   this.color = fruitColor;
// }

// // Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
// Fruit.prototype = new Plant();

// // Creates a new object, aBanana, with the Fruit constructor
// var aBanana = new Fruit('Banana', 'Yellow');

// // Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
// console.log(aBanana.name); // Banana

// // Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
// console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.

// --------Prototypes--------
// function Test(theVariable) {
//   this.variable = theVariable;
// }

// Test.prototype = {
//   constructor: Test,
//   variable2: ['Mike', 'Anil'],
//   someMethod: function () {
//     console.log(this.variable2 + ' ' + this.variable);
//   },
// };

// var aTest = new Test('-- Testing');
// aTest.variable2.push('Richard');
// aTest.someMethod(); // Mike,Anil,Richard -- Testing

// var anotherTest = new Test('-- Testing');
// anotherTest.variable2.push('Jurgen');

// // Uses the same array from the prototype (Richard is included)
// anotherTest.someMethod(); // Mike,Anil,Richard,Jurgen -- Testing

// // variable2 changed on ALL instances:
// aTest.someMethod(); // Mike,Anil,Richard,Jurgen -- Testing

// --------Prototypes--------
function Student() {
  this.lunch = 'sandwiches';
}

Student.prototype.sayName = function () {
  console.log(this.name);
};

function EighthGrader(name) {
  this.name = name || 'noname';
  this.grade = 8;
  // this.lunch = 'macaroni';
}
EighthGrader.prototype = new Student(); // Old way - Set EighthGrader's prototype to Student's constructor
// EighthGrader.prototype = Object.create(Student.prototype);

function NinthGrader(name) {
  this.name = name || 'noname';
  this.grade = 9;
}
NinthGrader.prototype = Object.create(Student.prototype);
NinthGrader.prototype.sayName = function () {
  console.log(`My name is ${this.name} and I am a NinthGrader`);
};

const carl = new EighthGrader('carl');
carl.sayName(); // console.logs "carl"
console.log(carl.grade); // 8
console.log(carl.lunch);

const maria = new NinthGrader('maria');
maria.sayName();
console.log(maria.grade);
console.log(maria.lunch);
