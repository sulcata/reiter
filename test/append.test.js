import { append } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("append(value, iterable)", () => {
  test("appends the value to the iterable", () => {
    expect(append(1, "abc")).toIterEqual(["a", "b", "c", 1]);
  });
});
