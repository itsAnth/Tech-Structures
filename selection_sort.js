console.log(`
**************************
S E L E C T I O N  S O R T
**************************`);

var selectionSort = function(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		let j = i;
		while(j < arr.length) {
			if (arr[min] > arr[j]) {
				min = j;
			}
			j++;
		}
		let y = arr[min];
		arr[min] = arr[i];
		arr[i] = y;
	}
	return arr;
};

var x = [4,2,4,6,7,3,2,2,2,4,5,76,8,1];

console.log(x);
console.log(selectionSort(x));