import curry from "__curry__";

/**
 * Chunks `iterable` into pieces of size `chunkSize`. If `iterable` cannot
 * be evenly divided into chunks of size `chunkSize`, a chunk of the remaining
 * values will be yielded at the end.
 *
 * @since 0.0.1
 * @curried
 * @param {number} chunkSize The size of each chunk.
 * @param {Iterable|Iterator} iterable The iterable to be chunked.
 * @returns {Iterator} `iterable` in chunks of size `chunkSize`.
 * @example
 *
 * reiter.chunk(2, [1, 2, 3, 4, 5])
 * // => [1, 2], [3, 4], [5]
 */
function* chunk(chunkSize, iterable) {
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
}

export default curry(chunk);
