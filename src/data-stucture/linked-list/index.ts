// linked-list

class NodeLL {
    next: NodeLL | undefined;
    value: number;
    
    constructor(value: number){
        this.next = undefined;
        this.value = value;
    }
}

class LinkedList {
    head: NodeLL;
    tail: NodeLL;

    constructor(node: NodeLL) {
        this.head = node;
        this.tail = node;
    }

    /// add in the beginning
    prepend(node: NodeLL) {
        node.next = this.head;
        this.head = node;
    }

    // add in the end
    append(node: NodeLL) {
        if(this.head?.next === undefined) {
            this.tail = node;
            this.head.next = this.tail;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    // the same with forEach
    loop(accept: (node: NodeLL) => void){
        let start = this.head;
        while(start !== undefined) {
            accept(start);
            if(start.next === undefined) {
                return;
            }
            start = start.next;
        }
    }    
}

function run() {
    const list = new LinkedList(new NodeLL(6));
    list.append(new NodeLL(4));
    list.append(new NodeLL(3));
    list.prepend(new NodeLL(2));
    list.prepend(new NodeLL(5));

    list.loop((node) => console.log(node.value));
}

run();