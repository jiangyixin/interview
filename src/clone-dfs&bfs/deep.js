function deepCopy(target, cache = new Set()) {
  if (target === null || typeof target !== 'object' || cache.has(target)) {
    return target;
  }
  if (Array.isArray(target)) {
    target.map(t => {
      cache.add(t);
      return t;
    });
  } else {
    return [...Object.keys(target), ...Object.getOwnPropertySymbols(target)].reduce((res, key) => {
      cache.add(target[key]);
      res[key] = deepCopy(target[key], cache);
      return res;
    }, target.constructor !== Object ? Object.create(target.constructor.prototype) : {});
  }
}


const symbol = Symbol('aaa');
const arr = [1, 2, 3];

const obj = {
  number: 1,
  null: null,
  undefined: undefined,
  arr,
  o: { a: 1 },
  foo: {
    name: () => {
      console.log(1);
    },
    bar: {
      name: 'bar',
      baz: {
        name: 'baz',
        aChild: null, //待会让它指向obj.foo
      },
    },
  },
  symbol,
  fn: () => {},
};
obj.foo.bar.baz.aChild = obj.foo;

const obj1 = deepCopy(obj);

console.log(obj1);
console.log(obj);
console.log(obj.arr === obj1.arr, obj.foo === obj1.foo, obj.fn === obj.fn, obj.o === obj1.o);
obj.o = { b: 2 };
obj.arr = [2, 3, 4];
console.log(obj1.o);
console.log(obj.arr === obj1.arr, obj.foo === obj1.foo, obj.fn === obj.fn, obj.o === obj1.o);
