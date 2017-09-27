export default collection =>
  typeof collection.next === "function"
    ? collection
    : collection[Symbol.iterator]();
