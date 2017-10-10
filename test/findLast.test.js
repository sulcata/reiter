import { findLast } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("findLast(predicate, iterable)", () => {
  test("finds the last value matching a predicate", () => {
    const isEven = jest.fn(n => !(n % 2));
    const values = [1, 2, 3, 4];
    expect(findLast(isEven, values)).toBe(4);
    expect(isEven.mock.calls).toEqual(values.map(value => [value]));
  });

  test("returns undefined when no values are found", () => {
    const notCalled = jest.fn();
    expect(findLast(notCalled, [])).toBeUndefined();
    expect(notCalled.mock.calls).toHaveLength(0);
  });
});
