/* the problem statement wants us to create an 8*8 chessboard using 
	# to represent the black boxes and white space to represent the
	white boxes and then change it to work for any variable size
*/
// define a variable to initialise the size of our chess board
var size = 8;
// define a variable to initialise the rows
var row = 0;
// use the while loop to keep a check on the maximum number of rows
while(row<size){
	switch(row%2){
		// if the row is even then we start with blank space
		case 0 :
			var string = " "; 
			for(var i=0;i<=size;i++){
				if (i%2 === 0) {
					var nextString = "#";
				}
				else{
					var nextString = " ";
				};
				string = string + nextString;	// we concatenate the next string with the previous string to make the required pattern
			}break;
		// if the row is odd then we start with # symbol
		case 1 :
			var string = "#";
			for(var i=0;i<=size;i++){
				if (i%2 === 0) {
					var nextString = " ";
				}
				else{
					var nextString = "#";
				};
				string = string + nextString;	// we concatenate the next string with the previous string to make the required pattern
			}break;	
	}
	console.log(string);	// we print the final string on the log after looping through all the columns
	row++;					// we increment the row to move onto the next row

} 