console.log(`
******************
Q U I C K  S O R T
******************`);

var quickSortHelper = function(start, end, pivot) {
	while(start <= end) {
		while(x[start] < pivot) {
			// keep moving until find a value greater than pivot
			start++;
		}

		while (x[end] > pivot) {
			end--;
		}
		if (start <= end) {
			let y = x[start];
			x[start] = x[end];
			x[end] = y;
			start++;
			end--;
		}
	}
	return start;

};

var quickSort = function(start, end) {
	if (start >= end) {
		return;
	}
	let mid = Math.floor((start + end) / 2);
	let pivot = x[mid];
	let index = quickSortHelper(start, end, pivot);
	quickSort(start, index-1);
	quickSort(index, end);
};

var x = [4,2,4,6,7,3,2,2,2,4,5,76,8,1];

console.log(x);
quickSort(0, x.length-1);
console.log(x);