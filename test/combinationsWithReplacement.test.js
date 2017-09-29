import { combinationsWithReplacement } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("combinationsWithReplacement(r, set)", () => {
  test("size 0 combinations are only the empty set", () => {
    expect(combinationsWithReplacement(0, [1, 2])).toIterEqual([[]]);
  });

  test("combinations yielded in lexicographical order", () => {
    expect(combinationsWithReplacement(4, [
        1,
        2,
        3
      ])).toIterEqual([
      [1, 1, 1, 1],
      [1, 1, 1, 2],
      [1, 1, 1, 3],
      [1, 1, 2, 2],
      [1, 1, 2, 3],
      [1, 1, 3, 3],
      [1, 2, 2, 2],
      [1, 2, 2, 3],
      [1, 2, 3, 3],
      [1, 3, 3, 3],
      [2, 2, 2, 2],
      [2, 2, 2, 3],
      [2, 2, 3, 3],
      [2, 3, 3, 3],
      [3, 3, 3, 3]
    ]);
  });
});
