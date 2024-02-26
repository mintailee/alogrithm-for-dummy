// Every recursive function have two parts: 
// Base case and Recursive case
// base case -> stop the function call itself -> avoid infinity call
// Recursive case -> the function will call itself

/**
 * Example sum up all elements in the array
 * @param arr 
 * Use for loop
 */

export function sum(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

/**
 * The same with above with recursive
 */
export function sumRecursive(arr) {
    if(arr.length == 0) {
        return 0;
    }
    if(arr.length == 1) {
        return arr[0];
    }
    return arr[0] + sumRecursive(arr.slice(1));
}