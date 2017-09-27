import curry from "__curry__";
import unzip from "./unzip.js";

function* zip(iterable1, iterable2) {
  yield* unzip([iterable1, iterable2]);
}

export default curry(zip);
