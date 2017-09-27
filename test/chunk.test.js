import { chunk } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("chunk(chunkSize, iterable)", () => {
  test("chunks up an iterable", () => {
    expect(chunk(2, [1, 2, 3])).toIterEqual([[1, 2], [3]]);
    expect(chunk(2, [1, 2, 3, 4])).toIterEqual([[1, 2], [3, 4]]);
    expect(chunk(4, [1, 2, 3, 4])).toIterEqual([[1, 2, 3, 4]]);
    expect(chunk(0, [1, 2, 3, 4])).toIterEqual([[1], [2], [3], [4]]);
  });
});
