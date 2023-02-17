function buildRectangle (width, height) {
    let rect = [];
    let nbWidth = parseInt(width);
    let nbHeight = parseInt(height);
    let j;
    for(let i = 0; i < nbHeight; i++) {
        rect[i] = []; 
        if(i === 0 || i === nbHeight - 1) {
            rect[i][0] = 'o';
            for(j = 1; j < nbWidth - 1; j++) {
                rect[i][j] = '-';
            }
            if(nbWidth > 1) {
                rect[i][j] = 'o';
            }
        } else {
            rect[i][0] = '|';
            for(j = 1; j < nbWidth - 1; j++) {
                rect[i][j] = ' ';
            } 
            rect[i][j] = '|';
        }
    }
    return rect;
}

function displayArr(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            process.stdout.write(arr[i][j].toString());
        }
        console.log();
    }
}


// check if there is exactly 2 elements in the array and if there are number
function checkError(arg) {
    let valid = true;
    if(arg[1] === undefined || arg[2] !== undefined || !(/([0-9])/.test(arg[0])) || !(/([0-9])/.test(arg[1]))) {
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
    let result = buildRectangle(args[0], args[1]);
    displayArr(result);
}