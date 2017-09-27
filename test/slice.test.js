import { slice } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("slice(start, stop, step, iterable)", () => {
  test("slices an iterable from start to stop, incrementing by step", () => {
    function* fib() {
      let a = 1;
      let b = 1;
      for (;;) {
        yield a;
        [a, b] = [b, a + b];
      }
    }
    expect(slice(3, 6, 1, fib())).toIterEqual([3, 5, 8]);
    expect(slice(0, 3, 1, fib())).toIterEqual([1, 1, 2]);
    expect(slice(0, 1, 42, fib())).toIterEqual([1]);
    expect(slice(0, 5, 1, slice(0, 1, 42, fib()))).toIterEqual([1]);
    expect(slice(0, 1, 5, slice(0, 1, 42, fib()))).toIterEqual([1]);
    expect(slice(0, null, 2, fib())).toIterMatch([1, 2, 5, 13, 34]);
  });
});
