import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

//extracts the arguments from the command and constructs an object we can access the arguments from.
const argv = yargs(hideBin(process.argv)).argv;

console.log("arguments extracted: ", argv);

console.log("the testargument is ", argv.testargument);
//Check if there are more than 3 ships and the distance is smaller than 53.5 
if(argv.ships > 3 && argv.distance < 53.5){
    console.log("Plundering!!!");
} else {
    console.log("Retreat, too far away or not enough ships");
}