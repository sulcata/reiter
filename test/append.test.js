import { append, iter } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("append(items, iterable)", () => {
  test("appends the items if they are spreadable", () => {
    const appendSpreadable = append(iter("abc"));
    expect(appendSpreadable([1, 2, 3])).toIterEqual([1, 2, 3, "a", "b", "c"]);
  });

  test("appends the item if it is non-spreadable", () => {
    const appendNonSpreadable = append("abc");
    expect(appendNonSpreadable([1, 2, 3])).toIterEqual([1, 2, 3, "abc"]);
  });
});
