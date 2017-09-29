import { prepend } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("prepend(items, iterable)", () => {
  test("prepends the items if they are spreadable", () => {
    expect(prepend(1, "abc")).toIterEqual([1, "a", "b", "c"]);
  });
});
