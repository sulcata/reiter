import curry from "__curry__";
import sameValueZero from "./internal/sameValueZero.js";

const includes = (value, iterable) => {
  for (const element of iterable) {
    if (sameValueZero(element, value)) return true;
  }
  return false;
};

export default curry(includes);
