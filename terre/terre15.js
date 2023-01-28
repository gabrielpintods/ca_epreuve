function triee(args){
    let croissant = true;
    let tabInt = new Array(args.length);
    let correct = true;

    // vérification 
    for(let k = 0; k < args.length; k++) {
        if (!isNaN(args[k])) {
            let tmp = parseInt(args[k], 10);
            tabInt[k] = tmp;
        } else {
            correct = false;
        }
    }
    
    if (correct) {
        // croissant ou pas
        for (let i = 0; i < tabInt.length - 1 && croissant == true; i++) {
            for (let j = i + 1; j < tabInt.length; j++) {
                if (tabInt[i] > tabInt[j]) {    
                    croissant = false;
                }
            }
        }

        // conclusion
        if (croissant) {
            console.log("Triée !");
        } else {
            console.log("Pas triée !");
        }
    } else {
        console.error("error");
    }
}

triee(process.argv.slice(2));
