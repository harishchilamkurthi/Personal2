

function printReverse(arr){
	for(var i=arr.length - 1; i>=0; i--)
	{
		console.log(arr[i]);
	}
};

printReverse([3,2,4,5,6]);

// isUniform starts
function isUniform(arr){
	var first = arr[0];
	for(var i=1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
};
isUniform();

// sumArray starts here
function sumArray(arr){
	var total=0;
	arr.forEach(function(element){
		totol += element;
	});
	return totol;
}

sumArray();

// ** max() **

function max(arr){
	var max = arr[0];
	for(var i=1;i<arr.length; i++){
		if(arr[i]>max){
			max = arr[i];
		}
	}
	return max;
};

	max([3,12,5,6,5]);