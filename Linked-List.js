class Node{
    next = null;
    value = null;
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

export default class LinkedList{
    /**
     * A singly linked list of nodes supporting adding, removing, 
     */
    #head;
    #size;
    constructor(){
        this.#head = null;
        this.#size = 0;
    }
    /**
     * @brief adds the passed in element to the beginning of the linked list.
     * @timeComplexity O(1)
     * @param {*} _value the passed in value to add 
     */
    insert(_value){
        let newNode = new Node(_value);
        if (this.#head === null){
            // if no head node, then new node is head.
            this.#size++;
            this.#head = newNode;
            return;
        }
        // chain the head node to the new node
        newNode.next = this.#head;
        // update the current head node
        this.#head = newNode;
        this.#size++;
    }
    /**
     * @brief Removes the first occurrence of a node with the passed in value from the LinkedList.
     * @param {E} _value the value to remove from the LinkedList.
     * @returns a boolean indicating whether the removal was successful or not.
     */
    remove(_value){
        let current = this.#head;
        if (this.#head === null){
            // no nodes to remove in the linked list.
            return false;
        }
        if (this.#head.value === _value){
            // if we are remove the head node, then just
            // update the head pointer
            this.#head = this.#head.next;
            this.#size--;
            return true;
        }
        while (current.next!=null){
            // traverse the LL.
            if (current.next.value === _value){
                // if the next node is the one to remove, then
                // make out current node point to its next;
                current.next = current.next.next;
                this.#size--;
                return true;
            }
            // update current pointer.
            current = current.next;
        }
        return false;
    }

    /**
     * @brief checks if the given value is within the linked list
     * @param {E} _value the passed in generic value.
     * @returns a boolean indicating if the value is within the linked list or not.
     */
     contains(_value){
        let current = this.#head;
        while (current!=null){
            // traverse the LL
            if (current.value === _value){
                //if value is found, return true.
                return true;
            }
            // update current pointer.
            current = current.next;
        }
        // did not find the value
        return false;
    }
    /**
     * @brief Gets the size of the linked list.
     * @returns an int representing the size of the linked list.
     */
    size(){
        return this.#size;
    }

    


}