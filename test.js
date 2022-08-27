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
  Student.call(this);
  this.name = name || 'noname';
  this.grade = 9;
}
NinthGrader.prototype = Object.create(Student.prototype);
NinthGrader.prototype.constructor = NinthGrader;
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

// --------Prototypes--------
// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
  this.special = 'secret';
}

// superclass method
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
  this.sides = 4;
  this.x = 5;
  this.y = 5;
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);

//If you don't set Rectangle.prototype.constructor to Rectangle,
//it will take the prototype.constructor of Shape (parent).
//To avoid that, we set the prototype.constructor to Rectangle (child).
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.move = function (moveAmount) {
  this.x += moveAmount * 2;
  this.y += moveAmount * 2;
  console.log('Shape moved: Rectangle.move');
};

const shape = new Shape();
shape.move(1, 1);
shape.move(1, 1);
console.log(shape.x, shape.y);
console.log(shape.sides);

const rect = new Rectangle();
console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
console.log(rect.x);
console.log(rect.sides);
console.log(rect.special);
