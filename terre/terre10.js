function perferctSqre(x) {
    let i = 1;
    const y = x;
    let tmp;
    let j = 1;
    let cpt = 0;

    while ( tmp != 0 && i <= x) {
        tmp = x - i;
        x = tmp;
        i += 2;
        cpt++;
    }

    if(cpt * cpt != y) {
        cpt = -1;
    }

    return cpt;
}

function nearest(x) {
    const nbNearestToX = new Array (2);
    let find = false;
    let i = Math.round(x);
    // nearest down
    while(!find && i > 0) {
        if(perferctSqre(i) != -1) {
            find = true;
        } else {
            i--;
        }
    }

    nbNearestToX[0] = i;
    i = Math.round(x);
    find = false;

    // nearest up 
    while(!find && i > 0) {
        if(perferctSqre(i) != -1) {
            find = true;
        } else {
            i++;
        }
    }
    nbNearestToX[1] = i;

    return nbNearestToX;
}

function dichoSearch(x, ...restParam) {
    x = Number.parseInt(x);
    if(!(isNaN(x)) && restParam[0] == undefined) {
        let nbNearestToX = nearest(x);
        let min = perferctSqre(nbNearestToX[0]);
        let max = perferctSqre(nbNearestToX[1]);
        let mid = (max + min) / 2;
        let find = false;
        let tmp;
        let tmp2;

        while(!find) {
            if (mid * mid === x) {
                find = true;
            } else if(mid * mid > x) {
                max = mid - 1;
                mid = (max + min) / 2;
            } else if (mid * mid < x) {
                min = mid + 1;
                mid = (max + min) / 2;
            }
            tmp = Math.round(mid * 100000) / 100000;
            tmp2 = tmp * tmp - x;
            if(tmp2 >= -0.0001 && tmp2 <= 0.0001) {
                mid = Math.round(tmp * 1000) / 1000;
                find = true;
            }
        }
        return mid;
    } else {
        console.error("error");
    }
}


function testDichoSearch() {
    let tmp;
    let result;
    let validResult;
    let ok = 0;
    let i;
    for (i = 0; i < 200; i++) {
        tmp = dichoSearch(i);
        result = Math.sqrt(i);
        validResult = Math.round(result * 1000) / 1000;
        if(tmp === validResult) {
            console.log("racine(", i, ") : ", tmp, " = Math.sqrt(", validResult, ")\t OK");
            ok++;
        } else {
            console.log("racine(", i, ") : ", tmp, " = Math.sqrt(", validResult, ")\t ERROR");
        }
    }
    console.log(ok, "/", i, "test validés");
}

// testDichoSearch();
console.log(dichoSearch(process.argv[2], process.argv[3]));
