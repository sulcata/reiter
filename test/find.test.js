import { find } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("find(predicate, iterable)", () => {
  test("finds the first value matching a predicate", () => {
    const isEven = jest.fn(n => !(n % 2));
    expect(find(isEven, [1, 2, 3, 4])).toBe(2);
    expect(isEven.mock.calls).toEqual([[1], [2]]);
  });

  test("returns undefined when no values are found", () => {
    const notCalled = jest.fn();
    expect(find(notCalled, [])).toBeUndefined();
    expect(notCalled.mock.calls).toHaveLength(0);
  });
});
