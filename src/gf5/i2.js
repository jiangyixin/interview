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

const getCost = function (path) {

}

const matrix = [
  [90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
  [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
  [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
  [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
  [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
  [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
  [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [00, 01, 02, 03, 04, 05, 06, 07, 08, 09],
];

const routes = [[0, 1, 2], [0, 1, 3], [3, 4, 5], [5, 8, 9], [7, 9], [4, 6, 9]];

const source = 3;
const target = 9;

console.log(numBusesToDestination(routes, source, target));
