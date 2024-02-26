export function quickSort(array) {
    if(array.length < 2) {
        return array;
    }
    const pivot = array[0];
    const left = array.filter(a => a < pivot);
    const right = array.filter(a => a > pivot);
    console.log(left, right);
    return quickSort(left).concat([pivot]).concat(quickSort(right));
}