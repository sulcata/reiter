import flattenDepth from "./flattenDepth.js";

/**
 * Flattens `iterable` one level deep.
 *
 * @since 0.0.1
 * @curried
 * @param {Iterable|Iterator} iterable The iterable.
 * @returns {Iterator} `iterable` flattened.
 * @example
 *
 * reiter.flatten([1, [2], [3, [4]], [5, 6]])
 * // => 1, 2, 3, [4], 5, 6
 */
export default flattenDepth(1);
