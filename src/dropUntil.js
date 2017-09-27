import curry from "__curry__";
import negate from "./internal/negate.js";
import dropWhile from "./dropWhile.js";

const dropUntil = (predicate, iterable) =>
  dropWhile(negate(predicate), iterable);

export default curry(dropUntil);
