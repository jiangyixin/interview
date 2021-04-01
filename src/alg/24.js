const map = {
  A: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 14,
};

const method = ['+', '-', '*', '/'];

function calc(arr) {
  let str = '';

  for (let i = 1; i < arr.length; i++) {
    str = arr[0];
    let ret = arr[0];
    for (let j = 0; j < method.length; j++) {
      ret = eval(`${ret}${method[j]}${arr[i]}`);
      str += `${method[j]}${arr[i]}`;
    }
    console.log('ret:', ret, ' srt:', str);
    if (ret === 24) {
      return str;
    }
  }
  return 'NONE';
}

console.log(calc([1, 2, 3, 4]));
