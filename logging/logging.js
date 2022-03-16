//export this functionality (namely info) to the rest of the application 
export const info = (info) => {
    console.log(`INFO: ${info}`);
}

export const warning = (info) => {
    console.log(`WARNING: ${info}`);
}

export const error = (info) => {
    console.log(`ERROR: ${info}`);
}
//default export 
export default {info, warning, error};