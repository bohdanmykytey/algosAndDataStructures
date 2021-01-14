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