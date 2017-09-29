import { uniqBy } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("uniqBy(iteratee, iterable)", () => {
  test("excludes values whose iteratee values are equal based on SameValueZero", () => {
    const inverse = jest.fn(x => 1 / x);
    const values = [1, 0, 1, 1, -0, 1, 1, NaN, NaN];
    expect(uniqBy(inverse, values)).toIterEqual([1, 0, -0, NaN]);
    expect(inverse.mock.calls).toEqual(values.map(value => [value]));
  });
});
