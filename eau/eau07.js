// convert the string into upper and lower cases at each letters
function convert(str) {
    let strMajMin = '';
    let strMaj = str.toUpperCase();
    let strMin = str.toLowerCase();
    let i = 0;
    let j = 0;
    while(i < str.length) {
        if (str.charAt(i) === ' ' || str.charAt(i) === '!' || str.charAt(i) === '?' || str.charAt(i) === ',') {
            strMajMin = strMajMin + str.charAt(i);
        } else if (j % 2 === 0) {
            strMajMin = strMajMin + strMaj.charAt(i);
            j++;
        } else if (j % 2 !== 0) {
            strMajMin = strMajMin + strMin.charAt(i);
            j++;
        }
        i++;
        }
    return strMajMin;
}

// check if all the character of the argument are letter [a-z][A-Z]. 
function checkError(args) {
    let ret = true;
    if (args[0] === undefined || args[1] !== undefined || !isNaN(args[0])  ) {
        ret = false;
    }
    if (ret) {
        let dichoMin = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','!', '?',','];
        let dichoMaj = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        for(let i = 0; i < args[0].length && ret; i++) {
            ret = false;
            for(let j = 0; j < dichoMin.length; j++) {
                if (dichoMin[j] === args[0].charAt(i)) {
                    ret = true;
                }
            }
            for(j = 0; j < dichoMaj.length && !ret; j++) {
                if (dichoMaj[j] === args[0].charAt(i)) {
                    ret = true;
                }
            }
        }
    } 

    return ret;
}

// parsing
let args = process.argv.slice(2);

// display
if (!checkError(args)) {
    console.log("error");
} else {
    let result = convert(args[0]);
    console.log(result);
}