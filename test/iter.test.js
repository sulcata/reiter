import { iter } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("iter(collection)", () => {
  test("casts the collection to an iterator", () => {
    const fakeIterator = { next: jest.fn() };
    expect(iter(fakeIterator)).toBe(fakeIterator);
    expect(iter("abc")).not.toBe("abc");
    expect(iter("abc").next()).toEqual({ value: "a", done: false });
  });
});
