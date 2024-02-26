import {test} from "@jest/globals";
import { quickSort } from ".";

test("Test quick sort", () => {
    console.log(quickSort([3, 1, 7, 5, 4, 6]));
})