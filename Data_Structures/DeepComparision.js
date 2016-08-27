/* the problem statement wants us to create a function that performs deep
	comparision by not only checking their identities but their properties
	too. 
*/
// delcare simple variables
	var name1 = "David";
	var name2 = "David";
	var name3 = "Goliath";
// declare the three objects
	var obj1 = {value1 : 1, value2 : "cat",value3 : true};
	var obj2 = {value1 : 1, value2 : "cat",value3 : true};
	var obj3 = {value1 : 3, value2 : "dog",value3 : false};
// declare a function called deepComparision
function deepComparision(input1,input2){
	// if the inputs are of type other than objects do identity comparision and return
	if(input1===input2) 
		return true;
	// check for null and of any other type of input and return false for the same
	if(input1===null || input1 !== "obejct" || input2 === null || input2 != "object")
		return false;
	// declare variables to count the number of properties in each obejct
	var numOfProp1, numOfProp2;
	// use the 'in' keyword to loop through the keys of the first object
	for(var property in input1)
		numOfProp1 += 1;	// increment the number of the properties the object has
	// use the 'in' keyword to loop through the keys of the second object
	for(var property in input2){
		numOfProp2 += 1; 	// increment the number of the properties the object has
		// define all the scenarios for a false return
		if (!isPropInA(property) || !deepComparision(input1[property],input2[property])) {
			return false;	// if first argument returns true the second argument is used to check the value of the properties of the two objects by calling deepComparision() recursively
		}
	}
	// lastly check if second object doesn't have any extra property
	if(numOfProp1===numOfProp2)
		return true;
	else
		return false;
	// funtion to check if the property in second object is present in the first object too
	function isPropInA(property){
		return (property in a);
	}
}

// input : console.log(deepComparision(obj1,obj1)); output : true
// input : console.log(deepComparision(obj1,obj2)); output : false
// input : console.log(deepComparision(obj3,obj2)); output : false
// input : console.log(deepComparision(name1,name2)); output : true
// input : console.log(deepComparision(name1,name3); output : false




