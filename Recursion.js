/* the problem statement wants us to use the recursive function as mentioned in the chapter
	called isEven to find out if a number is even or not
*/
// declare the function isEven with one argument
function isEven(number){
	// check if the input is negative or not
	if(number<0){
		number = number*(-1); // if the input is negative then multiply by -1 to make it positive
	}else{
		number = number;
	}
	if (number == 1) {
		return false;			// if after calling it recursively the number ends up 1 then it is odd
	} else if(number == 0){
		return true;			// if after calling it recursively the number ends up 0 then it is even
	}else{
		number = number - 2;	// update the number to the new value
		return isEven(number);	// call the fucntion recursively to repeat the process till we reach one of the above two conditoins
	}
}

// to use the function just call it by using console.log(isEven(50));
// input : 50 result : true
// input : 75 result : false
/* if we enter any negatvie number it only return false which isn't the correct solution
	we can fix this by taking the mod of the input i.e. multiplying with -1 if the
	input is negative.
*/ 