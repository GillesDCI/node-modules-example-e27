//import the core module fs (filesystem) //http
import fs from 'fs'; //part of the node environenet

const data = "This is the data I would like to write.";

const options = {
    encoding:"utf8",
    flag:"a" //append the data 
}
//we write a test file with the data and when the function is ready it will return done. 
fs.writeFile("test.txt",data,options, function(){console.log("done")})

