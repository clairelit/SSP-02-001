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
 for(var i in files) { //looping through the files in the directory
        console.log("File:" + files[i]); 
     
     
       if(files[i] != "app.js" && files[i] != ".git"){ // If the file name isnt equal to \app.js\
           console.log("Reading file " + files[i]);
            fs.readFile(files[i], {encoding: "utf8", flag: "r"}, function(error, data) { //reading the files here to access the array "files"
                if(error) { //using the built in error handler in node
                    throw error;     
                    i++;
                }
                
                if(i == files.length -2)
                    {
                        console.log("All done")
                    }
                //console.log("Contents of " + files[i] + "\n\n" + data); //display the contents of the files
            });
        }
    }
});