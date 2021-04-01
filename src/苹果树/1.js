const memoryData = {
  模块一: 63,
  模块二: 71,
  模块三: 99,
  模块四: 100,
};
const fetchRemoteDateByID = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(memoryData[id]);
    }, 1000);
  });
};
const arr = [
  { memory: 32, isInit: true }, // 初始内存
  { module: "模块一", memory: fetchRemoteDateByID("模块一") },
  { module: "模块二", memory: fetchRemoteDateByID("模块二") },
  { module: "模块三", memory: fetchRemoteDateByID("模块三") },
  { module: "模块四", memory: fetchRemoteDateByID("模块四") },
];

// 计算每个模块的内存增加大小，技术方式：取 memory 差值，如 63-32=31
// 需要得到如下结果 memoryIncrease
async function start(arr) {
  return new Promise(((resolve, reject) => {
    const cache = [32];
    for (let i = 1; i < arr.length; i++) {
      arr[i].memory.then(res => {
        cache[i] = res;
        if (cache.length === arr.length) {
          for (let i = 1; i < cache.length; i++) {
            arr[i].memoryIncrease = cache[i] - cache[i-1];
          }
          resolve(arr);
        }
      });
    }
  }));
}

start(arr).then(ret => console.log(ret));
