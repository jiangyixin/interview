// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

const arr = [0, 0, 0, 1, 0, 3, 12];

// let num = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] === 0) {
//     arr.splice(i, 1);
//     num++;
//   }
// }
// arr.push(...new Array(num).fill(0));
//
// console.log(arr);

function moveZeroToLast(arr) {
  let index = 0;
  for (let i = 0, length = arr.length; i < length; i++) {
    if (arr[i] === 0) {
      index++;
    } else if (index !== 0) {
      console.log(i, arr[i], arr[i - index]);
      arr[i - index] = arr[i];
      arr[i] = 0;
      console.log(arr);
    }
  }
  return arr;
}

console.log(moveZeroToLast(arr));
