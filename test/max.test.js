import { max } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("max(iterable)", () => {
  test("finds the first maximal element of an iterable", () => {
    const array = [{ valueOf: () => 1 }, { valueOf: () => 10 }, { valueOf: () => 0 }, { valueOf: () => 10 }, { valueOf: () => -3 }];
    expect(max(array)).toBe(array[1]);
  });

  test("returns undefined when there are no elements", () => {
    expect(max([])).toBeUndefined();
  });
});
