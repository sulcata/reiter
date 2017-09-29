import { every } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("every(predicate, iterable)", () => {
  test("checks if every value satisfies the predicate", () => {
    const isPositive = jest.fn(n => n > 0);
    expect(every(isPositive, [1, 2, 3])).toBe(true);
    expect(isPositive.mock.calls).toEqual([[1], [2], [3]]);
    isPositive.mockClear();
    expect(every(isPositive, [-1, 2, 3])).toBe(false);
    expect(isPositive.mock.calls).toEqual([[-1]]);
  });

  test("empty is true", () => {
    const notCalled = jest.fn();
    expect(every(notCalled, [])).toBe(true);
    expect(notCalled.mock.calls).toHaveLength(0);
  });
});
