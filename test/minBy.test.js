import { minBy } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("minBy(iteratee, iterable)", () => {
  test("finds the first minimal value of an iterable by the iteratee", () => {
    const getValue = jest.fn(object => object.value);
    const array = [{ value: 1 }, { value: -10 }, { value: 0 }, { value: -10 }, { value: -3 }];
    expect(minBy(getValue, array)).toBe(array[1]);
    expect(getValue.mock.calls).toEqual(array.map(object => [object]));
  });

  test("returns undefined when there are no values", () => {
    const notCalled = jest.fn();
    expect(minBy(notCalled, [])).toBeUndefined();
    expect(notCalled.mock.calls).toHaveLength(0);
  });
});
