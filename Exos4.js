var total = 0;

function exo4(firstArgs){


	if(firstArgs){
	
		total += firstArgs;
		return exo4;
	}
	else{
		return total;
	}	
}

module.exports = exo4;
