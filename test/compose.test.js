import { compose, iter } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("compose(functions)", () => {
  test("creates a functional composition", () => {
    const plusFiveDivideTwo = compose(iter([x => x + 5, x => x / 2]));
    expect(plusFiveDivideTwo(15)).toBe(10);
    expect(plusFiveDivideTwo(5)).toBe(5);
  });

  test("empty function list creates the identity function", () => {
    const identity = compose([]);
    expect(identity(10, 11, 12)).toBe(10);
  });
});
