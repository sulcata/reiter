import { maxWith } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("maxWith(comparator, iterable)", () => {
  test("finds the first maximal value of an iterable with the comparator", () => {
    const comparator = jest.fn((x, y) => y.value - x.value);
    const array = [{ value: 1 }, { value: -10 }, { value: 0 }, { value: -10 }, { value: -3 }];
    expect(maxWith(comparator, array)).toBe(array[1]);
    expect(comparator.mock.calls).toMatchObject([
      expect.arrayContaining([{ value: 1 }, { value: -10 }]),
      expect.arrayContaining([{ value: -10 }, { value: 0 }]),
      expect.arrayContaining([{ value: -10 }, { value: -10 }]),
      expect.arrayContaining([{ value: -10 }, { value: -3 }])
    ]);
  });

  test("returns undefined when there are no values", () => {
    const notCalled = jest.fn();
    expect(maxWith(notCalled, [])).toBeUndefined();
    expect(notCalled.mock.calls).toHaveLength(0);
  });
});
