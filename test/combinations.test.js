import { combinations } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("combinations(r, pool)", () => {
  test("size 0 combinations are only the empty set", () => {
    expect(combinations(0, [1, 2])).toIterEqual([[]]);
  });

  test("there are no combinations larger than the pool", () => {
    expect(combinations(4, [1, 2, 3])).toIterEqual([]);
  });

  test("combinations are yielded in lexicographical order", () => {
    expect(combinations(2, [1, 2, 3])).toIterEqual([[1, 2], [1, 3], [2, 3]]);
  });
});
