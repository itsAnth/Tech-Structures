console.log(`
*******
H E A P
*******`);

class MinHeap {
	constructor(capacity = 10) {
		this.items = new Array(capacity);
		this.size = 0;
	}

	_getParentIndex(childIndex) {
		return parseInt((childIndex - 1)/2);
	}

	_getLeftChildIndex(parentIndex) {
		return parseInt((2*parentIndex) +1);
	}

	_getRightChildIndex(parentIndex) {
		return (2*parentIndex) +2;
	}

	_hasLeftChild(index) {
		return this._getLeftChildIndex(index) < this.size;
	}

	_hasRightChild(index) {
		return this._getRightChildIndex(index) < this.size;
	}

	_hasParent(index) {
		return this._getParentIndex(index) >= 0;
	}

	leftChild(index) {
		return this.items[this._getLeftChildIndex(index)];
	}

	rightChild(index) {
		return this.items[this._getRightChildIndex(index)];
	}

	parent(index) {
		return this.items[this._getParentIndex(index)];
	}

	swap(indexOne, indexTwo) {
		let temp = this.items[indexOne];
		this.items[indexOne] = this.items[indexTwo];
		this.items[indexTwo] = temp;
	}

	ensureExtraCapacity() {
		if (this.size == this.items.length) {
			let c = new Array(this.items.length);
			this.items = this.items.concat(c);
		}
	}

	peek() {
	    if (this.size != 0) {
	      return this.items[0];
	    }
	}

	poll() {
		if(this.size !=0) {
	      // remove root and replace with last node
	      let item = this.items[0];
	      this.items[0] = this.items[this.size -1];
	      this.items[this.size-1] = null;
	      this.size--;
	      this.heapifyDown();
	      return item;
	    }
	}

	add(data) {
		this.ensureExtraCapacity();
		this.items[this.size] = data;
		this.size++;
		this.heapifyUp();
	}

	heapifyUp() {
		let index = this.size -1;
		// start at the last value
		while(this._hasParent(index) && this.parent(index) > this.items[index]) {
			this.swap(this._getParentIndex(index), index);
			index = this._getParentIndex(index);
			if (this.rightChild(index) < this.leftChild(index)) {
				this.swap(this._getRightChildIndex(index), this._getLeftChildIndex(index));
			}
		}
	}

	heapifyDown() {
		let index = 0;
		// start at the first value
		while (this._hasLeftChild(index)) {
			let smallChildIndex = this._getLeftChildIndex(index);
			if (this._hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
				smallChildIndex = this._getRightChildIndex(index);
			}
		    if (this.items[index] < this.items[smallChildIndex]) {
		    	break;
		    } else {
		    	this.swap(index, smallChildIndex);
		        index = smallChildIndex;
		    }
		}
	}
}

var x = new MinHeap();
var f = [16, 15, 20, 17, 10];
f.forEach((e)=> {
  x.add(e);
});

x.poll();
x.add(1);

console.log(x.peek());