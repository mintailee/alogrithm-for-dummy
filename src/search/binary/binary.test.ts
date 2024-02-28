import { test, describe, expect } from "@jest/globals";
import { User, search, searchRecursive } from "./index";

describe("Binary search", () => {
  const array: User[] = [...Array(100000).keys()].map((i) => {
    return {
      id: i * 2,
      name: `Le Minh ${i * 2}`,
    };
  });
  const idFounded = 2800;
  const idNotFounded = 2801;
  describe("Binary search with for loop", () => {
    test("Should return user in the list", () => {
      const user: User = search(array, idFounded);
      expect(user.id).toBe(idFounded);
      expect(user.name).toBe(`Le Minh ${idFounded}`);
      // expect(search).toBeCalledTimes(3);
    });

    test("Should throw Error if user not found in the list", () => {
      expect(() => search(array, idNotFounded)).toThrowError();
    });
  });

  describe("Binary search with recursive", () => {
    test("Should return user in the list", () => {
      const user: User = searchRecursive(array, idFounded);
      expect(user.id).toBe(idFounded);
      expect(user.name).toBe(`Le Minh ${idFounded}`);
    });
    test("Should throw Error if user not found in the list", () => {
      expect(() => searchRecursive(array, idNotFounded)).toThrowError();
    });
  });
});
