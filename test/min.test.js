import { min } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("min(iterable)", () => {
  test("finds the first minimal value of an iterable", () => {
    const array = [{ valueOf: () => 1 }, { valueOf: () => -10 }, { valueOf: () => 0 }, { valueOf: () => -10 }, { valueOf: () => -3 }];
    expect(min(array)).toBe(array[1]);
  });

  test("returns undefined when there are no values", () => {
    expect(min([])).toBeUndefined();
  });
});
