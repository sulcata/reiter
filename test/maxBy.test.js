import { maxBy } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("maxBy(iteratee, iterable)", () => {
  test("finds the first maximal element of an iterable by the iteratee", () => {
    const getValue = jest.fn(object => object.value);
    const array = [{ value: 1 }, { value: 10 }, { value: 0 }, { value: 10 }, { value: -3 }];
    expect(maxBy(getValue, array)).toBe(array[1]);
    expect(getValue.mock.calls).toEqual(array.map(object => [object]));
  });

  test("returns undefined when there are no elements", () => {
    const notCalled = jest.fn();
    expect(maxBy(notCalled, [])).toBeUndefined();
    expect(notCalled.mock.calls).toHaveLength(0);
  });
});
