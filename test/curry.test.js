import {
  _,
  combinations,
  compose,
  curry,
  maxBy,
  product,
  range
} from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("curry(fn)", () => {
  test("supports placeholders and no args", () => {
    expect(
      compose([
        range(0, _, 1)(_, _)(),
        combinations(2)(_),
        maxBy(pair => Math.hypot(...pair))(),
        product
      ])(10)
    ).toBe(72);
  });

  test("includes extraneous arguments", () => {
    const id = jest.fn(x => x);
    const curriedId = curry(id, true);
    expect(curriedId(1, 2, 3)).toBe(1);
    expect(id.mock.calls).toEqual([[1]]);
  });
});
