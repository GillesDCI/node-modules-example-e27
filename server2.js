//importing our own node module functionality 
import { info, warning, error } from './logging/logging.js';
import myLogModule from './logging/logging.js';

info("The server just started....");
warning("The server has some performance issues. CPU is overheating.")

myLogModule.info("This is a test");
myLogModule.warning("Warning test");

const interval = setInterval(() => {
    myLogModule.info("Processing stuff for you...")
},5000)