import { cartesianAll } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("cartesianAll(pools)", () => {
  test("finds the cartesian product of all pools", () => {
    expect(cartesianAll([
        "a",
        [1, 2],
        [3, 4, 5]
      ])).toIterEqual([
      ["a", 1, 3],
      ["a", 1, 4],
      ["a", 1, 5],
      ["a", 2, 3],
      ["a", 2, 4],
      ["a", 2, 5]
    ]);
  });

  test("empty pool", () => {
    expect(cartesianAll([[], "a", [1, 2], [3, 4, 5]])).toIterEqual([]);
  });

  test("empty product", () => {
    expect(cartesianAll([])).toIterEqual([]);
  });
});
