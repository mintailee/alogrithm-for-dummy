
/**
 * WATCH:  
 * Binary search is only useful when we search an array is already sorted
 *  
 * */

export interface User {
    id: number;
    name: string;
}

export function search(arr: User[], id: number): User {
    let firstIndex = 0;
    let lastIndex = arr.length
    
    while(firstIndex <= lastIndex) {
        const midIndex = Math.floor((firstIndex + lastIndex) / 2);
        const user = arr[midIndex];
        if(user.id === id) {
            return user;
        } else if (user.id > id) {
            lastIndex = midIndex - 1;
        } else {
            firstIndex = midIndex + 1;
        }
    }
    throw Error(`We didn't found any user with the id: ${id} in your list`);
}

export function searchRecursive(arr: User[], id: number): User {
    if(arr.length === 1) {
        if(arr[0].id === id) {
            return arr[0];
        }
        throw Error(`We didn't found any user with the id: ${id} in your list`);
    }
    const midIndex = Math.floor(arr.length / 2);
    const user = arr[midIndex];

    if(user.id === id) {
        return user;
    }
    const start = user.id > id ? 0 : midIndex;
    const end = user.id > id ? midIndex : arr.length;
    return searchRecursive(arr.slice(start, end), id);
}