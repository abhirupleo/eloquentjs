/* 	the problem statement wants us to print all the numbers between 1 to 100
	with exception that we print Fizz for a number divisible by 
	3 and print Buzz for number divisible by 5. We also need to print out
	FizzBuzz if the number is divisible by both 3 and 5.
*/
// initialise a variable with the starting number i.e. 1
var startingNumber = 1;
// use the while loop to check if the varibale reache the maximum value of 100
while(startingNumber<=100){
	// use the conditional statement if to check for the conditions
	if (startingNumber%3 === 0 && startingNumber%5 != 0) { 	
		console.log("Fizz");		// if the number is only divisible by 3 and print Fizz for the same
	}
	else if(startingNumber%5===0 && startingNumber%3 != 0){
		console.log("Buzz");		// if the number is only divisible by 5 and print Buzz for the same
	}
	else if(startingNumber%3 === 0 && startingNumber%5 === 0){
		console.log("FizzBuzz")		// if the number is divisible by both 3 and 5 and print FizzBuzz for the same
	}
	else{
		console.log(startingNumber);	// if the number is not divisible by 3 nor 5 then print the number as it is
	};
	startingNumber++;
}