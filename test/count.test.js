import { count } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("count(start, step)", () => {
  test("positive steps count forwards", () => {
    expect(count(1, 1)).toIterMatch([1, 2, 3, 4]);
  });

  test("negative steps count backwards", () => {
    expect(count(1, -2)).toIterMatch([1, -1, -3, -5]);
  });
});
