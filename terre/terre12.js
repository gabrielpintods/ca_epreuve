function verif(hour, ...restParam) {
    let correct = true; 
    if (hour.charAt(5) !== '' || restParam[0] !== undefined) {
        correct = false;
    } else {
        let testInt;
        let hr;
        let min;
        for(let i = 0; i < 5 && correct ; i++) {
            testInt = Number.parseInt(hour.charAt(i));
            hr = Number.parseInt(hour.charAt(0) + hour.charAt(1));
            min = Number.parseInt(hour.charAt(3) + hour.charAt(4));
            if(i === 2 && hour.charAt(i) !== ':') {
                correct = false;  
            } else if (i !== 2 && testInt === NaN) {
                correct = false;
            } else if (hr < 0 || hr > 23 || min < 0 || min > 59) {
                correct = false;
            }
        }
    }
    return correct;
}

function convert(oldHour, ...restParam) {
    if((!verif(oldHour, ...restParam))) {
        console.error('error');
    } else {
        let hour = Number.parseInt(oldHour.charAt(0) + oldHour.charAt(1));
        let newHour;
        if (hour > 12) {
            newHour = hour - 12 + ":" + oldHour.charAt(3) + oldHour.charAt(4) + "PM";
        } else if(hour < 1) {
            newHour = "12:" + oldHour.charAt(3) + oldHour.charAt(4) + "AM";
        } else if (hour === 12) {
            oldHour = oldHour + "PM";
            newHour = oldHour;
        } else {
            oldHour = oldHour + "AM";
            newHour = oldHour;
        }
        console.log(newHour);
    }
}

convert(process.argv[2], process.argv[3]);