import { isIterable } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("isIterable(value)", () => {
  test("tests if the value is iterable", () => {
    expect(isIterable(null)).toBe(false);
    expect(isIterable(undefined)).toBe(false);
    expect(isIterable(0)).toBe(false);
    expect(isIterable(1)).toBe(false);
    expect(isIterable({})).toBe(false);
    expect(isIterable({ next: null })).toBe(false);

    expect(isIterable([])).toBe(true);
    expect(isIterable({ next: jest.fn() })).toBe(true);
    expect(isIterable("")).toBe(true);
    expect(isIterable({ [Symbol.iterator]: jest.fn() })).toBe(true);
  });
});
