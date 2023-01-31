function extractFileName(path) {
    let fileName = '';
    let index;
    // loop searching the last '/'
    for (let i = 0; i < path.length; i++) {
        if(path.charAt(i) === '/') {
            index = i;
        }
    }
    // puts all the character after the last '/'
    for(i = index + 1; i < path.length; i++) {
        fileName = fileName + path.charAt(i);
    }
    return fileName
}



let path = process.argv[1];
let result = extractFileName(path);
console.log(result);
