import curry from "__curry__";

function* count(start, step) {
  let current = start;
  for (;;) {
    yield current;
    current += step;
  }
}

export default curry(count);
