var fs = require("fs");
//Listing the files that are in the directory
fs.readdir("./", function(err, files) {
    console.log("I got the contents of the directory.");
    //Looping through the files
    for(var i in files) {
        console.log("File: " + files[i]);
        if(files[i] != "newapp.js" && files[i] != ".git" && files[i] != "app.js") { // If the file name isnt equal to \app.js and if it's not equal to .git\
            fs.readFile(files[i], {
                encoding: "utf8"
            }, function(error, data) {
                console.log("The contents are: " + data);
                //Putting all the data from the files already in the directory into a new text file
                fs.appendFile('allfilecontents.txt', data, (err) => {
                    if(err) throw err;
                    console.log('The "data to append" was appended to file!');
                });
            });
        }
    }
});