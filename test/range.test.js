import { range } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("range(start, stop, step)", () => {
  test("counts forwards by the given step", () => {
    expect(range(0, 8, 2)).toIterEqual([0, 2, 4, 6]);
  });

  test("negative step is allowed", () => {
    expect(range(4, 0, -1)).toIterEqual([4, 3, 2, 1]);
  });

  test("zero step fails to iterate", () => {
    expect(range(4, 0, 0)).toIterEqual([]);
    expect(range(4, 0, -0)).toIterEqual([]);
  });
});
