const str1 = 'AbCdeF';

const arr = str1.split('');
const newArr = arr.map(s => {
  return s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase();
});

const str2 = newArr.join('');

// console.log(str2);


const str3 = 'AbcDefGh'.replace(/[a-zA-Z]/g,function(a) {
  return /[a-z]/.test(a) ? a.toUpperCase() : a.toLowerCase();
});

console.log(str3);
