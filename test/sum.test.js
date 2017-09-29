import { sum } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("sum(iterable)", () => {
  test("empty sum is 0", () => {
    expect(sum([])).toBe(0);
  });

  test("finds the sum of the values of the iterable", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });
});
