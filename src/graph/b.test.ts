import { dijkstra } from "./dijkstras";

const graph: Map<String, Map<String, number>> = new Map();

graph.set("start", new Map());
graph.get("start")?.set("a", 10);
graph.set("a", new Map());
graph.get("a")?.set("b", 20);
graph.set("b", new Map());
graph.get("b")?.set("c", 1);
graph.get("b")?.set("fin", 30);
graph.set("c", new Map());
graph.get("c")?.set("a", 1);
graph.set("fin", new Map());


const costs: Map<String, number> = new Map();
costs.set("a", 10);
costs.set("b", Infinity);
costs.set("c", Infinity);
costs.set("fin", Infinity);

const parents: Map<String, String> = new Map();
parents.set("a", "start");
parents.set("b", "");
parents.set("c", "");
parents.set("fin", "");
dijkstra(graph, costs, parents);