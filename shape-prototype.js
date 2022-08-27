// Shape - superclass
function Shape() {
  console.log('Shape constructor');
  this.x = 0;
  this.y = 0;
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
  console.log('Rectangle constructor');
  this.sides = 4;
}
// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
//If you don't set Rectangle.prototype.constructor to Rectangle,
//it will take the prototype.constructor of Shape (parent).
//To avoid that, we set the prototype.constructor to Rectangle (child).
Rectangle.prototype.constructor = Rectangle;

function Square() {
  Rectangle.call(this);
  console.log('Square constructor');
  this.squareProp = true;
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.sharedSquareProp = 'hello!';

const rect = new Rectangle();
console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'

const square = new Square();
console.log(square.sides);

console.log(Square.prototype.constructor);
console.log(square.constructor);
console.log(square.squareProp);
console.log(square.sharedSquareProp);
