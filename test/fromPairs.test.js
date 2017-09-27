import { fromPairs, toPairs } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("toPairs(object)", () => {
  test("yields [key, value] pairs of the object's own, enumerable keys", () => {
    function A() {
      this.a = 1;
      this.b = 2;
    }
    A.prototype.c = 3;
    const object = new A();
    expect(fromPairs(toPairs(object))).toEqual({ a: 1, b: 2 });
  });
});
