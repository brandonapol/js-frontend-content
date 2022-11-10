// follow your Google Sheets pages for time and space complexity
// Asymptotic analysis

// Common data STRUCTURES
// Arrays
// Objects
// Now what?

// User defined data structures
// Stacks
// Queues
// Linked Lists

// How does an array work under the hood? (See image)
// Asymptotic analysis of accessing array
let arr = [23, 4, 6, 15, 5, 7]

// Constant time
let indexing = arr[3] // O(1): This is instantaneous! for time and space

// Linear time O(n) and constant space O(1)
for (let i = 0; i < arr.length; i++) {
    console.log(i) // The loop means that if a list is 5 items long, it loops 5
    // times; if it's 5000 items long, it loops 5000 times
}

let arr_copy = [...arr] // Linear time and linear space (both are O(n) )

// Let's make it worse
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        console.log(`i is ${i}, j is ${j}`)
    }
} // This will run arr.length ** 2 times
// if arr.length is 5, it will run 25 times; if it's 5000, it will run 25,000,000 times, which is a lot

// We could make it... EVEN WORSER but we won't because it can be a lot for your computer. Which is why we don't like to do it.

//! Stacks!
// ** Stacks ** as the name suggests is a data structure that allows for data to follow the Last In First Out priciple(LIFO). Think of a stack of pancakes for example. To get the first pancake you would start with the top and go down.

// Searching through a stack will be Linear Time O(n) - Constant Space O(1)
// Selecting the last item will be done in Constant Time O(1) - Constant Space O(1)
// Adding to the stack should take Constant Time O(1) - Constant Space O(1)
// ** Queues ** are similar but in this case follow the First In First Out principle(FIFO). Think of this as a line in a black friday sale. The first person camped out for the big screen tv is the first to get it.

// Searching through a queue will be Linear Time O(n) - Constant Space O(1)
// Selecting the first item will be done in Constant Time O(1) - Constant Space O(1)
// Adding to the queue should take Constant Time O(1) - Constant Space O(1)

let stack = [];
stack.push(10);
stack.push(20);
stack.push(30);
// accessing the last value
// let last_item = stack.pop()
// console.log(last_item)
// searching stack in linear time and space - O(n) and constant space O(1)
for (let i = 0; i < stack.length; i++) {
    console.log(stack[i])
}


//! Queue
let queue = [];
queue.push(1);
queue.push(2);
queue.push(3);

// Accessing the first value (in front of the queue)
// Constant time and constant space O(1)
let first_item = queue.pop(0);

// These things are not tremendously important at this junction, but if you
// decide to work with operating systems or 'lower level' languages like C or C++
// you'll interact with them plenty

class LinkedListNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element){
        // create new node
        let node = new LinkedListNode(element);
        // store current node
        let current;

        // if list is empty, add the element and make it the head
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            // iterate to end of list
            while (current.next) {
                current = current.next;
            }

            // add node after it gets to the end of the existing list of nodes
            current.next = node;
        }
        this.size++;
    }

    printList(){
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.value + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}

let myLL = new LinkedList();
myLL.add(5)
myLL.add(8)
myLL.add(3)
myLL.printList()

//! There are also methods for inserting at certain indices, removing elements, anything you might do with a regualar array
// Benefits are it's better for memory management, downside is it can be slow because any change of the list requires looping... O(n)