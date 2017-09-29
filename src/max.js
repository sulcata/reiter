import identity from "./internal/identity.js";
import maxBy from "./maxBy.js";

/**
 * Computes the maximum value of `iterable`. Uses the first maximal value.
 *
 * @since 0.0.1
 * @param {Iterable|Iterator} iterable The iterable.
 * @return {*} The first maximal value.
 * @example
 *
 * reiter.max([1, 2, 3, -4, 3, 1])
 * // => 3
 */
export default maxBy(identity);
