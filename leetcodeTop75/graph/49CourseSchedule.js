// <==
var canFinish = function (numCourses, prerequisites) {
  const graph = createGraph(numCourses, prerequisites);
  let seen = new Set();
  let seeing = new Set();

  function explore(course) {
    if (seen.has(course)) return true;
    if (seeing.has(course)) return false;

    seeing.add(course);
    for (let neighbor of graph[course]) {
      if (!explore(neighbor)) return false;
    }

    seen.add(course);
    seeing.delete(course);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!explore(i)) return false;
  }
  return true;
};

function createGraph(numCourses, edges) {
  const graph = new Array(numCourses.length).fill([]);
  for (let edge of edges) {
    let [a, b] = edge;
    // a lyhyempi kuin indeksi???
    console.log(a, b, ' = edge');
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
  }
  return graph;
}
