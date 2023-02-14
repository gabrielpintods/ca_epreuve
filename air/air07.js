// return an array of element without the target
function control(str) {
    let target = str[str.length - 1];
    let afterControl = [];
    for (let i = 0; i < str.length - 1; i++) {
        if(!isIncludes(str[i], target)) {
            afterControl.push(str[i]);
        }
    }
    return afterControl;
}

// check if the target is include in the str
function isIncludes(word, target) {
    target = target.toLowerCase();
    let targetUpp = target.toUpperCase();
    let include = false;
    for(let i = 0; i < word.length && !include; i++) {
        if(target === word[i] || targetUpp === word[i]) {
            include = true;
        }
    }
    return include;
}

// display the array of element on a single line
function display(str) {
    for(let i = 0; i < str.length; i++) {
        if(i == str.length - 1) {
            process.stdout.write(str[i]);
        } else {
            process.stdout.write(str[i] + ', ');
        } 
    }
    console.log();
}

// check if the array of arguments is not empty
function checkError(str) {
    let valid = true; 
    if(str[0] === undefined) {
        valid = false;
    }
    return valid;
}

// parsing
let args = process.argv.slice(2);

// assert
if(!checkError(args)) {
    console.error("error");
} else {
    let result = control(args);
    display(result);
}