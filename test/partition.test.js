import { partition } from "reiter";
import * as matchers from "./matchers.js";

expect.extend(matchers);

describe("partition(iteratee, iterable)", () => {
  test("partitions an iterable", () => {
    const mod3 = jest.fn(n => n % 3);
    const numbers = [1, 1, 2, 3, 5, 8, 13, 21];
    const partitions = partition(mod3, numbers);
    const r1 = partitions.next().value;
    expect(r1[0]).toEqual(1);
    expect(r1[1]).toIterEqual([1, 1, 13]);
    const r2 = partitions.next().value;
    expect(r2[0]).toEqual(2);
    expect(r2[1]).toIterEqual([2, 5, 8]);
    const r0 = partitions.next().value;
    expect(r0[0]).toEqual(0);
    expect(r0[1]).toIterEqual([3, 21]);
    expect(partitions.next().done).toBe(true);
    expect(mod3.mock.calls).toEqual(numbers.map(n => [n]));
  });

  test("iterates until a new partition is found or the end is reached", () => {
    const mod3 = jest.fn(n => n % 3);
    const numbers = [1, 1, 2, 3, 5, 8, 13, 21];
    const partitions = partition(mod3, numbers);
    const r1 = partitions.next().value;
    const r2 = partitions.next().value;
    expect(r1[0]).toEqual(1);
    expect(r2[0]).toEqual(2);
    expect(mod3.mock.calls).toEqual([[1], [1], [2]]);
  });
});
