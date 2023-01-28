function inverse(chaine) {
    let arr1 = new Array(chaine.length);
    for(let i = chaine.length - 1, j = 0; i >= 0; i--) {
        arr1[j] = chaine[i];
        process.stdout.write(arr1[j]);
        j++;
    }
    console.log();
}
inverse (process.argv[2]);