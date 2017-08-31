//proving JavaScript single-threaded operation

console.log('Starting synchronous execution.');

setInterval(function(){
	console.log("Executing Task A");
}, 1000);

setInterval(function(){	
	while(true){
		console.log("Executing Task B");
	}
}, 1500);

console.log("Finishing synchronous execution.");
