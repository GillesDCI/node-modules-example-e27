import { setAllCaps, showInfo } from './formatting/formatting.js';

console.log("the process arguments are argv: ", process.argv)
console.log("the process arguments are argv: ", process.argv1)



const args = process.argv.slice(2);
console.log("arguments", args)

if(args.includes("--help")){
    //show the information
    showInfo();
    //exit the program.
    process.exit(0);
}

//set all the 
console.log("The result is : ", setAllCaps(args[0]));