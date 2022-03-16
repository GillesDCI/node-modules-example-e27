//import from node_modules (is installed through npm )
import dotenv from 'dotenv';
dotenv.config();
//process variable is inforamtion about the process on the server (in node environment)
console.log("process", process)
console.log("env object", process.env);


const {TOPSECRET, TOPSECRET2, DATABASEPASSWORD} = process.env;

console.log("1", TOPSECRET)
console.log("2", TOPSECRET2)
console.log("3", DATABASEPASSWORD)




//logging our environment variables
console.log(process.env["TOPSECRET"]);

console.log(process.env.TOPSECRET2);
console.log(process.env.DATABASEPASSWORD);