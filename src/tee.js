import curry from "__curry__";
import iter from "./iter.js";

function* generator(copy, copies, iterator) {
  for (;;) {
    if (copy.length === 0) {
      const { done, value } = iterator.next();
      if (done) break;
      for (const c of copies) {
        c.push(value);
      }
    }
    yield copy.shift();
  }
}

const tee = (n, iterable) => {
  const iterator = iter(iterable);
  const copies = Array(n)
    .fill(null)
    .map(() => []);
  return copies.map(copy => generator(copy, copies, iterator));
};

export default curry(tee);
