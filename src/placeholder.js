/** @module reiter/placeholder */

/**
 * Serves as a placeholder in curried functions. Value depends on the
 * underlying curry function (e.g. built-in versus lodash). Aliased
 * as `reiter._`.
 *
 * @since 0.0.1
 * @see [curry]{@link module:reiter/curry}
 * @example
 *
 * reiter.range(0, reiter.placeholder, 10)
 * // => [function]
 *
 * reiter.range(0, reiter.placeholder, 10)(2)
 * // => 0, 2, 4, 6, 8
 */
export { placeholder as default } from "__curry__";
