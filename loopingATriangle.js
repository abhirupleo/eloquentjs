//the problem statement wants us to create a triangle using the # symbols.
//the triangle has seven rows each with the same number of hashes as the row number
//declare an empty string called string;
var string = "";
//use the for loop to loop through till the maximum number of rows required i.e. 7
for (var i = 0; i < 7; i++) {
	string = string + "#" 	// concatenate the # symbol to the previous value of the string variable.
	console.log(string);	// print out the updated version of the variable on the log.
}