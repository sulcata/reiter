import { enumerate } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("enumerate(iterable)", () => {
  test("enumerates the elements of the iterable from 0", () => {
    expect(enumerate("ABC")).toIterEqual([[0, "A"], [1, "B"], [2, "C"]]);
  });
});
