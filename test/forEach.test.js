import { forEach } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("forEach(iteratee, iterable)", () => {
  test("calls iteratee for each value in iterable", () => {
    const array = [1, 2, 3];
    const fn = jest.fn();
    forEach(fn, array);
    expect(fn.mock.calls).toEqual(array.map(n => [n]));
  });
});
