// return true if numb is a prime number. 
function primeNb(numb) {
    numb = Number.parseInt(numb);
    let cpt = 1;
    for (let i = 2; i <= numb && cpt < 3; i++) {
        if(numb % i === 0) {
            cpt++;
        }
    }
    if(cpt < 3 && numb > 1) {
        return true;
    } else {
        return false;
    }
}

// search the first prime number after numb. 
function findUp (numb) {
    let i = Number.parseInt(numb) + 1;
    let find = false;
    while(!find) {
        if(primeNb(i)) {
            find = true;
        } else {
            i++;
        } 
    }
    return i;
}

function checkError(args) {
    if (args[0] < 0 || isNaN(args[0]) || args[0] === undefined || args[1] !== undefined) {
        return true;
    } else {
        return false;
    }
}

// parsing 
let args = process.argv.slice(2);

// display
if (checkError(args)) {
    console.log(-1);
} else {
    let result = findUp(args);
    console.log(result);
}





