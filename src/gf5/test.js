'use strict';

let arr1 = [ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1 ];
const arr2 = [ 1, 2, 3, 4, 5, 6, 7, 2 ];

function start1(arr1) {
  function remove(data, val) {
    const index = data.indexOf(val);
    if (index > -1) {
      data.splice(index, 1);
    }
    return data;
  }
  for (const k of arr2) {
    arr1 = remove(arr1, k);
  }
  // console.log('start1:', JSON.stringify(arr1));
}

function start2(arr1) {
  const obj2 = {};
  for (const k of arr2) {
    if (!obj2[k]) {
      obj2[k] = 1;
    } else {
      obj2[k] = obj2[k] + 1;
    }
  }
  const newArr = [];
  for (const k of arr1) {
    if (obj2[k]) {
      obj2[k] = obj2[k] - 1;
    } else {
      newArr.push(k);
    }
  }
  // console.log('start2:', JSON.stringify(newArr));
}

console.time('test');
for (let i = 0; i < 1000000; i++) {
  // start1([...arr1]);
  start2([...arr1]);
}
console.timeEnd('test');
