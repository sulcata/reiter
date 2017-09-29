import { product } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("product(iterable)", () => {
  test("empty product is 1", () => {
    expect(product([])).toBe(1);
  });

  test("finds the product of the values of the iterable", () => {
    expect(product([1, 2, 3, 4])).toBe(24);
  });
});
