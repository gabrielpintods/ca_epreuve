function division(x, y) {
    if (x >= y && y != 0) {
        let result = ~~(x / y);
        let reste = x % y;
        console.log("résultat: " + result);
        console.log("reste: " + reste);
    } else {
        console.error("erreur");
    }
}
division(Number(process.argv[2]), Number(process.argv[3]));