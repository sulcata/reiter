import { zip } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("zip(iterable1, iterable2)", () => {
  test("zips two iterables", () => {
    expect(zip("abc", [1, 2, 3])).toIterEqual([["a", 1], ["b", 2], ["c", 3]]);
  });
});
