// bubble sort in comparing the ascii code of the first letter of each argument
function sortByAscii(arrStr) {
    let sort = false;
    let j = 0; 
    let tmp;
    while(!sort) {
        sort = true;
        for (let i = 0; i < arrStr.length - 1; i++) {
            while (arrStr[i].charAt(j) === arrStr[i + 1].charAt(j)) {
                j++;
            }
            if (arrStr[i].charCodeAt(j) > arrStr[i + 1].charCodeAt(j)) {
                tmp = arrStr[i + 1];
                arrStr[i + 1] = arrStr[i];
                arrStr[i] = tmp;
                sort = false;
            } 
            j = 0;
        }
    }
}

// display the array on one line
function displayStr(args) {
    for (let i = 0; i < args.length; i++) {
        process.stdout.write(args[i] + " ");
    }
    console.log();
}

// check if there is at least one argument
function checkError(args) {
    let correct = true 
    if(args[0] == undefined) { 
        correct = false; 
    }
    return correct;
}

// parsing 
let args = process.argv.slice(2);

// assert
if(!checkError(args)) { 
    console.error("error"); 
} else {
    sortByAscii(args);
    displayStr(args);
}