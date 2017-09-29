import { repeatN } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("repeatN(n, value)", () => {
  test("yields the value n times", () => {
    expect(repeatN(2, 42)).toIterEqual([42, 42]);
  });
});
