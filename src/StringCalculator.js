var StringCalculator = function() {
	
	this.add = function(numbersToAdd) { 
		var numbersArray = convertStringToNumbersArray(numbersToAdd);
		var totalSum = sumTheNumbersInTheArray(numbersArray);
		
		return totalSum;
	};

	var convertStringToNumbersArray = function(theString) {
		return theString.split(",");
	}

	var sumTheNumbersInTheArray = function(numbersArray) {
		var totalSum = 0;
		
		for(position in numbersArray) {
			var theNumberParsedToInteger = extractNumberFromGivenPosition(numbersArray, position);
			totalSum = addNewNumber(theNumberParsedToInteger, totalSum);
		}

		return totalSum;
	};

	var extractNumberFromGivenPosition = function(numbersArray, position) {
		return parseInt(numbersArray[position]);
	};

	var addNewNumber = function(theNumber, partialSum) {
		if(!isNaN(theNumber)) {
			partialSum += theNumber;
		}
		return partialSum;
	}
}

module.exports = StringCalculator; 
