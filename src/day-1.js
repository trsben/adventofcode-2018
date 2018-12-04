const calibration = function (frequencies) {
    return frequencies.split(',').reduce((accumulator, frequency) => {
        return accumulator + parseInt(frequency.trim())
    }, 0)
}

export default calibration
