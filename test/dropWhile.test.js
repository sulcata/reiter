import { dropWhile } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("dropWhile(predicate, iterable)", () => {
  test("drops elements while the predicate is met", () => {
    const isOdd = jest.fn(n => n % 2);
    expect(dropWhile(isOdd, [1, 5, 2, 3, 1])).toIterEqual([2, 3, 1]);
    expect(isOdd.mock.calls).toEqual([[1], [5], [2]]);
    isOdd.mockClear();
    expect(dropWhile(isOdd, [1, 5, 1, 3, 1])).toIterEqual([]);
    expect(isOdd.mock.calls).toEqual([[1], [5], [1], [3], [1]]);
  });
});
