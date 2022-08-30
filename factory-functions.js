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
// var o = new MyObject('data');
// };
// console.log(o.data);
// console.log(o.getData());
// o.setFancyData('abc');
// console.log(o.getData());
// o.sayHello();
// console.log(o);

// Constructor function
// function MyObject(data) {
//   this.data = data;
// }
// MyObject.prototype = {
//   getData: function () {
//     return this.data;
//   },
// };
// // MyObject.prototype.sayHello = function () {
// //   console.log('hello!');
// // };
// let o = new MyObject('data');
// // ---------------------------
// console.log(o);
// console.log(o.getData());
// console.log(o instanceof MyObject);
// // ---------------------------

// Factory function
// function myObject(data) {
//   const obj = Object.create(myObject.proto);
//   obj.data = data;
//   return obj;
// }
// myObject.proto = {
//   getData: function () {
//     return this.data;
//   },
// };
// let o = myObject('data');
// // ---------------------------
// console.log(o);
// console.log(o.getData());
// console.log(o instanceof myObject);
// console.log(myObject.proto);
// ---------------------------

// Generic factory can be used to invoke constructor functions
// in a more explicit manner
// function genericFactory(Ctr) {
//   const obj = Object.create(Ctr.prototype);
//   const args = Array.prototype.slice.call(arguments, 1);
//   Ctr.apply(obj, args);
//   return obj;
// }
// let o2 = genericFactory(MyObject, 'data');
// // ---------------------------
// console.log(o2);
// console.log(o2.getData());
// console.log(o2 instanceof MyObject);
// // ---------------------------

// const personFactory = (name) => {
//   const sayHello = () => console.log('hello!');
//   return { name, sayHello };
// };
// const dylan = personFactory('Dylan');
// console.log(dylan.name);
// dylan.sayHello();

// const Player = (name, level) => {
//   let health = level * 2;
//   let weapon = 'teeth';
//   const getHealth = () => health;
//   const getWeapon = () => weapon;
//   const getLevel = () => level;
//   const getName = () => name;
//   const die = () => {
//     console.log(`${name} died`);
//   };
//   const damage = (x) => {
//     health -= x;
//     if (health <= 0) {
//       die();
//     }
//   };
//   const attack = (enemy) => {
//     if (level < enemy.getLevel()) {
//       damage(1);
//       console.log(`${enemy.getName()} has damaged ${name}`);
//     }
//     if (level >= enemy.getLevel()) {
//       enemy.damage(1);
//       console.log(`${name} has damaged ${enemy.getName()}`);
//     }
//   };
//   return { attack, damage, getLevel, getName, health, getHealth, getWeapon };
// };
// const hunter = Player('hunter', 10);
// const beast = Player('beast', 5);
// console.log(`beast.health: ${beast.health}`);
// console.log(`beast.getHealth(): ${beast.getHealth()}`);
// // beast.health -= 1;
// hunter.attack(beast);
// console.log(`beast.health: ${beast.health}`);
// console.log(`beast.getHealth(): ${beast.getHealth()}`);
// //
// beast.weapon = 'claws';
// console.log(`beast.weapon: ${beast.weapon}`);
// console.log(beast);
// console.log(`beast.getWeapon(): ${beast.getWeapon()}`);

const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return { sayName };
};
// const Nerd = (name) => {
//   // simply create a person and pull out the sayName function with destructuring assignment syntax!
//   const { sayName } = Person(name);
//   const doSomethingNerdy = () => console.log('nerd stuff');
//   return { sayName, doSomethingNerdy };
// };
const Nerd = (name) => {
  const prototype = Person(name);
  const doSomethingNerdy = () => console.log('nerd stuff');
  return Object.assign({}, prototype, { doSomethingNerdy });
};
const jeff = Nerd('jeff');
jeff.sayName(); //my name is jeff
jeff.doSomethingNerdy(); // nerd stuff
