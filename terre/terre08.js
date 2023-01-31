function taille(chaine, ...restParam) {
    if(isNaN(chaine) && (restParam[0] == undefined ) ){ // check if test contains only numbers
        console.log(chaine.length);
    } else {
        console.log("error");
    }
}

if(process.argv[2] == undefined) {
    console.log("error");
} else {
    taille(process.argv[2], process.argv[3]);
}

