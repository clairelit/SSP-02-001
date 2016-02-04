var fs = require("fs");
var currentFile = 0;
var currentFileNew =0;
console.log("About to read the file names in TestContent");
fs.readdir("./TestContent", onDirContents);

function onDirContents(err,files)
{
    console.log("I got the file names in TestContent directory");
    for (var i in files) 
    {
 		console.log("File:  " + files[i]);
		var fileInfoObject = new Object();

        fs.readFile("./TestContent/" +files[i], {encoding: 'utf8', flag: 'r'}, function(error, data)
        {
            if(error) throw (error);
            {
                console.log("Contents of file:" +files[currentFile++] +"   " +data);
				fileInfoObject.name = (files[currentFileNew++]);
				fileInfoObject.contents = data;
            }
			
			var fileInfoArray = [0];
			fileInfoArray.push(fileInfoObject.name, fileInfoObject.contents);
			console.log (fileInfoObject);

	    });           
    }
} 