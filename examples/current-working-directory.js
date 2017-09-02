//directory that is used as the baseline when working with relative file paths
console.log('Current working directory: ' + process.cwd());

try{
	process.chdir('/'); //Changing working directory
}
catch(error){
	console.error('Changing director error chdir: ' + error.message);
}

console.log('New working directory: ' + process.cwd());