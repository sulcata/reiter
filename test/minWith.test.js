import { minWith } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("minWith(comparator, iterable)", () => {
  test("finds the first minimal value of an iterable with the comparator", () => {
    const comparator = jest.fn((x, y) => y.value - x.value);
    const array = [
      { value: 1 },
      { value: 10 },
      { value: 0 },
      { value: 10 },
      { value: -3 }
    ];
    expect(minWith(comparator, array)).toBe(array[1]);
    expect(comparator.mock.calls).toMatchObject([
      expect.arrayContaining([{ value: 1 }, { value: 10 }]),
      expect.arrayContaining([{ value: 10 }, { value: 0 }]),
      expect.arrayContaining([{ value: 10 }, { value: 10 }]),
      expect.arrayContaining([{ value: 10 }, { value: -3 }])
    ]);
  });

  test("returns undefined when there are no values", () => {
    const notCalled = jest.fn();
    expect(minWith(notCalled, [])).toBeUndefined();
    expect(notCalled.mock.calls).toHaveLength(0);
  });
});
