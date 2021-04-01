
class LazyManClass {
  constructor(name) {
    this.taskList = [];
    this.name = name;
    console.log(`Hi I an ${name}`);
    setTimeout(() => {
      this.next();
    }, 0);
  }
  next() {
    const fn = this.taskList.shift();
    fn && fn();
  }
  eat(name) {
    const fn = ((n) => {
      return () => {
        console.log(`I am eating ${n}`)
        this.next();
      }
    })(name);
    this.taskList.push(fn);
    return this;
  }
  sleep(time) {
    const fn = ((t) => {
      return () => {
        setTimeout(() => {
          console.log(`等待了${t}秒...`)
          this.next();
        }, t * 1000);
      }
    })(time);
    this.taskList.push(fn);
    return this;
  }
  sleepFirst(time) {
    const fn = ((t) => {
      return () => {
        setTimeout(() => {
          console.log(`等待了${t}秒...`)
          this.next();
        }, t * 1000);
      }
    })(time);
    this.taskList.unshift(fn);
    return this;
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

// LazyMan('Tony').eat('lunch');
// Hi I am Tony
// I am eating lunch

// LazyMan('Tony').sleep(3).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

// LazyMan('Tony').eat('lunch').sleep(3).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(3).sleep(3).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
