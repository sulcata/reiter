import curry from "__curry__";
import { advance } from "./internal/advance.js";
import iter from "./iter.js";

function* slice(start, stop, step, iterable) {
  if (stop == null) stop = Infinity;
  const iterator = iter(iterable);
  advance(iterator, start);
  for (let current = start; current < stop; current += step) {
    const { done, value } = iterator.next();
    if (done) break;
    yield value;
    if (step > 1 && advance(iterator, step - 1).done) break;
  }
}

export default curry(slice);
