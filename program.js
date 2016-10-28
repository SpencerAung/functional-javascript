function repeat(operation, num){
	if(num>0){
		operation();
		repeat(operation, num-1);
	}
}

function greet(){
	console.log('hello');
}

repeat(greet, 10);
module.exports =repeat;