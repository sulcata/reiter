import identity from "./internal/identity.js";
import minBy from "./minBy.js";

/**
 * Computes the minimum value of `iterable`. Uses the first minimal value.
 * Returns `undefined` if `iterable` is empty.
 *
 * @since 0.0.1
 * @param {Iterable|Iterator} iterable The iterable.
 * @return {*} The first minimal value.
 * @example
 *
 * reiter.min([1, 2, 3, -4, 3, 1])
 * // => 1
 */
export default minBy(identity);
