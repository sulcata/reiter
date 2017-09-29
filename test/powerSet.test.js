import { powerSet } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("powerSet(set)", () => {
  test("power set of the empty set is only the empty set", () => {
    expect(powerSet([])).toIterEqual([[]]);
  });

  test("maximizes sets yielded before iterating to the next value", () => {
    expect(powerSet([1, 2, 3])).toIterEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3]
    ]);
  });
});
