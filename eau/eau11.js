// return the index of the element to research, -1 otherwise
function indexWanted(args) {
    let research = args[args.length - 1];
    let index = -1;
    for(let i = 0; i < args.length - 1; i++) {
        if(sameStr(args[i], research)) {
            index = i;
            break;
        }
    }
    return index;
}

// check if the paramter are equals
function sameStr(strToCompare, research) {
    let same = true;
    for (let i = 0; i < research.length && same; i++) {
        if (strToCompare.charAt(i) !== research.charAt(i)) { 
            same = false; 
        }
    }
    return same;
}

// check if there is no second argument
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
    let result = indexWanted(args);
    console.log(result);
}