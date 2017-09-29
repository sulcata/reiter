import { filter } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("filter(predicate, iterable)", () => {
  test("yields all values which satisfy the predicate", () => {
    const isOdd = jest.fn(n => n % 2);
    const array1 = [1, 2, 3, 4];
    expect(filter(isOdd, array1)).toIterEqual([1, 3]);
    expect(isOdd.mock.calls).toEqual(array1.map(n => [n]));
    isOdd.mockClear();
    const array2 = [];
    expect(filter(isOdd, array2)).toIterEqual([]);
    expect(isOdd.mock.calls).toEqual(array2.map(n => [n]));
  });
});
