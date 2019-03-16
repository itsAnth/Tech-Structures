console.log(`
***********************
L I N K E D 	L I S T
***********************`);

class Node {
	constructor(data) {
		this.value = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	add(data) {
		if (this.head == null) {
			this.head = new Node(data);
		} else {
			let currentNode = this.head;
			while (currentNode.next != null) {
				currentNode = currentNode.next;
			}
			currentNode.next = new Node(data);
		}
	}

	prepend(data) {
		let newHead = new Node(data);
		newHead.next = this.head;
		this.head = newHead;
	}

	remove(data) {
		if (this.head != null) {
			if (this.head.value == data) {
				this.head = this.head.next;
			} else {
				let currentNode = this.head;
				while(currentNode.next != null) {
					if (currentNode.next.value == data) {
						currentNode.next = currentNode.next.next;
					}
					currentNode = currentNode.next;
				}
			}
		}
	}

	reverse() {
		if (this.head != null) {
			let prevNode = null;
			let currentNode = this.head;
			let nextNode;
			while(currentNode != null) {
				nextNode = currentNode.next;
				currentNode.next = prevNode;
				prevNode = currentNode;
				currentNode = nextNode;
			}
			this.head = prevNode;
		}
	}
}

var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.prepend(5);
list.remove(5);
list.remove(3);
list.reverse();

console.log(JSON.stringify(list, null, 4));