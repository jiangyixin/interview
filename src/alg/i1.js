const arr = [...Array(10000).keys()];

const ret = arr.filter(i => {
  return String(i) === String(i).split('').reverse().join('');
});

console.log(JSON.stringify(ret));
