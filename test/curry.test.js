import curry from "__curry__";
import {
  combinations,
  flow,
  maxBy,
  product,
  range,
  placeholder as _
} from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("curry(fn)", () => {
  test("supports placeholders and no args", () => {
    expect(
      flow([
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
