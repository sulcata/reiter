import { takeWhile } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("takeWhile(predicate, iterable)", () => {
  test("takes values while the predicate is met", () => {
    const isOdd = jest.fn(n => n % 2);
    expect(takeWhile(isOdd, [1, 5, 2, 3, 1])).toIterEqual([1, 5]);
    expect(isOdd.mock.calls).toEqual([[1], [5], [2]]);
    isOdd.mockClear();
    expect(takeWhile(isOdd, [1, 5, 1, 3, 1])).toIterEqual([1, 5, 1, 3, 1]);
    expect(isOdd.mock.calls).toEqual([[1], [5], [1], [3], [1]]);
  });
});
