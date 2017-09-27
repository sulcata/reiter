import { chain } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("chain(iterable1, iterable2)", () => {
  test("chains two iterables together", () => {
    expect(chain([1, 2], [3, 4, 5])).toIterEqual([1, 2, 3, 4, 5]);
  });
});
