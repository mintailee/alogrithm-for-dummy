const graph: Map<String, Map<String, number>> = new Map();

graph.set("start", new Map());
graph.get("start")?.set("a", 6);
graph.get("start")?.set("b", 2);
graph.set("a", new Map());
graph.get("a")?.set("fin", 1);
graph.set("b", new Map());
graph.get("b")?.set("a", 3);
graph.get("b")?.set("fin", 5);
graph.set("fin", new Map());

const costs: Map<String, number> = new Map();
costs.set("a", 6);
costs.set("b", 2);
costs.set("fin", Infinity);

const parents: Map<String, String> = new Map();
parents.set("a", "start");
parents.set("b", "start");
parents.set("fin", "");

const lowestCostNode = (
  costs: Map<String, number>,
  processed: String[]
): String => {
  let lowest: { key: String; value: number } = {
    key: "default",
    value: Infinity,
  };
  for (const [cost, value] of costs) {
    if (processed.find((v) => v === cost)) {
      continue;
    }
    if (value !== Infinity && value <= lowest.value) {
      lowest.key = cost;
      lowest.value = value;
    }
  }
  //   if (lowest.value === Infinity) {
  //     throw Error("Seem like we don't have any lowest not to calculated");
  //   }
  return lowest.key;
};

export const dijkstra = (
  graph: Map<String, Map<String, number>>,
  costs: Map<String, number>,
  parents: Map<String, String>
) => {
  const processed: String[] = [];
  let node = lowestCostNode(costs, processed);
  while (node !== "default" && node !== "fin") {
    console.log(node);
    const cost = costs.get(node);
    const neighbors = graph.get(node);
    if (!neighbors || !cost) {
      throw Error("something went wrong with the lowest node!");
    }
    for (const [key, value] of neighbors) {
      let newCost = cost + value;
      if (newCost < (costs.get(key) as number)) {
        costs.set(key, newCost);
        parents.set(key, node);
      }
    }
    processed.push(node);
    node = lowestCostNode(costs, processed);
  }

  console.log("graph: ", graph);
  console.log("cost: ", costs);
  console.log("parents: ", parents);
};

dijkstra(graph, costs, parents);
