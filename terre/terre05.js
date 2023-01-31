var argu = process.argv[2];


if (Number.parseInt(argu)) {
    if (argu % 2 == 0) 
    {
        console.log(argu + " est pair");
    } else 
    {
        console.log(argu + " est impair");
    } 
} else {
    console.log("invalide");
}