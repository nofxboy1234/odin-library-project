// var proto = { protoprop: 'protoprop' };
// function C() {} //Dummy throwaway constructor.
// C.prototype = proto;
// var obj = new C();
// console.log(proto.isPrototypeOf(obj));
// console.log(obj.protoprop);

// var proto = { protoprop: 'protoprop' };
// var obj = Object.create(proto);
// console.log(proto.isPrototypeOf(obj));
// console.log(obj.protoprop);

// function C() {
//   this.instance_member = 'whoops!';
// }
// var c = C(); // Forgot "new"
// console.log(c);
// console.log(window.instance_member); // Property added to global namespace!

// function C() {
//   console.log('start of constructor');
//   console.log(this);
//   if (!(this instanceof C)) {
//     console.log('return new C()');
//     return new C();
//   }
//   this.instance_member = 'This is ok.';
//   console.log('end of constructor');
// }
// var c = C(); // Is this a constructor?
// console.log(c);
// console.log(window.instance_member); // No global namespace pollution.
// console.log(c instanceof C); // It's like a class, right?
// console.log(c.constructor === C);

// Constructor
// function C() {}
// // Create object.
// var c = new C();
// console.log(c instanceof C);
// console.log(c.constructor === C);
// // Change prototype
// C.prototype = { prototype_prop: 'proto' };
// console.log(c.constructor === C);
// console.log(c instanceof C); // instanceof no longer works!

// Create two constructors with the
// same prototype.
// var proto = { protoprop: 'protoprop' };
// function C() {
//   this.cprop = 'cprop';
// }
// C.prototype = proto;
// function F() {
//   this.fprop = 'fprop';
// }
// F.prototype = proto;
// var f = new F();
// console.log(f.protoprop); // Has prototype properties
// console.log(f.fprop); // Has F properties
// console.log(f.cprop); // Doesn't have C properties
// console.log(f instanceof C); // Is an instance of C!?!
// console.log(F.prototype.isPrototypeOf(f));

// function C() {}
// C.prototype = { prototype_prop: 'proto' };
// // Changing the prototype breaks the constructor
// // property for all objects created after the change.
// c = new C();
// console.log(c instanceof C); //=> true
// console.log(c.constructor === C); //=> false
// C.prototype.constructor = C;
// console.log(c.constructor === C); //=> true

// Constructor function
// function MyObject(data) {
//   this.data = data;
// }
// MyObject.prototype = {
//   getData: function () {
//     return this.data;
//   },
//   setFancyData: function (data) {
//     this.data = `fancy data: ${data}`;
//   },
// };
// MyObject.prototype.sayHello = function () {
//   console.log('hello ' + this.data + ' is my data');
// };
// var o = new MyObject('data');
// console.log(o.data);
// console.log(o.getData());
// o.setFancyData('abc');
// console.log(o.getData());
// o.sayHello();
// console.log(o);

// Constructor function
function MyObject(data) {
  this.data = data;
}
MyObject.prototype = {
  getData: function () {
    return this.data;
  },
};
var o = new MyObject('data');

// Factory function
function myObject(data) {
  var obj = Object.create(myObject.proto);
  obj.data = data;
  return obj;
}
myObject.proto = {
  getData: function () {
    return this.data;
  },
};
var o = myObject('data');
