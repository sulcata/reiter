import curry from "__curry__";

function* uniqWith(comparator, iterable) {
  const previousElements = [];
  outer: for (const element of iterable) {
    for (const previousElement of previousElements) {
      if (comparator(element, previousElement)) {
        continue outer;
      }
    }
    previousElements.push(element);
    yield element;
  }
}

export default curry(uniqWith);
