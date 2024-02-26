// linked-list

class Node {
    constructor(value){
        this.next = null;
        this.value = value;
    }
}


class LinkedList {
    constructor(node) {
        this.head = node;
        this.tail = node;
    }

    // add to the end
    append(node) {
        if(this.head.next == null) {
            this.tail = node;
            this.head.next = this.tail;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    loop(){
        let start = this.head;
        while(start != undefined) {
            console.log(start.value);
            start = start.next;
        }
    }    
}

function run() {
    const list = new LinkedList(new Node(6));
    list.append(new Node(4));
    list.append(new Node(3));
    list.append(new Node(2));
    list.append(new Node(5));

    list.loop();
}

run();