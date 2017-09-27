import { unzip } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("unzip(iterables)", () => {
  test("unzips a set of iterables", () => {
    expect(unzip([
        [1, 2, 3],
        [4, 5],
        "abc"
      ])).toIterEqual([[1, 4, "a"], [2, 5, "b"]]);

    expect(unzip([])).toIterEqual([]);
  });
});
