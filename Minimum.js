/*  the problem statement wants us to create a function called min that will
	find the minimum number of the arguments passed into it 
*/
// create function called min with two arguments
function min(number1,number2){
	// declare a variable to store the string part of the answer
	var answer = "The smaller of the two numbers is : "
	// use the if statements to check for the smaller number
	if (number1>number2) {
		return answer + String(number2); 	// use the String() function to convert the number to string
	}
	else if(number2 > number1){
		return answer + String(number1);	// after conversion concatenate the answer with the existing variable
	}
	else{
		answer = "Both the numbers are equal"
		return answer;	// return appropriate message if both the numbers are equal
	};
}
/* NOTE : One can call the function min() and pass the numbers to be
	 	  compared as arguments. 
	 	  e.g.: console.log(min(374,332)) result : 332
*/