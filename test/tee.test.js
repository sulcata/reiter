import { iter, tee } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("tee(iterable)", () => {
  test("tees an iterable into n copy iterators", () => {
    const iterator = iter([1, 2, 3, 4, 5]);
    const [copy1, copy2] = tee(2, iterator);
    expect(copy1).toIterEqual(copy2);
  });
});
