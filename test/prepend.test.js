import { prepend, iter } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("prepend(items, iterable)", () => {
  test("prepends the items if they are spreadable", () => {
    const prependSpreadable = prepend(iter("abc"));
    expect(prependSpreadable([1, 2, 3])).toIterEqual(["a", "b", "c", 1, 2, 3]);
  });

  test("prepends the item if it is non-spreadable", () => {
    const prependNonSpreadable = prepend("abc");
    expect(prependNonSpreadable([1, 2, 3])).toIterEqual(["abc", 1, 2, 3]);
  });
});
