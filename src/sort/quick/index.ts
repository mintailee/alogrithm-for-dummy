export function quickSort(array: number[]) {
    if(array.length < 2) {
        return array;
    }
    const pivot = array[0];
    const left = array.filter(a => a < pivot);
    const right = array.filter(a => a > pivot);
    return quickSort(left).concat([pivot]).concat(quickSort(right));
}