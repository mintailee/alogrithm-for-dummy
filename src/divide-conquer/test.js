
import { test, expect } from "@jest/globals";
import { sumRecursive } from "./recursive";

test("Test the recursive function", () => {
    const arr = [ 2, 3, 4];
    console.log(sumRecursive(arr));
    expect(sumRecursive(arr), 10);
    expect(sumRecursive(arr), 8);
})