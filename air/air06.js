// make a basic operation (+ or -) to each element of the array, return the result in an array
export function basicOpe(arrNumber) {
    let operation = arrNumber[arrNumber.length - 1];
    let terms = analyser(operation);
    let numberAfterOp = [];
    for(let i = 0; i < arrNumber.length - 1; i++) {
        if(operation[0] === '-') {
            numberAfterOp[i] = parseInt(arrNumber[i]) - terms;
        } else if (operation[0] === '+') {
            numberAfterOp[i] = parseInt(arrNumber[i]) + terms;
        } else {
            break
        }
    }
    return numberAfterOp;
}

// return adder or the substactor as a int
function analyser(x) {
    let terms = '';
    for(let i = 1; i < x.length; i++) {
        terms = terms + x[i];
    }
    return parseInt(terms);
}

// display the array one line, error if the array is undefined
function displayArr(arrNumber) {
    if(arrNumber[0] === undefined) {
        console.log("error"); 
    } else {
        for (let i = 0; i < arrNumber.length; i++) {
            process.stdout.write(arrNumber[i].toString() + " ");
        }
        console.log();
    }
}


// check with a regex if all the arguments are number or '+','-' and if there is more than one arguement
function checkError(str) {
    let valid = true;
    if(args[1] === undefined) {
        valid = false;
    }
    for(let i = 0; i < args.length; i++) {
        if(! ( /^([+-](?=\.?\d))?(\d+)?(\.\d+)?$/.test(args[i]))) {
            valid = false;
        }
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
        let result = basicOpe(args);
        displayArr(result);
    }
}

if(process.argv[1].includes('air06.js')) {
    exec();
}