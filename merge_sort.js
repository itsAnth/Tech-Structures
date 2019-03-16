console.log(`
******************
M E R G E  S O R T
******************`);

var merge = function(arr1, arr2) {
	let temp = [];
	while(arr1.length > 0 && arr2.length > 0) {
		if(arr1[0] > arr2[0]) {
			temp.push(arr2[0]);
			arr2.shift();
		} else {
			temp.push(arr1[0]);
			arr1.shift();
		}
	}

	while(arr1.length) {
		temp.push(arr1[0]);
		arr1.shift();
	}

	while(arr2.length) {
		temp.push(arr2[0]);
		arr2.shift();
	}

	return temp;
};

var mergeSort = function(arr) {
	if (arr.length == 1) {
		return arr;
	}
	let mid = Math.floor(arr.length/2);
	let arr1 = arr.slice(0, mid);
	let arr2 = arr.slice(mid);
	arr1 = mergeSort(arr1);
	arr2 = mergeSort(arr2);

	return merge(arr1, arr2);
};


var x = [4,2,4,6,7,3,2,2,2,4,5,76,8,1];

console.log(x);

console.log(mergeSort(x));
