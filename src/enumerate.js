/** @module reiter/enumerate */

/**
 * Pairs each value of `iterable` with an index starting
 * from `0`. `[index, value]`
 *
 * @since 0.0.1
 * @generator
 * @function enumerate
 * @param {ForOfIterable} iterable The iterable.
 * @yields {Array<number, *>} The next enumerated pair.
 * @example
 *
 * reiter.enumerate("ABC")
 * // => [0, "A"], [1, "B"], [2, "C"]
 */
export default function*(iterable) {
  let i = 0;
  for (const value of iterable) {
    yield [i, value];
    i++;
  }
}
