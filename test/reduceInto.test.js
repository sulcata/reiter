import { reduceInto } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("reduceInto(reducer, accumulator, iterable)", () => {
  test("reduces into an accumulator", () => {
    const multiply = jest.fn((a, b) => a * b);
    expect(reduceInto(multiply, 1, [2, 3, 2])).toBe(12);
    expect(multiply.mock.calls).toEqual([[1, 2], [2, 3], [6, 2]]);
  });

  test("empty iterable returns the accumulator and does not call the reducer", () => {
    const notCalled = jest.fn();
    expect(reduceInto(notCalled, 42, [])).toBe(42);
    expect(notCalled.mock.calls).toHaveLength(0);
  });
});
