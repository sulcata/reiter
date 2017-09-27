import negate from "./internal/negate.js";
import filter from "./filter.js";

export default function* reject(predicate, iterable) {
  yield* filter(negate(predicate), iterable);
}
