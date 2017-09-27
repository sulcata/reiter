import { flattenDepth } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("flattenDepth(iterable)", () => {
  test("flattens an iterable n times", () => {
    const flattenTwice = flattenDepth(2);
    expect(flattenTwice([[[1, [2]], [3, 4]]])).toIterEqual([1, [2], 3, 4]);
  });

  test("will not flatten a non-spreadable element", () => {
    expect(flattenDepth(5, [1, [2], "abc"])).toIterEqual([1, 2, "abc"]);
  });
});
