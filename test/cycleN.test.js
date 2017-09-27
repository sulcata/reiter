import { cycleN } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("cycleN(n, iterable)", () => {
  test("0 length cycle will not iterate", () => {
    expect(cycleN(0, [1, 2])).toIterEqual([]);
  });

  test("cycle iterates n times", () => {
    expect(cycleN(2, [1, 2])).toIterEqual([1, 2, 1, 2]);
  });
});
