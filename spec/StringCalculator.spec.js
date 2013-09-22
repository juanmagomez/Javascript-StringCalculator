var StringCalculator = require("../src/StringCalculator");

describe("String Calculator exercise", function() {
	
	var stringCalculator;		
	
	beforeEach(function() {
		stringCalculator = new StringCalculator();
	});

	describe("All kinds of empty strings", function() {
		it("should return a zero when it recieves an empty string", function() {
			expect(stringCalculator.add("")).toBe(0);
		});

		it("should return a zero when it recieves a blank", function() {
			expect(stringCalculator.add(" ")).toBe(0);
		})
	});

	
	describe("Using only one number", function() {
		it("sould return the given number if there is only a number", function() {
			expect(stringCalculator.add("1")).toBe(1);
			expect(stringCalculator.add("11")).toBe(11);
		});
	});
	
	describe("A colon could be used as separator", function() {
		it("should return the sum of two numbers separated by colon", function() {
			expect(stringCalculator.add("1,2")).toBe(3);
		});

		it("should accept as many numbers as we want", function() {
			expect(stringCalculator.add("5,10,30")).toBe(45);
		});
	});

});
