import { accumulate } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("accumulate(iteratee, iterable)", () => {
  test("empty iterable", () => {
    const add = jest.fn((a, b) => a + b);
    expect(accumulate(add, [])).toIterEqual([]);
    expect(add.mock.calls).toHaveLength(0);
  });

  test("accumulates", () => {
    const add = jest.fn((a, b) => a + b);
    expect(accumulate(add, [1, 2, 3])).toIterEqual([1, 3, 6]);
    expect(add.mock.calls).toEqual([[1, 2], [3, 3]]);
  });
});
