import { uniqWith } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("uniqWith(comparator, iterable)", () => {
  test("excludes elements which are equal based on the comparator", () => {
    const strictEquality = jest.fn((a, b) => a === b);
    const values = [1, 0, 1, 1, -0, 1, 1, NaN, NaN];
    expect(uniqWith(strictEquality, values)).toIterEqual([1, 0, NaN, NaN]);
    expect(strictEquality.mock.calls).toHaveLength(12);
  });
});
