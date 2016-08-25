/* the problem statement wants us to create a function that converts an array 
	given as argument to a list. Further we are supposed to create another function 
	that converts a list to an array. We are also supposed to create a function called
	prepend that adds an element to the start of the list and one function called nth 
	that returns the element at the nth position in the list.
*/
// declare a variable called arrayToList
function arrayToList(array){
	var list = null;	// declare a list with null value
	// loop through the array to get all the values
	for (var i = (array.length-1); i >= 0; i--) {
		list = {value: array[i],rest : list};	// just add new elements in the list and use the previous value of list as the rest of the updated list value
	}
	return list;
}
// declare a function called listToArray
function listToArray(list){
	var array = [];		// declare an empty array to store the result
	var index = 0;		// declare an index for the array
	var nullCount = 0;	// declare the variable to keep a check on the number of times rest returns value null
	// loop till the end of the list is reached
	while(list.rest != null){
		array[index] = list.value;
		list = list.rest;
		index++;
		if(list.rest == null){		// nullcount is updated once rest becomes null once
			nullCount++;
		}
		if (nullCount==1) {			// if rest is null once then it is given a value to loop once more
			list.rest = 1;
		}else if(nullCount >1){		
			list.rest = null;		// when rest returns null again then the loop needs to be broken so it is given a null value
		}
	}
	return array;
}
// input : console.log(listToArray(list)) output : [2,5,3,5]
/* A shorter and better solution as provided in the book is as follows :
	function listToArray(list) {
	  var array = [];
	  for (var node = list; node; node = node.rest)
	    array.push(node.value);
	  return array;
	}
*/	
// declare a function called prepend with a single argument
function prepend(element){
	list = {value : element , rest : list};	// just add the element to the list and give rest as the previous value of list
}
// input : prepend(8);console.log(list); output : {value: 8, rest: {value: 3, …}}
// declare a function nth with a two arguments
function nth(list,n){
	var element = undefined;	// let the element be undefined at first
	var elementNumber = 0;				// keep a check on the element number
	// loop through the whole list
	for(var temp = list; temp; temp = temp.rest){
		if(n==round){
			element = temp.value;	// if the element number and the argument match the element is given the value
		}
		elementNumber++;	// the elementnumber is updated
	}
	return element;
}
// input : console.log(nth(list,1)); output : 5
/* the list used throughout the exercise can be defined as follows :
	var list = {value : 3 , rest : {
			value : 5 , rest : {
	        	value : 7, rest : null
	        }
		}
	};
*/





