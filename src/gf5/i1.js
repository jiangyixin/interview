/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
const numBusesToDestination = function(routes, source, target) {
  const graph = {};
  for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < routes[i].length; j++) {
      if (!graph[routes[i][j]]) {
        graph[routes[i][j]] = new Set();
      }
      graph[routes[i][j]].add(i);
    }
  }
  if (!graph[target]) return -1;
  console.log('graph:', graph);

  let path = [];
  let step = 0;
  const queue = [source];
  const visited = new Set([source]);
  while (queue.length) {
    let len = queue.length;
    console.log('queue:', JSON.stringify(queue));
    for (let i = 0; i < len; i++) {
      const index = queue.shift();
      if (!path[step]) {
        path[step] = [];
      }
      path[step].push(index);
      if (index === target) {
        console.log('path:', path);
        return step;
      }
      for (const next of graph[index]) {
        for (const route of routes[next]) {
          if (route === index) continue;
          if (visited.has(route)) continue;
          queue.push(route);
          visited.add(route);
        }
      }
    }
    step++;
  }
}

const routes = [[0, 1, 2], [0, 1, 3], [3, 4, 5], [5, 8, 9], [7, 9], [4, 6, 9]];
const source = 0;
const target = 5;

console.log(numBusesToDestination(routes, source, target));
