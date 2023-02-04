// function wich execute the selection sort, it search for the smallest element of the array,
// and exchange it with the element of the current index
function selectionSort(arrNbrs) {
    let min, nb1, nb2, tmp;
    for(let i = 0; i < arrNbrs.length - 1; i++) {
        min = i;
        for(let j = i + 1; j < arrNbrs.length; j++) {
            nb1 = parseInt(arrNbrs[min]);
            nb2 = parseInt(arrNbrs[j]);
            if (nb1 > nb2) {
                min = j;
            }
        }
        tmp = arrNbrs[i];
        arrNbrs[i] = arrNbrs[min];
        arrNbrs[min] = tmp;
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
    let result = selectionSort(args);
    console.log(result.toString());
}