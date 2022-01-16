// Add your functions here

function map(sourceArray, callback) {
    let newArray = [];
    for (const elem of sourceArray) {
        newArray.push(callback(elem));
    };
    return newArray;
};

function reduce(sourceArray, callback, startValue) {
    let total;
    if (startValue) {
        total = startValue;
        for (const elem of sourceArray) {
            total = callback(elem, total);
        };
        return total;
    } else {
        total = sourceArray[0];
        for (let i = 1; i < sourceArray.length; i++) {
            total = callback(sourceArray[i], total);
        };
        return total;
    };
};