export default function* cycle(iterable) {
  const saved = [];
  for (const element of iterable) {
    yield element;
    saved.push(element);
  }
  for (;;) {
    yield* saved;
  }
}
