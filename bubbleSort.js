/**
 * [bubbleSort]
 * @author Swiminsky
 * @param  {[type]} receive an array
 * @return {[type]} return the sorted array
 */
var bubbleSort = function (arr) {
	if (!(arr instanceof Array)) {
		throw new Error("Please deliver an array as the parameter");
	}
	var i = arr.length, j, tem;
	while (i) {
		for(j = 0; j < i-1; j++) {
			if (typeof arr[j] !== 'number') {
				throw new Error("Please make sure the element's type within the array");
			}
			if (arr[j] > arr[j+1]) {
				tem = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = tem;
			}
		}
		i--;
	}
	return arr;
};   
