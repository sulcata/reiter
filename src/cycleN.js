import curry from "__curry__";

function* cycleN(n, iterable) {
  if (n === 0) return;
  const saved = [];
  for (const element of iterable) {
    yield element;
    saved.push(element);
  }
  for (let i = 1; i < n; i++) {
    yield* saved;
  }
}

export default curry(cycleN);
