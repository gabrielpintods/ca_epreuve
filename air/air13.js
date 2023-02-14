function quickSort(arr) {
    quickSortRec(arr, 0, arr.length)
}

function partitioning (arr, beg, end) {
    let cpt = beg;
    let pivot = arr[beg];
    let tmp;
    for(let i = beg; i < end; i++){
        if (arr[i] < pivot){
            cpt++;
            tmp = arr[cpt];
            arr[cpt] = arr[i];
            arr[i] = tmp;
        }
    }
    tmp = arr[beg];
    arr[beg] = arr[cpt];
    arr[cpt] = tmp;
    return cpt;
}

function quickSortRec(arr, beg, end) {
    if (beg < end) {
        let pivotIndex = partitioning(arr, beg, end);
        quickSortRec(arr, beg, pivotIndex);
        quickSortRec(arr, pivotIndex + 1, end);
    }
}

function checkError(args) {
    let valid = true
    if(args[0] === undefined) {
        valid = false;
    }
    for(let i = 0; i < args.length && valid; i++) {
        if(/([0-9])/.test(args[i])) {
            args[i] = parseInt(args[i]);
        } else {
            valid = false;
        }
    }
    return valid;
}

// parsing 
let args = process.argv.slice(2);

// assert
if(!checkError(args)) {
    console.log("error");
} else {
    quickSort(args);
    console.log(args);
}

