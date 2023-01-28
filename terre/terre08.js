function taille(chaine, ...restParam) {
    if( (/^\d+$/.test(chaine) == false) && (restParam[0] == undefined ) ){ // check if test contains only numbers
        console.log(chaine.length);
    } else {
        console.log("error");
    }
}


taille(process.argv[2], process.argv[3]);

