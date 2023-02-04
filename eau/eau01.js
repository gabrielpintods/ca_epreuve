// compare if the combination of the two numbers are equals or not. 011 = false, 123 = true.
function isUnique(numb) {
    let ret = true;
    let numbStr;
    if (numb < 100) {
        numbStr = '0' + numb.toString();
    } else {
        numbStr = numb.toString();
    }
    if(numbStr.charAt(0) == numbStr.charAt(1) || numbStr.charAt(0) == numbStr.charAt(2) 
      || numbStr.charAt(1) == numbStr.charAt(2)) {
        ret = false;
    } 
    return ret
}

// check if the combination of the two numbers are already listed in the array of combination.
function isPresent(numb, arrCombination) {
    let idem = false;
    for (let i = 0; i < arrCombination.length && !idem; i++ ) {
        if (numb.includes(arrCombination[i].charAt(0)) && 
            numb.includes(arrCombination[i].charAt(1)) && numb.includes(arrCombination[i].charAt(2)) ) {
            idem = true;
        }
    }
    return idem;
}


function combination() {
    let arrCombination = [];
    let iStr;
    for(let i = 12; i < 1000; i++) {
        if (isUnique(i)) {
            if (i < 100) {
                iStr = '0' + i.toString();
            } else {
                iStr = i.toString();
            }
            if (!isPresent(iStr, arrCombination)) {
                arrCombination.push(iStr);
                if (i > 12) {
                    process.stdout.write( ", " + iStr );
                } else {
                   process.stdout.write(iStr);
                }
            } 
        }
    }  
    console.log();
}

combination();

