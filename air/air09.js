function fusion(arr1, arr2) {
    let newArray = [];
    let j = 0;
    for(let i = 0; i < arr1.length + arr2.length; i++) { // fusion
        if(i >= arr1.length) {
            newArray[i] = arr2[j];
            j++;
        } else {
            newArray[i] = arr1[i];
        }
    }
    funsionSort(newArray);
    return newArray;
}

// bubble sort
function funsionSort(arrNbrs) {
    let nb1, nb2;
    let sort = false;
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
}

// insert element into array1 and array2
function insert(str) {
    let indexFus = findIndexFusion(str);
    let array1 = [];
    let array2 = [];
    let j = 0;
    for(let i = 0; i < str.length; i++) {
        if (i < indexFus) {
            array1[i] = str[i];
        } else if (i > indexFus) {
            array2[j] = str[i];
            j++;
        }
    }
    return fusion(array1, array2);
}

// search the index of 'fusion'
function findIndexFusion(str) {
    let indexFus = -1;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'fusion') {
           indexFus = i; 
        }
    } 
    return indexFus;
}

// display the array of numbers 
function displayArr(arrNbrs) {
    if(arrNbrs === undefined) {
        console.log("error");
    } else { 
        for(let i = 0; i < arrNbrs.length;i++) {
            process.stdout.write(arrNbrs[i] + " ");
        }
        console.log();
    }
}


// check if the array of arguments are not empty or if there is not only numbers
function checkError(str) {
    let valid = true;
    if (str[0] === undefined) {
        valid = false;
    } else {
        for(let i = 0; i < str.length && valid; i++) {
            if ( !(/^-?\d*\.{0,1}\d+$/.test(str[i])) && str[i] !== 'fusion' ) {
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
    let result = insert(args);
    displayArr(result);
}