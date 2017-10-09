/** @module reiter/curry */

/**
 * Curries a function allowing partial applications and placeholders as
 * arguments. Underlying implementation depends on which build was loaded,
 * but functionality should at least satisfy that of the built-in
 * implementation.
 *
 * @since 0.0.3
 * @function curry
 * @param {function} fn The function to curry.
 * @returns {function} The curried function.
 * @see [placeholder]{@link module:reiter/placeholder}
 * @example
 *
 * const divide = reiter.curry((a, b) => a / b)
 * add(1, 2)
 * // => 0.5
 *
 * add(1)(2)
 * // => 0.5
 *
 * add()(1)(2)
 * // => 0.5
 *
 * add()(1)(2)
 * // => 0.5
 *
 * add(reiter.placeholder, 2)(1)
 * // => 0.5
 */
export { placeholder as default } from "__curry__";
