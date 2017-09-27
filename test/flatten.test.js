import { flatten } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("flatten(iterable)", () => {
  test("flattens an iterable once", () => {
    expect(flatten([1, 2, [3, [4]]])).toIterEqual([1, 2, 3, [4]]);
  });

  test("will not flatten a non-spreadable element", () => {
    expect(flatten([1, [2], "abc"])).toIterEqual([1, 2, "abc"]);
  });
});
