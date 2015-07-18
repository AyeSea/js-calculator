//Arithmetic Operations
var add = function(a, b) {
	return a + b;
};

var multiply = function(a, b) {
	return a * b;
};

var divide = function(a, b) {
	return a / b;
};

var subtract = function(a, b) {
	return a - b;
};

//Storing User Input
var currentDigits = [];	//stores all of the individual numbers a user inputs before pressing an operation button
var currentNums = []; //stores numbers input by user
var currentOperations = []; //stores operations input by user
var prevOperation = ""; //stores previous operation input by user
var prevNum = 0; //stores previous number input before user called calculate function
 
var saveNum = function() {
	//joins currentDigits into a single number and saves it to currentRequest
	currentNums.push(Number(currentDigits.join("")));
	//deletes contents of currentDigits to prepare for another set of digit(s) to be input by user
	currentDigits.length = 0;
}

//Button Inputs
var saveDigit = function(num) {
	currentDigits.push(num);
	console.log(num);
};

var saveOperation = function(operation) {

	if (currentDigits.length > 0) {
		saveNum();
	}
	
	currentOperations.push(operation);
	console.log(operation); //4debug
	console.log(currentNums); //4debug
};

var clearAll = function() {
	currentDigits.length = 0;
	currentNums.length = 0;
	currentOperations.length = 0;
	console.log("Cleared!");
}

//Clean Up Function - clean up currentNums and currentOperations arrays after performing an arithmetic operation
var cleanUp = function(result) {
	//remove first number from currentNums
	currentNums.shift();

	//save second number from original currentNums to prevNum and then remove from currentNums
	if (prevNum === 0) {
		prevNum = currentNums[0];
	};

	currentNums.shift();

	//add the result of the arithmetic operation as the 1st element of currentNums
	currentNums.unshift(result);

	//save the operation we just used as prevOperation and then remove from currentOperations
	if (prevOperation === "") {
		prevOperation = currentOperations[0];
	};
	
	currentOperations.shift();
}


//Calculations
var calculate = function() {
	//have a switch statement to determine operation and then input the 1st two
	//numbers from the currentNums array. afer operation is completed, unshift(add to 1st position) 
	//the resulting value to the currentNums array and delete
	//the original 2 numbers and the used operation from their respective arrays.
	//this way, we continue operations for currentNums.length > 2 and use the result of
	//the previous operation as the 1st input for the next operation.
	//loop until operations array is empty.
	saveNum();

	// if an operation was input
	if (currentOperations.length > 0 ) {
		switch(currentOperations[0]) {
			case 'add':
				result = add(currentNums[0], currentNums[1]);
				cleanUp(result);
				//log result to console
				console.log(result);
				//return result (use this later for display)
				return result;

			case 'subtract':
				result = subtract(currentNums[0], currentNums[1]);
				cleanUp(result);
				console.log(result);
				return result;

			case 'multiply':
				result = multiply(currentNums[0], currentNums[1]);
				cleanUp(result);
				console.log(result);
				return result;

			case 'divide':
				result = divide(currentNums[0], currentNums[1]);
				cleanUp(result);
				console.log(result);
				return result;
		}


	}
	//if no operation was input, then we take redo the last operation w/ the last prevNum
	else {
		switch(prevOperation) {
			case 'add':
				result = add(currentNums[0], prevNum);
				cleanUp(result);
				//log result to console
				console.log(result);
				//return result (use this later for display)
				return result;

			case 'subtract':
				result = subtract(currentNums[0], prevNum);
				cleanUp(result);
				console.log(result);
				return result;

			case 'multiply':
				result = multiply(currentNums[0], prevNum);
				cleanUp(result);
				console.log(result);
				return result;

			case 'divide':
				result = divide(currentNums[0], prevNum);
				cleanUp(result);
				console.log(result);
				return result;
		}
	}

};