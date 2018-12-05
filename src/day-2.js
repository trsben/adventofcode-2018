export const checksum = function(boxIds) {
    boxIds = boxIds.split(',').map(boxId => boxId.trim());

    let doubleChecked = 0;
    let tripleChecked = 0;

    boxIds.forEach(boxId => {
        let boxCount = {};

        boxId.split('').forEach(letter => {
            boxCount[letter] = (boxCount[letter]) ? boxCount[letter] + 1 : 1;
        });

        if (Object.values(boxCount).includes(2)) {
            doubleChecked++;
        }

        if (Object.values(boxCount).includes(3)) {
            tripleChecked++;
        }
    });

    return doubleChecked * tripleChecked;
}

const checkDifference = function(x, y) {
    let difference = 0;

    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            difference++;
        }
    }
    return difference;
}

const findCommonLetters = function(x, y) {
    let commonLetters = [];

    for (let i = 0; i < x.length; i++) {
        if (x[i] === y[i]) {
            commonLetters.push(x[i]);
        }
    }

    return commonLetters.join('');
}

export const fabricFind = function(boxIds) {
    boxIds = boxIds.split(',').map(boxId => boxId.trim());

    for (let i = 0; i < boxIds.length; i++) {
        for (let j = 0; j < boxIds.length; j++) {
            if (checkDifference(boxIds[i], boxIds[j]) === 1) {
                return findCommonLetters(boxIds[i], boxIds[j]);
            }
        }
    }

    return false;
}
