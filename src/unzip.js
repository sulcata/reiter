import iter from "./iter.js";

export default function* unzip(iterables) {
  const iterators = [...iterables].map(iter);
  if (iterators.length > 0) {
    for (;;) {
      const values = [];
      for (const iterator of iterators) {
        const { done, value } = iterator.next();
        if (done) return;
        values.push(value);
      }
      yield values;
    }
  }
}
