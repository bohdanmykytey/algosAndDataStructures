//PRIMITIVE EXAMPLE

// const node1 = {
//     data: 100
// };

// const node2 = {
//     data: 200
// };

// node1.next = node2;

// console.log(node1)

//IMPLEMENTATION 

class Node {
    constructor(data, next = null)  {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor()   {
        this.head = null;
        this.size = 0;
    }
}

//insert first node 

//inster last node

//at an index

//get at a certain index

//remove at index

//clear list

//print list data

