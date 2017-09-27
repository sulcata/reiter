import curry from "__curry__";

function* cartesian(pool1, pool2) {
  for (const x1 of pool1) {
    for (const x2 of pool2) {
      yield [x1, x2];
    }
  }
}

export default curry(cartesian);
