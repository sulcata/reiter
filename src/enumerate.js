/**
 * Pairs each value of `iterable` with an index starting
 * from `0`. `[index, value]`
 *
 * @since 0.0.1
 * @param {Iterable|Iterator} iterable The iterable.
 * @returns {Iterator} `iterable` with indices.
 * @example
 *
 * reiter.enumerate("ABC")
 * // => [0, "A"], [1, "B"], [2, "C"]
 */
export default function* enumerate(iterable) {
  let i = 0;
  for (const value of iterable) {
    yield [i, value];
    i++;
  }
}
