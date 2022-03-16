//exporting the functionality to the rest of the application, so we can import it somewhere. 
export const setAllCaps = (input) => {
    let result = input.toUpperCase();

    return result;
}

export const showInfo = () => {
    let result = `Welcome in the help section of this program. Use the program in the following way: 
     node server4 <arg>. 
    `

    console.log(result);
}


export default {setAllCaps, showInfo}