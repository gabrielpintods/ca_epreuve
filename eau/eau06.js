// return true if the str is includes in the sentence
function checkIfIncludes (index, sentence, str) {
    let ret = true;
    for (let j = 0; j < str.length && ret; j++) {
        if(sentence.charAt(index) != str.charAt(j)) {
            ret = false;
        }
        index++;
    }
    return ret;
}


// cross the sentence until the first element of str match 
// with one element of sentence and calls checkIfIncludes
function strIncludes(sentence, str) {
    let include = false;
    let substring
    for (let i = 0; i < sentence.length; i++) {
        if (sentence.charAt(i) === str.charAt(0)) {
            if (checkIfIncludes(i, sentence, str)) {
                include = true;
            }
        }
    }
    return include;
}

function checkError(args) {
    if (args[0] === undefined || args[1] === undefined || args[2] !== undefined || !isNaN(args[0]) || !isNaN(args[1]) ) {
        return true;
    } else {
        return false;
    }
}

// Parsing 
let args = process.argv.slice(2);

// Display 
if (checkError(args)) {
    console.log("error");
} else {
    let result = strIncludes(args[0], args[1]);
    console.log(result);
}