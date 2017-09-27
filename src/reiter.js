import iter from "./iter.js";

const privateData = new WeakMap();

function Reiterable(iterable) {
  privateData.set(
    this,
    privateData.has(iterable)
      ? Object.assign({}, privateData.get(iterable))
      : {
          iterator: iter(iterable),
          head: null
        }
  );
}

const assureNode = (node, iterator) => {
  if (node !== null) return node;
  const { done, value } = iterator.next();
  return done ? null : { value, next: null };
};

Reiterable.prototype[Symbol.iterator] = function*() {
  const $this = privateData.get(this);
  const iterator = $this.iterator;
  $this.head = assureNode($this.head, iterator);
  let current = $this.head;
  while (current) {
    yield current.value;
    current.next = assureNode(current.next, iterator);
    current = current.next;
  }
};

export default iterable => new Reiterable(iterable);
