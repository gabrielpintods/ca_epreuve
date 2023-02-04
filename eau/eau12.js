// search the minimum difference between two elements of an array of integers 
function diffBtwnNbrs (arrNbrs) {
    let resDiff = -1;
    let diff = 0;
    for (let i = 0; i < arrNbrs.length; i++) {
        for (let j = 0; j < arrNbrs.length; j++) {
            nb1 = parseInt(arrNbrs[i]);
            nb2 = parseInt(arrNbrs[j]);
            if(i != j) {
                if (nb1 < nb2) { 
                    diff = nb2 - nb1; 
                } else if (nb1 >= nb2) { 
                    diff = nb1 - nb2; 
                }
                if (diff < resDiff || resDiff === -1) {
                    resDiff = diff;
                }
            }
        }
    }
    return resDiff;
}

// check if the array of arguments are not empty or if there is not only numbers
function checkError(str) {
    let valid = true;
    if (str[1] === undefined) {
        valid = false;
    } else {
        for(let i = 0; i < str.length && valid; i++) {
            if ( !(/^-?\d*\.{0,1}\d+$/.test(str[i])) ) {
                valid = false;
            }
        }
    }
    return valid;
}

// parsing 
let args = process.argv.slice(2);

// assert
if(!checkError(args)) {
    console.error("error");
} else {
    let result = diffBtwnNbrs(args);
    console.log(result);
}