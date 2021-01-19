// PRIMITIVE EXAMPLE

// const node1 = {
//     data: 100
// };

// const node2 = {
//     data: 200
// };

// node1.next = node2;

//IMPLEMENTATION 

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const node1 = new Node(100)

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert head
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //print list data
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }

    }

    //inster last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        //if empty => make it head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    //at an index
    inserAt(data, index) {
        //if index is out of range
        if (index > 0 && index > this.size) {
            return 'Insert Index is > this.size'
        }

        //if first index then set to head
        if (index === 0) {
            this.insertFirst(data)
        }

        const node = new Node(data);
        let current, previous;

        //set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; //node before index
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    //get at a certain index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
                console.log(current.data)
            }
            count++;
            current = current.next;
        }

        return null;
    }

    //remove at index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previus;
        let count = 0;

        //remove first
        if (index == 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                previus = current.next;
            }

            previus.next = current.next;
        }

        this.size--
    }
    
    //clear list
    clearList() {
        this.head = null;//class onlu knows the head, removing it (the parent node) dumps everything (it's children)
        this.size = 0;
    }
}









const linkedList = new LinkedList();

linkedList.insertFirst(100)
linkedList.insertFirst(200)
linkedList.insertFirst(300)
linkedList.insertLast(400)
linkedList.inserAt(500, 4)

// linkedList.removeAt(2)
// linkedList.getAt(10)
linkedList.printListData()

linkedList.clearList()
linkedList.printListData()