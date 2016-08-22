/* the problem statement wants us to write a function to count the number 
	of occurences of a specific character in a string
*/
// declare the fucntion countChar() taking a string and a character as an argument
function countChar(string,character){
	var counter=0;								// initialise the counter variable
	var lengthOfString = string.length;			// calculate the length of the string
	for (var i = 0; i < lengthOfString; i++) {	// use a for loop to loop through the whole string
		if (string.charAt(i)===character) {			
			counter++;							// if the character matches the argument character increment the counter
		}
	}
	return counter;
}
// declare the countBs() function to count the number of "B" in a character
function countBs(string){
	var count=countChar(string,'B');			// call the countChar() function and pass the character argument as B
	return count;
}


/* Solution to first part:
	function countBs(string){
		var counter=0;
		var lengthOfString = string.length;
		for (var i = 0; i < lengthOfString; i++) {
			if (string.charAt(i)==="B") {
				counter++;
			}
		}
		return counter;
	}
*/
// use: console.log(countBs("Blackjack Beard full of Bugs","B"));
// result : 3




