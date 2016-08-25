/* the problem statement wants us to create a function that lists out all the
	numbers between the arguments of the function. Further it wants us to 
	declare a function that sums up all the numbers listed.
*/
// create a function called range with two arguments start and end
function range(start,end){
	var answer=[];							// declare an empty array to store the numbers
	for (var i = start; i <= end; i++) {	// run a for loop through start to end arguments
		answer.push(i);						// add the number to the array 
	}
	return answer;							// return the array
}
// input : console.log(range(1,10));		output : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// create a function called sum to add the numbers listed by the function above
function sum(start,end){
	listOfNumbers = range(start,end);	// calling the range() function to create the array of numbers
	var sum = 0;						// initialise the sum variable to 0
	for (var i = 0; i < listOfNumbers.length; i++) {
		sum += listOfNumbers[i];		// update the sum variable with the numbers from the array
	}
	return sum;							// return the sum variable
}
// input : console.log(sum(1,20));		output : 210
// create a function called steprange to list numbers with the intended step size defined
function steprange(start,end,step){
	var answer=[];
	// if the third argument isn't given by the user then the step size should be one
	if(step==null|| step==undefined){
		step=1;
	}
	// this is exactly same as range function only i need to update itself according to the step size
	if (step>=0) {
		for (var i = start; i <= end; i+=step) {	
		answer.push(i);
		}
	} else {										// if the step is negative then the loop needs to be reversed for the desired result
		step= step*(-1);
		for (var i = start; i >= end; i-=step) {	
		answer.push(i);
		}
	}
	return answer;
}
// input : console.log(steprange(10,2,-2)); 	output : [10, 8, 6, 4, 2]