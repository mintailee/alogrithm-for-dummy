import { dijkstra } from "./dijkstras";

const graph: Map<String, Map<String, number>> = new Map();

graph.set("start", new Map<String, number>);
graph.get("start")?.set("a", 5);
graph.get("start")?.set("b", 2);
graph.set("a", new Map<String, number>);
graph.get("a")?.set("c", 2);
graph.get("a")?.set("d", 4);
graph.set("b", new Map<String, number>);
graph.get("b")?.set("a", 8);
graph.get("b")?.set("c", 7);
graph.set("c", new Map<String, number>);
graph.get("c")?.set("fin", 1);
graph.set("d", new Map<String, number>);
graph.get("d")?.set("c", 6);
graph.get("d")?.set("fin", 3);
graph.set("fin", new Map<String, number>);

const costs: Map<String, number> = new Map();
costs.set("a", 5);
costs.set("b", 2);
costs.set("c", Infinity);
costs.set("d", Infinity);
costs.set("fin", Infinity);


const parents: Map<String, String> = new Map();
parents.set("a", "start");
parents.set("b", "start");
parents.set("c", "");
parents.set("d", "");
parents.set("fin", "");

dijkstra(graph, costs, parents);