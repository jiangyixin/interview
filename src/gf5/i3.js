function getCost(line, source, target) {
  const route = routes[line];
  return Math.abs(route.indexOf(target) - route.indexOf(source));
}

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
  // console.log(graph);
  const res = [];
  function dfs(curSite, cost = 0, path = [], visitedLine = new Set(), visitedSite = new Set([source])) {
    if (curSite === target) {
      // console.log('path:', path);
      res.push([cost, ...path]);
    }
    if (path.length >= 3) return;
    for (const line of graph[curSite]) {
      // 这条线已经走过了
      if (visitedLine.has(line)) continue;
      visitedLine.add(line);
      for (const site of routes[line]) {
        if (visitedSite.has(site)) continue;
        const curCost = getCost(line, curSite, site);
        visitedSite.add(site);
        path.push({ line, on: curSite, off: site });
        cost += curCost;
        dfs(site, cost, path, visitedLine, visitedSite);
        visitedSite.delete(site);
        path.pop();
        cost -= curCost;
      }
      visitedLine.delete(line);
    }
  }
  dfs(source, 0, []);
  return res.sort((a, b) => a.length - b.length);
}

const routes = {
  1: ['罗湖', '国贸', '老街', '大剧院', '科学馆', '华强路', '岗厦', '会展中心', '购物公园', '香蜜湖', '车公庙', '竹子林', '侨城东', '华侨城',
    '世界之窗', '白石洲', '高新园', '深大', '桃园', '大新', '鲤鱼门', '前海湾', '新安', '宝安中心', '宝体', '坪洲', '西乡', '固戍', '后瑞', '机场东'],
  2: ['赤湾', '蛇口港', '海上世界', '水湾', '东角头', '湾厦', '海月', '登良', '后海', '科苑', '红树湾', '世界之窗', '侨城北', '深康','安托山', '侨香',
    '香蜜', '香梅北', '景田', '莲花西', '福田', '市民中心', '岗厦北', '华强北', '燕南', '大剧院', '湖贝', '黄贝岭', '新秀', '莲塘口岸', '仙湖路', '莲塘'],
  3: ['福保', '益田', '石厦', '购物公园', '福田', '少年宫', '莲花村', '华新', '通新岭', '红岭', '老街', '晒布', '翠竹', '田贝', '水贝', '草埔', '布吉',
    '木棉湾', '大芬', '丹竹头', '六约', '塘坑', '横岗', '永湖', '荷坳', '大运', '爱联', '吉祥', '龙城广场', '南联', '双龙'],
  4: ['福田口岸', '福民', '会展中心', '市民中心', '少年宫', '莲花北', '上梅林', '民乐', '白石龙', '深圳北', '红山', '上塘', '龙胜', '龙华', '清湖',
    '清湖北', '竹村', '茜坑', '长湖', '观澜', '松元厦', '观澜湖', '牛湖'],
  5: ['赤湾', '荔湾', '铁路公园', '妈湾', '前湾公园', '前湾', '桂湾', '前海湾', '临海', '宝华', '宝安中心', '翻身', '灵芝', '洪浪北', '兴东', '留仙洞',
    '西丽', '大学城', '塘朗', '长岭陂', '深圳北', '民治', '五和', '坂田', '杨美', '上水径', '下水径', '长龙', '布吉', '百鸽笼', '布心', '太安', '怡景', '黄贝岭'],
  6: ['科学馆', '通新岭', '体育中心', '八卦岭', '银湖', '翰岭', '梅林关', '深圳北', '红山', '上芬', '元芬', '阳台山东', '官田', '上屋', '长圳', '凤凰城',
    '光明大街', '光明', '科学公园', '楼村', '红花山', '公明广场', '合水口', '薯田埔', '松岗公园', '溪头', '松岗'],
  7: ['西丽湖', '西丽', '茶光', '珠光', '龙井', '桃源村', '深云', '安托山', '农林', '车公庙', '上沙', '沙尾', '石厦', '皇岗村', '福民', '皇岗口岸',
    '福邻', '赤尾', '华强南', '华强北', '华新', '黄木岗', '八卦岭', '红岭北', '笋岗', '洪湖', '田贝', '太安'],
  8: ['莲塘', '梧桐山南', '沙头角', '海山', '盐田港西', '深外高中', '盐田路'],
  9: ['前湾', '梦海', '怡海', '荔林', '南油西', '南油', '南山书城', '深大南', '粤海门', '高新南', '红树湾南', '深湾', '深圳湾公园', '下沙', '车公庙', '香梅',
    '景田', '梅景', '下梅林', '梅村', '上梅林', '孖岭', '银湖', '泥岗', '红岭北', '园岭', '红岭', '红岭南', '鹿丹村', '人民南', '向西村', '文锦'],
  10: ['福田口岸', '福民', '岗厦', '莲花村', '冬瓜岭', '孖岭', '雅宝', '南坑', '光雅园', '五和', '坂田北', '贝尔路', '华为', '岗头', '雪象',
    '甘坑', '凉帽山', '上李朗', '木古', '华南城', '禾花', '平湖', '双拥街'],
  11: ['福田', '车公庙', '红树湾南', '后海', '南山', '前海湾', '宝安', '碧海湾', '机场', '机场北', '福永', '桥头', '塘尾', '马安山', '沙井', '后亭', '松岗', '碧头'],
};

const source = '兴东';
const target = '白石洲';

const plans = start(routes, source, target);
for (const plan of plans) {
  console.log(JSON.stringify(plan));
}
