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
	currentOperations.push(operation);
	console.log(operation + " added to currentOperations");

	//for cases when user is performing operations on multiple numbers (e.g. 5 + 1 + 2)
	if (currentNums.length === 1) {
		if (currentOperations.length === 0) {
			calculate();
		}
	}
	
	if (currentDigits.length > 0) {
		saveNum();
	}

	console.log(currentNums);
};

var clearAll = function() {
	currentDigits.length = 0;
	currentNums.length = 0;
	currentOperations.length = 0;
	prevOperation = "";
	prevNum = 0;
	$('.display').html(0);
	console.log("Cleared!");
}

//Clean Up Function - clean up currentNums and currentOperations arrays after performing an arithmetic operation
var cleanUp = function(result) {
	//remove first number from currentNums
	currentNums.shift();

	//save second number from original currentNums to prevNum and then remove from currentNums
	if (currentNums.length > 0) {
		prevNum = currentNums[0]
		currentNums.shift();
	}

	//add the result of the arithmetic operation as the 1st element of currentNums
	currentNums.unshift(result);

	//save the operation we just used as prevOperation and then remove from currentOperations
	if (currentOperations.length > 0) {
		prevOperation = currentOperations[0];
		currentOperations.shift();
	}

}


//Calculations
var performCalculation = function(operation, num1, num2) {
	result = operation(num1, num2);
	cleanUp(result);
	console.log(result);
	$('.display').html(result);
}

var calculate = function() {
	if (currentDigits.length > 0) {
		saveNum();
	};

	// if an operation was niput
	if (currentOperations.length > 0 ) {
		switch(currentOperations[0]) {
			case 'add':
				performCalculation(add, currentNums[0], currentNums[1]);
				break;

			case 'subtract':
				performCalculation(subtract, currentNums[0], currentNums[1]);
				break;

			case 'multiply':
				performCalculation(multiply, currentNums[0], currentNums[1]);
				break;

			case 'divide':
				performCalculation(divide, currentNums[0], currentNums[1]);
				break;
		}

	}
	//if no operation was input, then we redo the last operation w/ the last prevNum
	else {
		switch(prevOperation) {
			case 'add':
				performCalculation(add, currentNums[0], prevNum);
				break;

			case 'subtract':
				performCalculation(subtract, currentNums[0], prevNum);
				break;
			case 'multiply':
				performCalculation(multiply, currentNums[0], prevNum);
				break;

			case 'divide':
				performCalculation(divide, currentNums[0], prevNum);
				break;
		}
	}

};

//Display
$(document).ready(function() {
	$('.btn-calc-num').click(function() {
		$('.display').html(parseFloat(currentDigits.join("")));
	});

});