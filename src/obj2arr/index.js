const obj = { 1: 222, 2: 123, 5: 888 };
// [222, 123, null, null, 888, null, null, null, null, null, null, null]

const arr = [];

for (let i = 1; i <= 12; i++) {
  arr.push(obj[i] || null);
}

console.log(arr);
