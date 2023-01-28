function convert(oldHour, ...restParam) {
    if((!verif(oldHour, ...restParam))) {
        console.error('error');
    } else {
        let hr = Number.parseInt(oldHour.charAt(0) + oldHour.charAt(1));
        let min = Number.parseInt(oldHour.charAt(3) + oldHour.charAt(4));
        let amOrPm = oldHour.charAt(5) + oldHour.charAt(6);
        let newHour;
        if (hr === 12 && amOrPm === 'AM')  {
            newHour = '00:' + min;
        } else if (hr === 12 && amOrPm === 'PM') {
            newHour = oldHour.replace('PM','');
        } else if (amOrPm === 'PM') {
            hr = hr + 12;
            newHour = hr + ':' + min;
        } else {
            newHour = oldHour.replace('AM','');
        }
        console.log(newHour);
    }
}

// gestion des erreurs 
function verif(hour, ...restParam) {
    let correct = true; 
    if (hour.charAt(7) !== '' || restParam[0] !== undefined) {
        correct = false;
    } else {
        let testInt;
        let hr = Number.parseInt(hour.charAt(0) + hour.charAt(1));
        let min = Number.parseInt(hour.charAt(3) + hour.charAt(4));
        let amOrPm = hour.charAt(5) + hour.charAt(6);
        for (let i = 0; i < 7 && correct ; i++) {
            testInt = Number.parseInt(hour.charAt(i));
            if (i === 2 && hour.charAt(i) !== ':') {
                correct = false;  
            } else if (i !== 2 && testInt === NaN) {
                correct = false;
            } else if (hr < 1 || hr > 12 || min < 0 || min > 59) {
                correct = false;
            } else if (amOrPm !== "PM" && amOrPm !== "AM"){ 
                correct = false;
            }
        }
    }
    return correct;
}


// parsing 
convert(process.argv[2], process.argv[3]);