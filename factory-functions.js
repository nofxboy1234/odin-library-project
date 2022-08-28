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

function C() {
  console.log('start of constructor');
  console.log(this);
  if (!(this instanceof C)) {
    console.log('return new C()');
    return new C();
  }
  this.instance_member = 'This is ok.';
  console.log('end of constructor');
}
var c = C(); // Is this a constructor?
console.log(c);
console.log(window.instance_member); // No global namespace pollution.
console.log(c instanceof C); // It's like a class, right?
console.log(c.constructor === C);
