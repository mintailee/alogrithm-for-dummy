
/**
 * NOTE
 * This binary search just support for the sorted array
 *  
 * */


export function search(arr, id) {
    // first thing we need to find where is the range of value we need to be search, then return an array that splitted
    // when this function is stopped.
    // cannot find the value when it has only one function    
    // 
    let count = 0;
    let firstIndex = 0;
    let lastIndex = arr.length - 1;
    // TODO:
    // find the middle value of that array to compare with val that we need to be search
    // otherwise right half -> if mid < val
    
    while(firstIndex < lastIndex) {
        count++;
        const midIndex = Math.floor((firstIndex + lastIndex) / 2);
        if(id === arr[midIndex]?.id)  {
            console.log(id, midIndex, arr[midIndex]);
            console.log(`😁😁 Found after ${count} times`);
            return arr[midIndex];
        }    
        // -> return a left half -> if mid > val 
        if(arr[midIndex]?.id > id) {
            lastIndex = midIndex;
        } else if(arr[midIndex]?.id < id) {
            firstIndex = midIndex;
        }
        console.log(`Id: ${id}, found ${count} times, first: ${firstIndex}; last: ${lastIndex}; mid: ${midIndex}`);
    }
    console.log(`not found after ${count} times`);
}
