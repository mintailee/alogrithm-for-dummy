import { test, expect, describe } from "@jest/globals";
import { quickSort } from ".";


describe('Quick sort', () => {
    test('Should return the array sorted', () => {
        const array = [3, 1, 7, 5, 4, 6];
        const arrayQS = quickSort(array);
        expect(arrayQS).toEqual(array.sort());
        expect(arrayQS[0]).toBe(1);
    })
});
