import { includes } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("includes(value, iterable)", () => {
  test("finds the first matching value using SameValueZero", () => {
    const includesZero = includes(0);
    const includesTheAnswer = includes(42);
    const includesNaN = includes(NaN);
    const values = [1, 3, -0, NaN];
    expect(includesZero(values)).toBe(true);
    expect(includesNaN(values)).toBe(true);
    expect(includesTheAnswer(values)).toBe(false);
  });
});
