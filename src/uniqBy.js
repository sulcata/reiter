import curry from "__curry__";

function* uniqBy(iteratee, iterable) {
  const set = new Set();
  for (const value of iterable) {
    const mapped = iteratee(value);
    if (!set.has(mapped)) {
      set.add(mapped);
      yield value;
    }
  }
}

export default curry(uniqBy);
