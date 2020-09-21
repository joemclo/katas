function combineArrays(array1, array2) {
    if (array2.length > array1.length) {
        const temp = array2;
        array2 = array1;
        array1 = temp;
    }

    const combinedArray = [];

    const separator = Math.floor(array1.length / (array2.length + 1));

    let counter2 = 0;

    array1.forEach((value) => {
        if (counter2 == separator) {
            combinedArray.push(array2.shift());
            counter2 = 0;
        }
        combinedArray.push(value);
        counter2 += 1;
    });

    return combinedArray;
}
export { combineArrays };
