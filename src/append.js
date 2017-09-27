import curry from "__curry__";
import shouldSpread from "./internal/shouldSpread.js";

function* append(items, iterable) {
  yield* iterable;
  if (shouldSpread(items)) {
    yield* items;
  } else {
    yield items;
  }
}

export default curry(append);
