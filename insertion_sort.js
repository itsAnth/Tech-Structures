console.log(`
************************
I S E R T I O N  S O R T
************************`);

var insertionSort = function(arr) {
	for (let i = 1; i < arr.length; i++) {
		let j = i;
		while (j > 0 && arr[j] < arr[j-1]) {
			let y = arr[j];
			arr[j] = arr[j-1];
			arr[j-1] = y;
			j--;
		}
	}
	return arr;
};

var x = [4,2,4,6,7,3,2,2,4,5,2,76,8,1];

console.log(x);

console.log(insertionSort(x));