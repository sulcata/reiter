/** @module reiter/placeholder */

/**
 * Serves as a placeholder in curried functions.
 *
 * @since 0.0.1
 * @example
 *
 * reiter.range(0, reiter.placeholder, 10)
 * // => [function]
 *
 * reiter.range(0, reiter.placeholder, 10)(2)
 * // => 0, 2, 4, 6, 8
 */
export { placeholder as default } from "./internal/curry.js";
