// function add(x, y) {
//   return x + y;
// }
//
// function add1(x) {
//   return function (y) {
//     return x + y;
//   }
// }

function add2() {
  let arr = [];
  const add = (...params) => {
    arr = arr.concat(params);
    console.log(arr);
    return add;
  }
  add.valueOf = () => {
    return arr.reduce((total, item) => total + item);
  }
  return add;
}

const add3 = add2();

const res = add3(1)(2)(3);

console.log(res.valueOf());
