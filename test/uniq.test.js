import { uniq } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("uniq(iterable)", () => {
  test("excludes values which are equal based on SameValueZero", () => {
    const values = [1, 0, 1, 1, -0, 1, 1, NaN, NaN];
    expect(uniq(values)).toIterEqual([1, 0, NaN]);
  });
});
