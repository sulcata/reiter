import { flow } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("flow(functions)", () => {
  test("creates a function composition", () => {
    const plusFiveDivideTwo = flow([x => x + 5, x => x / 2]);
    expect(plusFiveDivideTwo(15)).toBe(10);
  });
});
