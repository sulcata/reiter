import { repeatN } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("repeatN(n, element)", () => {
  test("yields the element n times", () => {
    expect(repeatN(2, 42)).toIterEqual([42, 42]);
  });
});
