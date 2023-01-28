function milieu(i1, i2, i3) {
    let x = parseInt(i1, 10);
    let y = parseInt(i2, 10);
    let z = parseInt(i3, 10);
    let milieu = x;
    if (x != y && y != z && x != z) {
        if (y > z) {
            if (z > x) {
                milieu = z;
            } else if (y < x) {
                milieu = y;
            }
        } else if (y < z) {
            if (y > x) {
                milieu = y;
            } else if (z < x) {
                milieu = z; 
            }
        }
        console.log(milieu);
    } else {
        console.log("error");
    }
}

milieu(process.argv[2], process.argv[3], process.argv[4]);