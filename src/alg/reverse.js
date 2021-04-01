// 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。
// 如：输入整型 1234，返回字符串“4321”。
// 要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。

const num = 1234;

function reverse(num) {
  let num1 = num / 10;
  let num2 = num % 10;
  console.log(num, num1, num2);
  if(num1 < 1){
    return num2;
  } else {
    num1 = Math.floor(num1);
    return `${num2}${reverse(num1)}`;
  }
}

console.log(reverse(num));

function Foo() {
  Foo.a = function() {
    console.log(1)
  }
  this.a = function() {
    console.log(2)
  }
}
Foo.prototype.a = function() {
  console.log(3)
}
Foo.a = function() {
  console.log(4)
}
Foo.a(); // 4
let obj = new Foo();
obj.a(); // 2
Foo.a(); // 1
