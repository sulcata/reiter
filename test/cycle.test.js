import { cycle } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("cycle(iterable)", () => {
  test("cycles infinitely", () => {
    expect(cycle([1, 2])).toIterMatch([1, 2, 1, 2, 1, 2, 1]);
  });
});
