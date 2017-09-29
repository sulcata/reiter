import { repeat } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("repeat(value)", () => {
  test("yields the value endlessly", () => {
    expect(repeat(42)).toIterMatch([42, 42, 42, 42]);
  });
});
