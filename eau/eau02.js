function isDifferent (numb1, numb2) {
    let isEqual = false;
    if (numb1 === numb2) {
        isEqual = true;
    }
    return isEqual;
}

function isPresent(numb1, numb2, arrCombination) {
    let idem = false;
    let numb1InArr;
    let numb2InArr;
    for (let i = 0; i < arrCombination.length && !idem; i++ ) {
        numb1InArr = Number.parseInt(arrCombination[i].charAt(0) + arrCombination[i].charAt(1));
        numb2InArr = Number.parseInt(arrCombination[i].charAt(2) + arrCombination[i].charAt(3));

        if (numb1 === numb2InArr && numb2 === numb1InArr) {
            idem = true;
        }
    }
    return idem;
}

function twoNumbersCombination () {
    let numbStr;
    let arrCombination = [];
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            if (!isDifferent(i,j)) {
                if (!isPresent(i, j, arrCombination)) {
                    if (j < 10 && i < 10) {
                        numbStr = '0' + i.toString() + '0' + j.toString();
                    } else if(j < 10) {
                        numbStr = i.toString() + '0' + j.toString();
                    } else if (i < 10) {
                        numbStr = '0' + i.toString() + j.toString();
                    } else {
                        numbStr = i.toString() + j.toString();
                    }
                    arrCombination.push(numbStr);

                    if (j > 1) {
                        process.stdout.write( ", " + numbStr.charAt(0) + numbStr.charAt(1) + " " + numbStr.charAt(2) + numbStr.charAt(3));
                    } else {
                        process.stdout.write(numbStr.charAt(0) + numbStr.charAt(1) + " " + numbStr.charAt(2) + numbStr.charAt(3));
                    }
                }
            }
        }
    }
    console.log();
}

twoNumbersCombination();