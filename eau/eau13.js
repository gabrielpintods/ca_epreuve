// function wich execute the bubble sort, it consists in repeatedly comparing 
// the consecutive elements of an array, and in permuting them when they are badly sorted.
function bubbleSort(arrNbrs) {
    let sort = false;
    let nb1, nb2;
    while(!sort) {
        sort = true;
        for (let i = 0; i < arrNbrs.length - 1; i++) {
            nb1 = parseInt(arrNbrs[i]);
            nb2 = parseInt(arrNbrs[i + 1]);
            if (nb1 > nb2) {
                arrNbrs[i + 1] = nb1;
                arrNbrs[i] = nb2;
                sort = false;
            } 
        }
    }
    return arrNbrs;
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
    let result = bubbleSort(args);
    console.log(result.toString());
}