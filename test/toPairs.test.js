import { toPairs } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("fromPairs(pairs)", () => {
  test("returns the object formed from [key, value] pairs", () => {
    function A() {
      this.a = 1;
      this.b = 2;
    }
    A.prototype.c = 3;
    const object = new A();
    expect([
      ...toPairs(object)
    ]).toEqual(expect.arrayContaining([["a", 1], ["b", 2]]));
  });
});
