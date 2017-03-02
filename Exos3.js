function test(firstArg){
	return function(secArgs){
		
		return firstArg + secArgs;
	}
}

module.exports = test;