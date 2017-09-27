import { next } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("next(iterator)", () => {
  test("calls next on the iterator", () => {
    const mockedIterator = { next: jest.fn(() => ({ done: false, value: 2 })) };
    expect(next(mockedIterator)).toEqual({ done: false, value: 2 });
    expect(mockedIterator.next.mock.calls).toEqual([[]]);
  });
});
