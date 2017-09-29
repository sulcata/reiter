import { flattenDeep } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("flattenDeep(iterable)", () => {
  test("flattens an iterable recursively", () => {
    expect(flattenDeep([
        [[1, [2]], [3], "abc"]
      ])).toIterEqual([1, 2, 3, "a", "b", "c"]);
  });
});
