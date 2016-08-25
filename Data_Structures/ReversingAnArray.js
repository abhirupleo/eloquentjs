/* the problem statements wants us to create a function to reverse the sequence of
	the array given as argument and store it in a new array. Further it wants us to 
	create a second function that stores the reverse array in the same array given in
	as argument and return it.
*/
// declare a function reverseArray() and take a single argument
function reverseArray(array){
	var reversedarray = [];
	for (var i = 0; i < array.length; i++) {
		reversedarray.unshift(array[i]);
	}
	return reversedarray;
}
// input : console.log(reverseArray([3,2,1,2])); 	output : 2,1,2,3
// declare a function reverseArrayInPlace() and take a single argument in it
function reverseArrayInPlace(array){
	lengthOfArray = array.length;				// get the length of the array
	if(lengthOfArray%2 != 0){
		lengthOfArray--;						// if the length of the array is odd make it even by subtracting one
	}
	// loop through till the middle of the array and exchange the values using temporary variables
	for (var i = 0; i <(lengthOfArray/2); i++) {
		var temp1,temp2;
		temp1 = array[i];
		temp2 = array[(array.length-i-1)];
		array[i] = temp2;
		array[(array.length-i-1)] = temp1;
	}
	return array;
}
// input : console.log(reverseArrayInPlace([3,2,1,2,5])); 	output : 5,2,1,2,3