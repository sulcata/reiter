import curry from "__curry__";

function* range(start, stop, step) {
  if (step > 0) {
    for (let current = start; current < stop; current += step) {
      yield current;
    }
  } else if (step < 0) {
    // eslint-disable-next-line for-direction
    for (let current = start; current > stop; current += step) {
      yield current;
    }
  }
}

export default curry(range);
