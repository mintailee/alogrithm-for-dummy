import { test, describe, expect } from "@jest/globals";
import { User, search, searchRecursive } from "./index";

describe("Binary search", () => {
  const array: User[] = [...Array(10).keys()].map((i) => {
    return {
      id: i * 2,
      name: `Le Minh ${i * 2}`,
    };
  });
  describe("Binary search with for loop", () => {
    test("Should return user in the list", () => {
      const user: User = search(array, 8);
      expect(user.id).toBe(8);
      expect(user.name).toBe("Le Minh 8");
      // expect(search).toBeCalledTimes(3);
    });

    test("Should throw Error if user not found in the list", () => {
      expect(() => search(array, 7)).toThrowError();
    });
  });

  describe("Binary search with recursive", () => {
    test("Should return user in the list", () => {
      const user: User = searchRecursive(array, 8);
      expect(user.id).toBe(8);
      expect(user.name).toBe("Le Minh 8");
    });
    test("Should throw Error if user not found in the list", () => {
      expect(() => searchRecursive(array, 7)).toThrowError();
    });
  });
});
