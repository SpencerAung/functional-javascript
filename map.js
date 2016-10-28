function doubleAll(numbers){
	return numbers.map(function double(currentValue){
		console.log(currentValue);
		return currentValue*2;
	}
	
	);
	
	
}
module.exports = doubleAll;