/** @module reiter/uniq */

import identity from "./internal/identity.js";
import uniqBy from "./uniqBy.js";

/**
 * Yields a duplicate-free version of `iterable`. Two values are duplicates
 * if they are equal by [SameValueZero]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness}.
 *
 * @since 0.0.1
 * @generator
 * @function uniq
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next non-duplicate value in `iterable`.
 * @see [uniqBy]{@link module:reiter/uniqBy}
 * @see [uniqWith]{@link module:reiter/uniqWith}
 * @example
 *
 * reiter.uniq([1, 1, NaN, {}, NaN, {}, -0, 0])
 * // => 1, NaN, {}, {}, -0
 */
export default uniqBy(identity);
