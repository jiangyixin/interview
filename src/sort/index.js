function randomArr (n, l, r) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let _random = Math.round(l + Math.random() * (r - l));
    arr.push(_random)
  }
  return arr;
}

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log('i:', i, ' j:', j);
      if (arr[j] > arr[j+1]) {
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
      console.log('arr:', JSON.stringify(arr));
    }
  }
  return arr;
}

function sort1(arr) {
  let i = arr.length - 1;
  while (i > 0) {
    let pos = 0;
    for (let j = 0; j < arr.length - 1; j++) {
      console.log('i:', i, ' j:', j);
      if (arr[j] > arr[j + 1]) {
        pos = j;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    i = pos;
  }
  return arr;
}

const arr = [5, 9, 6, 7, 2, 3, 8, 3, 5, 9];
const arr1 = [9, 2, 3, 4, 5, 6, 7, 8, 9, 9];

console.log(JSON.stringify(sort1(arr1)));



