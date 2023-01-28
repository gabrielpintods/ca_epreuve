function puissance (nb, exp, ...restParam) {
    let nbInt = parseInt(nb, 10);
    let expInt = parseInt(exp, 10);
    let result = nb;
    if ( (restParam[0] == undefined) && !(isNaN(nbInt)) && !(isNaN(expInt)) ) {
        for (let i = 1; i < exp; i++) {
            result = result * nb;
        }
        console.log(result);
    } else {
        console.log("error");
    }
}

puissance(process.argv[2], process.argv[3], process.argv[4]);