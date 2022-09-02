const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

calculator.add(3, 5); // 8
calculator.sub(6, 2); // 4
calculator.mul(14, 5534); // 77476

const myModule = (function () {
  'use strict';

  const _privateProperty = 'Hello World';
  const publicProperty = 'I am a public property';

  function _privateMethod() {
    console.log(_privateProperty);
  }

  const publicMethod = () => {
    _privateMethod();
  };

  return {
    publicMethod,
    publicProperty,
  };
})();

myModule.publicMethod(); // outputs 'Hello World'
console.log(myModule.publicProperty); // outputs 'I am a public property'
console.log(myModule._privateProperty); // is undefined protected by the module closure
myModule._privateMethod(); // is TypeError protected by the module closure
