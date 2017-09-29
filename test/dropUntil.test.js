import { dropUntil } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("dropUntil(predicate, iterable)", () => {
  test("drops values until the predicate is met", () => {
    const isEven = jest.fn(n => !(n % 2));
    expect(dropUntil(isEven, [1, 5, 2, 3, 1])).toIterEqual([2, 3, 1]);
    expect(isEven.mock.calls).toEqual([[1], [5], [2]]);
    isEven.mockClear();
    expect(dropUntil(isEven, [1, 5, 1, 3, 1])).toIterEqual([]);
    expect(isEven.mock.calls).toEqual([[1], [5], [1], [3], [1]]);
  });
});
