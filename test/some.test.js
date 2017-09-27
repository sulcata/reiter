import { some } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("some(predicate, iterable)", () => {
  test("checks if some element satisfies the predicate", () => {
    const isPositive = jest.fn(n => n > 0);
    expect(some(isPositive, [-1, 1, 2, 3])).toBe(true);
    expect(isPositive.mock.calls).toEqual([[-1], [1]]);
    isPositive.mockClear();
    expect(some(isPositive, [-1, -2, 0])).toBe(false);
    expect(isPositive.mock.calls).toEqual([[-1], [-2], [0]]);
  });

  test("empty is false", () => {
    const notCalled = jest.fn();
    expect(some(notCalled, [])).toBe(false);
    expect(notCalled.mock.calls).toHaveLength(0);
  });
});
