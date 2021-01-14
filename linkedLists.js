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

        //if empty make it head
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
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        current = this.head;
    }
}




//get at a certain index

//remove at index

//clear list



const linkedList = new LinkedList();

linkedList.insertFirst(100)
linkedList.insertFirst(200)
linkedList.insertFirst(300)
linkedList.insertLast(400)

linkedList.printListData()