function readFile(fileName) {
    let fs = require('fs');
    let data = fs.readFileSync(fileName, 'utf8');
    return data;      
}

function checkError(arrArgs) {
    let valid = true;
    if(arrArgs[1] !== undefined || arrArgs[0] === undefined || !arrArgs[0].includes(".txt")) {
        valid = false;
    }
    return valid;
}

// parsing
let args = process.argv.slice(2);

// assert 
if(!checkError(args)) {
    console.error("error");
} else {
    let result = readFile(args[0]);
    console.log(result);
}
