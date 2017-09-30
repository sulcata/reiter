/**
 * Calls the `next` method of the iterator and returns the result.
 *
 * @since 0.0.1
 * @curried
 * @param {Iterator} iterator The iterator.
 * @return {object} The result of iterating to the next value.
 * @example
 *
 * reiter.next(reiter.iter("abc"))
 * // => { value: "a", done: false }
 */
export default iterator => iterator.next();
