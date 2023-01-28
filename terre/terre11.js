function primeNb(x, ...restParam) {
    x = Number.parseInt(x);
    let cpt = 1;
    if(!(isNaN(x)) && restParam[0] == undefined) {
        for (let i = 2; i <= x && cpt < 3; i++) {
            if(x % i === 0) {
                cpt++;
            }
        }

        if(cpt < 3 && x > 1) {
            console.log("Oui,", x, "est premier.");
        } else {
            console.log("Non,", x, "n'est pas premier.");
        }
    } else {
        console.error("error");
    }
}

primeNb(process.argv[2], process.argv[3]);