var StringCalculator = function() {}

StringCalculator.prototype.add = function(params) { 
	var splittedParams = params.split(",");
	
	var total = 0;
	
	for(i in splittedParams) {
		var num = parseInt(splittedParams[i]);
		if(!isNaN(num)) {
			total += num;
		}
	}
	
	return total;
}

module.exports = StringCalculator; 
