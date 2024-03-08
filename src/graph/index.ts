// It works like the Queue
// Assumption: You need to find the mango seller for you business, and Facebook is the good place so far
// Your closed Friend: Alice, Bob, Eric
/**
 * In case we don't have any
 * Your Alice friend: Tie, Fred
 * Your Bob fried: Steve, Fred
 * Your Eric friend: Tom, Cat
 */
const isSeller = (name: String): boolean => {
  return name === "cat";
};

const graph: Map<String, String[]> = new Map();
export const implementGraph = (graph: Map<String, String[]>): boolean => {
  console.log(graph);
  const searched = new Map();
  while (queue.length !== 0) {
    console.log(queue);
    const person: String = queue[0];
    queue.shift();
    if (searched.get(person) == undefined) {
      if (isSeller(person)) {
        console.log("Find out " + person + " is a seller");
        console.log(searched);
        return true;
    } else {
        queue.push(...(graph.get(person) as String[]));
        searched.set(person, person.toString());
      }
    } else {
      searched.set(person, `${person.toString()} 2 times`)
    }
  }
  return false;
};

graph.set("you", ["alice", "bob", "eric"]);
graph.set("alice", ["tie", "fred"]);
graph.set("bob", ["steve", "fred"]);
graph.set("eric", ["tom", "cat"]);
graph.set("tie", []);
graph.set("fred", []);
graph.set("steve", []);
graph.set("tom", []);
graph.set("cat", []);

const queue: String[] = [];
// queue.push(...(graph.get("you") as String[]));


console.log(implementGraph(graph));
