class Node{
    next = null;
    value = null;
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    insert(_value){
        let newNode = new Node(_value);
        if (head === null){
            // if no head node, then new node is head.
            this.size++;
            this.head = newNode;
            return;
        }
        // chain the head node to the new node
        newNode.next = this.head;
        // update the current head node
        this.head = newNode;
        this.size++;
    }
    
}