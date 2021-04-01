// 请用 es6 实现发布订阅模式

// 代码提示
class Event {
  arr = [];
  on(cb) {
    this.arr.push(cb);
  }
  emit(...args) {
    this.arr.forEach(cb => {
      cb(...args);
    })
  }
  off(cb) {
    this.arr = this.arr.filter(item => item !== cb);
  }
}

// 需要通过以下测试
const exampleEvent = new Event();
const foo = (x, y) => {
  console.log(x, y);
};
const bar = (x, y) => {
  console.log(y, x);
};
exampleEvent.on(foo);
exampleEvent.on(bar);
exampleEvent.emit(1, 2); //内部执行 foo(1,2); bar(1,2);
// 1,2
// 2,1
exampleEvent.off(foo);
exampleEvent.emit(1, 2);
// 2,1
