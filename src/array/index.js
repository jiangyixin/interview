let arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

let ret = Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a -b);

let ret1 = Array.from(new Set(arr.toString().split(',').map(Number))).sort((a,b) => a-b);

console.log(JSON.stringify(ret));

console.log(JSON.stringify(ret1));


let ret2 = arr.flat(Infinity);

let flat = (arr) => {
  let flatArr = [];
  for (const item of arr) {
    if (!Array.isArray(item)) {
      flatArr.push(item);
    } else {
      flatArr.push(...flat(item));
    }
  }
  return flatArr;
};

const flatten = function (arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

let ret3 = flat(arr);
let ret4 = flat(arr);

console.log(JSON.stringify(ret2));
console.log(JSON.stringify(ret3));
console.log(JSON.stringify(ret4));
