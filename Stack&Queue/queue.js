// program to implement queue data structure

class Queue {
    constructor() {
        this.items = [];
        this.maxSize=10;
    }
    
    // add element to the queue
    enqueue(element) {
        return this.items.push(element);
    }
    
    // remove element from the queue
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }
    
    // view the front element
    peek() {
        return this.items[0];
    }
    
    // check if the queue is empty
    isEmpty(){
       return this.items.length == 0;
    }

    // check if the queue is full
    isFull(){
        return this.items.length == this.maxSize;
     }

    // the size of the queue
    size(){
        return this.items.length;
    }
 
    // empty the queue
    clear(){
        this.items = [];
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
queue.enqueue(9);
console.log(queue.items);
console.log(queue.isFull());

queue.dequeue();
console.log(queue.items);

console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());

queue.clear();
console.log(queue.items);

console.log(queue.isEmpty());