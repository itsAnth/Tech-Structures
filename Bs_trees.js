console.log(`
*********************************
B I N A R Y  S E A R C H  T R E E
*********************************`);

class Node {
	constructor(data) {
		this.value = data;
		this.left = null;
		this.right = null;
	}

	add(data) {
		if (this.value == undefined) {
			this.value = data;
		} else {
			if (this.value < data) {
				// it should go on the right
				if (this.right == null) {
					// if it is null, add it
					this.right = new Node(data);
				} else {
					// call function again
					this.right.add(data);
				}
			} else {
				// on the left
				if (this.left == null) {
					this.left = new Node(data);
				} else {
					this.left.add(data);
				}
			}
		}
	}

	remove(data) {
		if (this.value == data) {
			// only handles case when head is the value]
			this.value = undefined;
			this.left = null;
			this.right = null;
		} else {
			if (this.value < data) {
				// it should go on the right
				if (this.right.value == data) {
					this.right = null;
				} else {
					this.right.remove(data);
				}
			} else {
				// on the left
				if (this.left.value == data) {
					this.left = null;
				} else {
					this.left.remove(data);
				}
			}
		}
	}

	inOrder() {
		// should print left, parent, right
		if (this.left != null) {
			this.left.inOrder();
		}
		console.log(this.value);
		if (this.right != null) {
			this.right.inOrder();
		}
	}

	preOrder() {
		// parent, left, right
		console.log(this.value);
		if (this.left != null) {
			this.left.preOrder();
		}
		if (this.right != null) {
			this.right.preOrder();
		}
	}

	postOrder() {
		// left, right, parent
		if (this.left != null) {
			this.left.postOrder();
		}
		if (this.right != null) {
			this.right.postOrder();
		}
		console.log(this.value);
	}

	breadth() {
		// left to right on tree
		let q = [this];
		while(q.length) {
			if (q[0].left != null) {
				q.push(q[0].left);
			}
			if (q[0].right != null) {
				q.push(q[0].right);
			}
			console.log(q[0].value);
			q.shift();
		}
	}

	min() {
		// print the left most value in the tree
		if (this.left != null) {
			this.left.min();
		} else {
			console.log(this.value);
		}
	}

	max() {
		// print the right most value in the tree
		if (this.right != null) {
			this.right.max();
		} else {
			console.log(this.value);
		}
	}
}


let x = new Node(10);

x.add(5);
x.add(14);
x.add(7);
x.add(6);
x.add(8);
x.add(13);
x.add(18);
// x.remove(10);
// x.add(13);
// x.add(9);
//x.inOrder();
//x.preOrder();
//x.postOrder();
//x.min();
//x.max();
x.breadth();

//console.log(JSON.stringify(x, null, 4));