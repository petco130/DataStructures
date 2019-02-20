class LinkedList {
    constructor(node){
        this.head = node;
        this.tail = node;
        this.length = 1;
    }

    addFirst(node) {
        node.next = this.head;
        this.head = node;
    }

    addLast(node) {
        this.tail.next = node;
        this.tail = node;
    }

    traverse() {
        let currentNode = head;
        let nextNode = head.next;
        while(nextNode){
            console.log(`I'm a node: ${currentNode}`)
            currentNode = nextNode;
            nextNode = currentNode.next;
        }
        console.log("all done!");
    }

    delete(key){
        let prevNode = head;
        let currentNode = head.next;
        if(prevNode.key === key){
            head = currentNode;
            return prevNode;
        }
        
        if(currentNode.key === key){
            head.next = currentNode.next;
            return currentNode;
        }

        while(currentNode){
            prevNode = currentNode;
            currentNode = prevNode.next;
            if(currentNode === key){
                prevNode.next = currentNode.next;
                return currentNode;
            }
        }

        return "No node found"
    }
}

class Node {
    constructor(key, value){
        let next;
        let accessor = key;
        let value = value;
    }
}

module.exports({LinkedList, Node})