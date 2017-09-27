import isIterable from "./isIterable.js";

export default value =>
  isIterable(value) &&
  value[Symbol.isConcatSpreadable] !== false &&
  typeof value !== "string";
