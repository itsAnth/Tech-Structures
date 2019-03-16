console.log(`
*********
Q U E U E
*********`);

class Node {
	constructor(data) {
		this.value = data;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	isEmpty() {
		return this.head == null;
	}

	peek() {
		if (this.head != null) {
			return this.head.value;
		}
	}

	add(data) {
		let newNode = new Node(data);
		if (this.head == null) {
			this.head = newNode;
		}
		if (this.tail != null) {
			this.tail.next = newNode;
		}
		this.tail = newNode;
	}

	remove() {
		if (this.head != null) {
			let val = this.head.value;
			this.head = this.head.next;
			if (this.head == null) {
				this.tail = null;
			}
			return val;
		}
	}
}


var x = new Queue();
x.add(20);
x.add(21);
x.add(25);
x.add(49);

console.log(JSON.stringify(x, null, 4));

console.log(x.remove());
console.log(JSON.stringify(x, null, 4));
