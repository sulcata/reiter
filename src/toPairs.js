import hasOwnProperty from "./internal/hasOwnProperty.js";

export default function* toPairs(object) {
  for (const key in object) {
    if (hasOwnProperty(object, key)) {
      yield [key, object[key]];
    }
  }
}
