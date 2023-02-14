// return a string with only one charachter when there is two same character wich are next to themself
export function diffCharNextTo (str) {
    let strWOTDouble = '';
    for(let i = 0; i < str.length - 1; i++) {
        if(str[i] === str[i + 1]) {
            for(let j = i + 1; j < str.length - 1; j++) {
                if(str[j] == str[j + 1]) {
                    i = j;
                } else {
                    i = j;
                    break;
                }
            }
        } 
        strWOTDouble = strWOTDouble + str[i];
    }
    return strWOTDouble;
}

// check if the array of argument is not empty and if there is only one argument
function checkError(str) {
    let valid = true; 
    if(str[0] === undefined || str[1] !== undefined) {
        valid = false;
    } 
    return valid;
}

// parsing 
let args = process.argv.slice(2);

// assert
function exec() {
    if(!checkError(args)) {
        console.error("error");
    } else {
        let result = diffCharNextTo(args[0]);
        console.log(result);
    }
}

if(process.argv[1].includes('air05.js')) {
    exec();
}