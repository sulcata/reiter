import { nth } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("nth(n, iterable)", () => {
  test("gets the nth value", () => {
    expect(nth(2, [1, 2, 3, 4])).toBe(3);
    expect(nth(27, [1, 2, 3, 4])).toBe(undefined);
  });
});
