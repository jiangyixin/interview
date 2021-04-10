function start(routes, source, target) {
  const graph = {};
  for (const [line, route] of Object.entries(routes)) {
    for (const site of route) {
      if (!graph[site]) {
        graph[site] = [];
      }
      graph[site].push(line);
    }
  }
  console.log(graph);
  const res = [];
  function dfs(curSite, path = [], step = 0, visitedLine = new Set(), visitedSite = new Set([source])) {
    // console.log('curSite:', curSite, visitedSite);
    if (curSite === target) {
      console.log('path:', JSON.stringify(path));
      res.push([...path]);
    }
    for (const line of graph[curSite]) {
      // 这条线已经走过了
      if (visitedLine.has(line)) continue;
      visitedLine.add(line);
      for (const site of routes[line]) {
        if (visitedSite.has(site)) continue;
        visitedSite.add(site);
        path.push({ line, site });
        step++;
        dfs(site, path, step, visitedLine, visitedSite);
        visitedSite.delete(site);
        step--;
        path.pop();
      }
      visitedLine.delete(line);
    }
  }
  dfs(source, [{ line: '', site: source }]);
  return res;
}

const routes = {
  a: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 29, 39, 49, 59, 69, 79, 89, 99],
  b: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
  c: [90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
  d: [90, 81, 72, 63, 54, 45, 36, 27, 18, 9],
  e: [2, 12, 22, 32, 42, 52, 63, 74, 76, 78, 79],
  f: [4, 6, 9],
};

const source = 6;
const target = 7;

start(routes, source, target);
