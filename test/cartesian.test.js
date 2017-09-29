import { cartesian } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("cartesian(set1, set2)", () => {
  test("finds the cartesian product", () => {
    expect(cartesian([1, 2], [3, 4, 5])).toIterEqual([
      [1, 3],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 4],
      [2, 5]
    ]);
  });
});
