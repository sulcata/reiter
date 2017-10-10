import { include } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("include(values, iterable)", () => {
  test("includes values based on SameValueZero", () => {
    const includeValues = [3, 4];
    const values = [1, 0, 3, -0, 1, NaN, 4];
    expect(include(includeValues, values)).toIterEqual([3, 4]);
  });
});
