import cycleN from "./cycleN";

/**
 * Cycles through `iterable` infinitely.
 *
 * @since 0.0.1
 * @param {Iterable|Iterator} iterable The iterable.
 * @returns {Iterator} An infinite cycle of `iterable`.
 * @example
 *
 * reiter.cycle([1, 2, 3])
 * // => 1, 2, 3, 1, 2, 3, ...
 */
export default cycleN(Infinity);
