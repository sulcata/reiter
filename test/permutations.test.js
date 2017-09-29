import { permutations } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("permutations(r, set)", () => {
  test("size 0 permutations are only the empty set", () => {
    expect(permutations(0, [1, 2])).toIterEqual([[]]);
  });

  test("there are no permutations larger than the set", () => {
    expect(permutations(4, [1, 2, 3])).toIterEqual([]);
  });

  test("permutations are yielded in lexicographical order", () => {
    expect(permutations(2, [1, 2, 3])).toIterEqual([
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 3],
      [3, 1],
      [3, 2]
    ]);
  });

  test("r == null yields permutations the same size as the iterable", () => {
    expect(permutations(null, [1, 2, 3])).toIterEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ]);
  });
});
