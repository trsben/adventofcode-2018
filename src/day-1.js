export const calibration = function (input) {
    return input
        .split(',')
        .reduce((accumulator, frequency) =>  accumulator + parseInt(frequency.trim()), 0);
}

export const recalibration = function (input) {
    const frequencies = input.split(',').map(frequency => parseInt(frequency.trim()));
    
    let i = 0;
    let pastTotals = [];
    let runningTotal = 0;

    while (!pastTotals.includes(runningTotal)) {
        pastTotals.push(runningTotal);
        
        runningTotal += frequencies[i];

        i++;
        
        if (i === frequencies.length) {
            i = 0;
        }
    }

    return runningTotal;
}
