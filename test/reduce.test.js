import { reduce } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("reduce(reducer, iterable)", () => {
  test("reduces", () => {
    const pow = jest.fn((a, b) => a ** b);
    expect(reduce(pow, [2, 3, 2])).toBe(64);
    expect(pow.mock.calls).toEqual([[2, 3], [8, 2]]);
  });

  test("empty iterable returns undefined and does not call the reducer", () => {
    const notCalled = jest.fn();
    expect(reduce(notCalled, [])).toBeUndefined();
    expect(notCalled.mock.calls).toHaveLength(0);
  });
});
