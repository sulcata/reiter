import { includes } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("includes(value, iterable)", () => {
  test("finds the first matching value using SameValueZero", () => {
    const includesZero = includes(0);
    const includesTheAnswer = includes(42);
    const includesNaN = includes(NaN);
    const elements = [1, 3, -0, NaN];
    expect(includesZero(elements)).toBe(true);
    expect(includesNaN(elements)).toBe(true);
    expect(includesTheAnswer(elements)).toBe(false);
  });
});
