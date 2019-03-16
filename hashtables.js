console.log(`
*******************
H A S H T A B L E S
*******************`);

function isPrime (num) {
  if (num <= 1) {
    return false;
  } else if (num <= 3) {
    return true;
  } else if (num%2 === 0 || num%3 === 0) {
    return false;
  }
 
  let i = 5;
  while (i*i <= num) {
    if (num%i === 0 || num%(i+2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

function largestPrime(num) {
  if (num <=2) {
    return 2;
  } else {
    let currentNum = num;
    while(currentNum >= 3) {
      if (isPrime(currentNum)) {
        return currentNum;
      }
      currentNum--;
    }
  }
}


class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

class Node {
	constructor(key, data) {
		this.value = data;
		this.next = null;
		this.key = key;
	}
}

class Hashtable {
	constructor(capacity = 100) {
		this.table = new Array(capacity);
	}

	computeHash(string) {
		let largePrime = largestPrime(this.table.length);
		let total = 0;
		for (let i = 0; i < string.length; i ++) {
			total += largePrime*total + string.charCodeAt(i);
		}
		return total % this.table.length;
	}

	put(key, data) {
		let indexPos = this.computeHash(key);
		let newNode = new Node(key, data);
		if (this.table[indexPos] == undefined) {
			this.table[indexPos] = newNode;
		} else {
			newNode.next = this.table[indexPos];
			this.table[indexPos] = newNode;
		}
	}

	remove (key) {
		let indexPos = this.computeHash(key);
		let currentNode = this.table[indexPos];
		if(currentNode != null) {
			if (currentNode.key == key) {
				// the key is at the head
				this.table[indexPos] = currentNode.next;
			} else {
				while(currentNode.next != null) {
					if(currentNode.next.key == key) {
						currentNode.next = currentNode.next.next;
						break;
					}
					currentNode = currentNode.next;
				}
			}
		}
	}

	get (key) {
		let indexPos = this.computeHash(key);
		let currentNode = this.table[indexPos];
		while(currentNode != null) {
			if(currentNode.key == key) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}
	}
}


let hashT = new Hashtable(40);
hashT.put("A", 25);
hashT.put("A", 26);
hashT.put("B", 10);
hashT.put("B", 1);
hashT.put("C", "Hi");
hashT.remove("A");
hashT.remove("A");

console.log(JSON.stringify(hashT.table, null, 4));