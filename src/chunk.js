/** @module reiter/chunk */

import curry from "__curry__";

/**
 * Chunks `iterable` into pieces of size `chunkSize`. If `iterable` cannot
 * be evenly divided into chunks of size `chunkSize`, a chunk of the remaining
 * values will be yielded at the end.
 *
 * @since 0.0.1
 * @generator
 * @function chunk
 * @param {number} chunkSize The size of each chunk.
 * @param {ForOfIterable} iterable The iterable to be chunked.
 * @yields {Array} The next chunk of size `chunkSize` from `iterable`.
 * @example
 *
 * reiter.chunk(2, [1, 2, 3, 4, 5])
 * // => [1, 2], [3, 4], [5]
 */
export default curry(function*(chunkSize, iterable) {
  let currentChunk = [];
  for (const value of iterable) {
    currentChunk.push(value);
    if (currentChunk.length >= chunkSize) {
      yield currentChunk;
      currentChunk = [];
    }
  }
  if (currentChunk.length > 0) {
    yield currentChunk;
  }
});
