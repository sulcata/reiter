import { compact } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("compact(iterable)", () => {
  test("yields all truthy values", () => {
    expect(compact([0, 1, 2, null, 3 - 0])).toIterEqual([1, 2, 3]);
  });
});
