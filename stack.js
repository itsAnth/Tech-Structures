console.log(`
*********
S T A C K
*********`);

class Node {
	constructor(data) {
		this.value = data;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
	}

	isEmpty() {
		return this.top == null;
	}

	peek() {
		if (this.top != null) {
			return this.top.value;
		}
	}

	push(data) {
		let newTop = new Node(data);
		newTop.next = this.top;
		this.top = newTop;
	}

	pop() {
		if (this.top != null) {
			let val = this.top.value;
			this.top = this.top.next;
			return val;
		}
	}
}

var w = new Stack();
w.push(3);
w.push(2);
w.push(5);
w.push(7);
console.log(w.pop());
console.log(w.pop());
console.log(JSON.stringify(w, null, 4))