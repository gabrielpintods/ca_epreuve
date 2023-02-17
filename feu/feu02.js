// return an array of all the number inside arr
function charToNbr(arr) {
    let j = 0;
    let k = 0;
    let numberStr = '';
    let arrNumber = [];
    for(let i = 0; i < arr.length; i++) {
        if(/[0-9]/.test(arr[i])) {
            numberStr = arr[i];
            j = i + 1;
            while(/[0-9]/.test(arr[j])) {
                numberStr += arr[j];
                j++;
            }
            i = j - 1;
            arrNumber[k] = parseInt(numberStr);
            k++;
        } else {
            arrNumber[k] = arr[i];
            k++;
        }
    }
    return arrNumber;
}

// return an array of number and char (operator or parenthesis) without space
function WHOSpace(str) {
    let ret = [];
    let j = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] !== ' ') {
            ret[j] = str[i];
            j++;
        }
    }
    return ret; 
}

// copy the array without the parenthesis and add the result of the expression inside the parenthesis
function copyArrOut(arr, indexBeg, indexEnd, insideParenth) {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        if(i === indexBeg) {
            i = indexEnd;
            res.push(insideParenth);
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

// copy the array inside the parenthesis
function copyArrIn(expression, arrOpe, indexBeg, indexEnd) {
    for(let i = indexBeg + 1; i < indexEnd; i++) {
        expression.push(arrOpe[i]);
    }
}

// check if there are parenthesis and return expression outside
function WHOParenth(expression, insideParenth) {
    let indexParenth = [];
    indexParenth[1] = -1;
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] === '(') {
            indexParenth[0] = i;
            for(let j = i + 1; j < expression.length; j++) {
                if(expression[j] === ')') {
                    indexParenth[1] = j;
                }
            }
            break;
        } 
    }
    if(indexParenth[1] === -1) {
        return expression;
    } else {
        return copyArrOut(expression, indexParenth[0], indexParenth[1], insideParenth);
    }
}


// check if there are parenthesis and return the expression inside
function parenthesis(arrOpe) {
    let expression = [];
    let beg = -1;
    let end = arrOpe.length;
    for(let i = 0; i < arrOpe.length; i++) {
        if(arrOpe[i] === '(' && beg === -1) {
            beg = i;
        } else if (arrOpe[i] === ')') {
            end = i;
        }
    }
    if(beg !== -1) {
        // copy the expression inside the parenthesis
        copyArrIn(expression, arrOpe, beg, end);
    }
    return expression;
}

// calcul *,/,%,-,+ with order of priority
function calcul(expression) {
    let i = 1;
    let prio1 = true;
    let copyExp = [];
    copyArrIn(copyExp, expression, - 1, expression.length);
    while(copyExp.length !== 1) {
        // first priority, multiplication and division
        if(copyExp[i] === '*') {
            copyExp[i - 1] = copyExp[i-1] * copyExp[i+1];
            copyExp.splice(i, 2);
        } else if(copyExp[i] === '/') {
            copyExp[i - 1] = copyExp[i-1] / copyExp[i+1];
            copyExp.splice(i, 2);
        } else if(copyExp[i] === '%') {
            copyExp[i - 1] = copyExp[i-1] % copyExp[i+1];
            copyExp.splice(i, 2);
        } else if (i >= copyExp.length - 1 || !prio1) {
            prio1 = false;
            i = 1;
            // second priority, addition substraction
            if(copyExp[i] === '-') {
                copyExp[i - 1] = copyExp[i-1] - copyExp[i+1];
                copyExp.splice(i, 2);
            } else if(copyExp[i] === '+') {
                copyExp[i - 1] = copyExp[i-1] + copyExp[i+1];
                copyExp.splice(i, 2);
            } else {
                i += 2;
            }
        } else {
            i += 2;
        }
    }
    return copyExp[0];
}

// analyse if an expression contains more than two parenthesis, return the expression inside
function analyserParenth(expression) {
    let ret;
    let beg = -1;
    let end = 0;
    let k = 0; // ret index
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] === '(') {
            if(ret === undefined) {
                ret = [];
            }
            beg = i;
            let parenthLeft = 0;
            let parenthRight = 0;
            // search a valid couple of parenthesis
            for(let j = i + 1; j < expression.length; j++) {
                if(expression[j] === ')') {
                    if(parenthLeft !== parenthRight) {
                        parenthRight++;
                    } else {
                        ret[k] = [];
                        end = j;
                        copyArrIn(ret[k], expression, beg, end);
                        i = j;
                        k++;
                        break;
                    }
                } else if (expression[j] === '(') {
                    parenthLeft++;
                }
            }
        }
    }
    // expression = ['(', '(', '2', '+', '2',')', '*' '(', 4', '-', '7', ')' ,')'] 
    // ret = [ ['2', '+', '2'], ['4', '-', '7'] ]
    return ret; 
}

// replace each parenthesis by its total
function buildExpres(expression, resInParenth, expInParenth) {
    for(let j = 0; j < expInParenth.length; j++) {
        for(let i = 0; i < expression.length; i++) {
            if(expression[i] === '(') {
                expression.splice(i, expInParenth[j].length + 1);
                expression[i] = resInParenth[j];
                break;
            }
        }
    }
}

// calcul the total of each expression inside the parenthesis, calcul the total with the symbol outside parenthesis
function totalParenth(expInParenth, expression) {
    let resInParenth = [];
    for(let i = 0; i < expInParenth.length; i++) {
        resInParenth[i] = operation(expInParenth[i]);
    }
    buildExpres(expression, resInParenth, expInParenth);
    let ret = calcul(expression);
    return ret;
}

// main function and recursive function
function operation(arrOpe) {
    let result = 0;
    let parenth = parenthesis(arrOpe);
    // check if there is at least one couple of parenthesis
    if(parenth[0] !== undefined) {
        let tmp = analyserParenth(parenth);
        // check if there are more than one couple of parenthesis
        if (tmp !== undefined && tmp.length > 1) {
            result = totalParenth(tmp, parenth);
        } else {
            result = operation(parenth);
        }
    }
    let expression = WHOParenth(arrOpe, result);
    let ret = calcul(expression);
    return ret;
}

// normalize the arg into a array wich a number is a int and symbol or parenthesis is a char, call operation after
function exec(arg) {
    let expression = charToNbr(arg[0]);
    expression = WHOSpace(expression);
    let result = operation(expression);
    return result;
}

// parsing 
let args = process.argv.slice(2);

// assert 
console.log(exec(args));