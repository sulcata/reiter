import curry from "__curry__";
import shouldSpread from "./internal/shouldSpread.js";

function* prepend(items, iterable) {
  if (shouldSpread(items)) {
    yield* items;
  } else {
    yield items;
  }
  yield* iterable;
}

export default curry(prepend);
