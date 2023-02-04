// switch the first letter of a word into an Upper case
function firstCharMaj(sentence) {
    let strMaj = '';
    let toMaj;
    let j = 0;
    if(isAlphabetic(sentence.charAt(0))) {
        toMaj = sentence.charAt(0).toUpperCase();
        strMaj = toMaj;
        j++;
    }
    for(let i = j; i < sentence.length; i++) {
        if(isAlphabetic(sentence.charAt(i)) && i > 0 && sentence.charAt(i - 1) === ' ') {
            toMaj = sentence.charAt(i).toUpperCase();
            strMaj = strMaj + toMaj;
        } else {
            strMaj = strMaj + sentence.charAt(i);
        }
    }
    return strMaj;
}

// check if the letter of a word is a letter
function isAlphabetic(chr) {
    let ret = false;
    let dichoMin = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let dichoMaj = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let j = 0; j < dichoMin.length && !ret; j++) {
        if (dichoMin[j] === chr) {
             ret = true;
        }
    }
    for(j = 0; j < dichoMaj.length && !ret; j++) {
        if (dichoMaj[j] === chr) {
            ret = true;
        }
    }
    return ret;
}

// check if there is no second arguments
function checkError(args) {
    let ret = true;
    if (args[0] === undefined || args[1] !== undefined || !isNaN(args[0])  ) {
        ret = false;
    }
    return ret;
}

// parsing 
let args = process.argv.slice(2);

// assert
if (!checkError(args)) {
    console.log("error");
} else {
    let result = firstCharMaj(args[0]);
    console.log(result);
}

