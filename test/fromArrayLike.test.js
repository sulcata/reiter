import { fromArrayLike } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("fromArrayLike(arrayLike)", () => {
  test("creates an iterator from an array-like object", () => {
    expect(fromArrayLike({ length: 3, 0: 1, 1: 2, 2: 3 })).toIterEqual([
      1,
      2,
      3
    ]);
    expect(fromArrayLike([1, 2])).toIterEqual([1, 2]);
    expect(fromArrayLike({ length: 0, 0: 1, 1: 2 })).toIterEqual([]);
    expect(fromArrayLike({ length: 2 })).toIterEqual([undefined, undefined]);
  });
});
