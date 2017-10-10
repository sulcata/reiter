import { takeUntil } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("takeUntil(predicate, iterable)", () => {
  test("takes values until the predicate is met", () => {
    const isEven = jest.fn(n => !(n % 2));
    expect(takeUntil(isEven, [1, 5, 2, 3, 1])).toIterEqual([1, 5]);
    expect(isEven.mock.calls).toEqual([[1], [5], [2]]);
    isEven.mockClear();
    expect(takeUntil(isEven, [1, 5, 1, 3, 1])).toIterEqual([1, 5, 1, 3, 1]);
    expect(isEven.mock.calls).toEqual([[1], [5], [1], [3], [1]]);
  });
});
