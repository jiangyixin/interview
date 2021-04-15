/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
const numBusesToDestination = function(routes, source, target) {
  const queue = [];
  const visited = new Set();
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

  let step = 0;
  let path = [];
  queue.push(source);
  visited.add(source);

  while (queue.length) {
    let len = queue.length;
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
          if (visited.has(route)) continue;
          queue.push(route);
          visited.add(route);
        }
      }
    }
    step++;
  }
  return -1;
};

const routes = [[0, 1, 2], [0, 1, 3], [3, 4, 5], [5, 8, 9], [7, 9], [4, 6, 9]];

const source = 3;
const target = 9;

console.log(numBusesToDestination(routes, source, target));
