//1. myMax function
var myMax = function(arr) {
	var maxNum = 0;

	for(i = 0; i < arr.length - 1; i++) {
		if (arr[i] > maxNum) {
			maxNum = arr[i];
		};
	};

	return maxNum;
}

console.log(myMax([1, 5, 25, 3, 2, -35]));

//2. vowelCount function
var vowelCount = function(str) {
	var vowels = /[aeiou]/ig;

	var matches = str.match(vowels);

	return matches.length;
};

console.log(vowelCount("supercalifragilisticexpialidocious"));

//3. reverse function
var reverse = function(str) {
	return str.split("").reverse().join("");
};

console.log(reverse("this is a string"));