console.log(`
********************
B U B B L E  S O R T
********************`);

var bubbleSort = function(arr) {
	let isSorted = false;
	let stopValue = arr.length-1;
	while(!isSorted) {
		isSorted = true;
		for (let i = 0; i < stopValue; i++) {
			if (arr[i] > arr[i+1]) {
				let y = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = y;
				isSorted = false;
			}
		}
		stopValue--;
	}
	return arr;
};


var x = [4,2,4,6,7,3,2,2,2,4,5,76,8,1];

console.log(x);
console.log(bubbleSort(x));