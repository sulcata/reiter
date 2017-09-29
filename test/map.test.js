import { map } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("map(iteratee, iterable)", () => {
  test("maps the values of an iterable", () => {
    const double = jest.fn(n => 2 * n);
    const array = [1, 2, 3];
    const doubledArray = [2, 4, 6];
    expect(map(double, array)).toIterEqual(doubledArray);
    expect(double.mock.calls).toEqual(array.map(n => [n]));
  });
});
