import { exclude } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("exclude(values, iterable)", () => {
  test("excludes values based on SameValueZero", () => {
    const excludeValues = [1, 0, NaN];
    const values = [1, 0, 3, -0, NaN, 4];
    expect(exclude(excludeValues, values)).toIterEqual([3, 4]);
  });
});
