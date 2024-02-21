import { test } from "@jest/globals";
import { search } from "./index";

const array = Array.from({ length: 20 }, (_, i) => {
  return {
    id: i + 2,
    value: `Value number ${i}`
  };
});

test("test binary search", () => {
  search(array, 6);
});
test("Should break search if id not found", () => {
  search(array, 7);
});

test("Should break search if id not found", () => {
  search(array, -1);
});