import { drop } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("drop(n, iterable)", () => {
  test("drops the first n values", () => {
    expect(drop(2, [1, 2, 3, 4])).toIterEqual([3, 4]);
    expect(drop(42, [1, 2, 3, 4])).toIterEqual([]);
  });
});
