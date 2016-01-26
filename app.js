//Requiring the file system from the node api
var fs = require("fs");
console.log("Just about to call the fs.readir");

//Writing the function to read the contents of the SSP-02-001 directory.
fs.readdir("./", function(err, files){
	console.log("I got the contents of the directory.");

    //Looping through the files
	for(var i in files) {
		console.log("File: " + files[i]);
	}


//Now I must read the contents of the files
if(files[i] != "app.js")//If the file name is not equal to app.js{
    
fs readFile(files[i],{encoding:"utf8", flag:"r"}, function(err,data) {
    if (error) {throw error;
  }
}
            
   console.log ("Contents of " + files[i] + "\n\n" + data);
}

});