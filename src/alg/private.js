
var Person = (function () {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.sayName = function () {
    return this.name;
  };
  return Person;
}());

const p = new Person('dog');

console.log(p, p.name, p.sayName());

var Test = (function () {
  var i = 0;
  return function () {
    return i++;
  }
}());
