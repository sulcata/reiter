import curry from "__curry__";

function* chunk(chunkSize, iterable) {
  let currentChunk = [];
  for (const element of iterable) {
    currentChunk.push(element);
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
