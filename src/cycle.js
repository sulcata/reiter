/** @module reiter/cycle */

import cycleN from "./cycleN";

/**
 * Cycles through `iterable` infinitely.
 *
 * @since 0.0.1
 * @generator
 * @function cycle
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next item in the infinite cycle of `iterable`.
 * @see [cycleN]{@link module:reiter/cycleN}
 * @example
 *
 * reiter.cycle([1, 2, 3])
 * // => 1, 2, 3, 1, 2, 3, ...
 */
export default cycleN(Infinity);
