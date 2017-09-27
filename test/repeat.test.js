import { repeat } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("repeat(element)", () => {
  test("yields the element endlessly", () => {
    expect(repeat(42)).toIterMatch([42, 42, 42, 42]);
  });
});
