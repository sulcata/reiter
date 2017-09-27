import { iter, reiter } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("reiter(iterable)", () => {
  test("creates a reusable iterable object from another iterable/iterator", () => {
    const reiterable = reiter(iter([1, 2, 3, 4]));
    expect([...reiterable]).toEqual([1, 2, 3, 4]);
    expect([...reiterable]).toEqual([1, 2, 3, 4]);
    const reiterable2 = reiter(reiterable);
    expect([...reiterable2]).toEqual([1, 2, 3, 4]);
  });
});
