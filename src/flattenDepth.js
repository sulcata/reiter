import curry from "__curry__";
import shouldSpread from "./internal/shouldSpread.js";

function* _flattenDepth(n, iterable, visited) {
  if (n < 1) {
    yield* iterable;
  } else {
    for (const element of iterable) {
      if (shouldSpread(element)) {
        visited.add(element);
        yield* _flattenDepth(n - 1, element, visited);
        visited.delete(element);
      } else {
        yield element;
      }
    }
  }
}

function* flattenDepth(n, iterable) {
  yield* _flattenDepth(n, iterable, new WeakSet());
}

export default curry(flattenDepth);
