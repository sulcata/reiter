import curry from "__curry__";

function* uniqWith(comparator, iterable) {
  const previousValues = [];
  outer: for (const value of iterable) {
    for (const previousValue of previousValues) {
      if (comparator(value, previousValue)) {
        continue outer;
      }
    }
    previousValues.push(value);
    yield value;
  }
}

export default curry(uniqWith);
