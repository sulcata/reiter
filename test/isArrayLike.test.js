import { isArrayLike } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("isArrayLike(value)", () => {
  test("functions are not array-like", () => {
    expect(isArrayLike((a, b) => a + b)).toBe(false);
  });

  test("array-likes have safe, non-negative, integral length", () => {
    expect(isArrayLike({ length: 3, 0: 1, 1: 2, 2: 3 })).toBe(true);
    expect(isArrayLike({ length: 0 })).toBe(true);
    expect(isArrayLike({ length: Number.MAX_SAFE_INTEGER })).toBe(true);

    expect(isArrayLike({ 0: 1, 1: 2, 2: 3 })).toBe(false);
    expect(isArrayLike({ length: 4.2 })).toBe(false);
    expect(isArrayLike({ length: -1 })).toBe(false);
    expect(isArrayLike({ length: 2 * Number.MAX_SAFE_INTEGER })).toBe(false);
    expect(isArrayLike({ length: "10" })).toBe(false);
  });
});
