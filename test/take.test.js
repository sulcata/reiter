import { take } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("take(n, iterable)", () => {
  test("takes the first n values", () => {
    expect(take(2, [1, 2, 3, 4])).toIterEqual([1, 2]);
    expect(take(42, [1, 2, 3, 4])).toIterEqual([1, 2, 3, 4]);
  });
});
