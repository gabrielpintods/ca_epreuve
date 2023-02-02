function minMax(x, y) {
    let min = parseInt(x);
    let max = parseInt(y);
    let tmp;
    if(min > max) {
        min = parseInt(y);
        max = parseInt(x);
    }
    for(let i = min; i < max; i++) {
        tmp = i.toString();
        process.stdout.write(tmp + ' ');
    }
    console.log();
}

function checkError(x, y, ...restParam) {
    let ret = true;
    if (x === undefined || restParam[0] != undefined || isNaN(x) || isNaN(y) ) {
        ret = false;
    }
    return ret;
}

// parsing 
let x = process.argv[2];
let y = process.argv[3];
let restParam = process.argv[4];

if (!checkError(x, y, restParam)) { console.log("error");} 
else { minMax(x, y); }