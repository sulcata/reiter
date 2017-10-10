/**
 * The resulting object of advancing the iterator. `{ done: true }` if the
 * iterator has reached the end, otherwise `{ value }`.
 * @typedef {Object} IteratorResult
 * @property {boolean} done Truthy if the iterator has reached the end.
 * @property {*} value The value yielded by the iterator.
 * @see [Iteration protocols]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols}
 */

/**
 * The next function of an EcmaScript Iterator.
 * @callback NextFunction
 * @returns {IteratorResult} The result of advancing the iterator.
 * @see [Iteration protocols]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols}
 */

/**
 * An EcmaScript Iterator.
 * @typedef {Object} Iterator
 * @property {NextFunction} next Advances the iterator and returns the result.
 * @see [Iteration protocols]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols}
 */

/**
 * Gets the iterator for an iterable object.
 * @callback IteratorFunction
 * @returns {Iterator} The iterator for an iterable.
 * @see [Iteration protocols]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols}
 */

/**
 * An EcmaScript Iterable object.
 * @typedef {Object} Iterable
 * @property {IteratorFunction} @@iterator The iterator generating function.
 * @see [Iteration protocols]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols}
 */

/**
 * A value which is iterable by a `for...of` statement.
 * @typedef {Iterable|Iterator} ForOfIterable
 * @see [for...of statement]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of}
 * @see [Iteration protocols]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols}
 */

/**
 * A value which has a non-negative, integral `length` property, along with
 * the appropriate indices.
 * @typedef {Object} ArrayLike
 * @property {number} length A safe, non-negative integer.
 */

export { default as accumulate } from "./accumulate.js";
export { default as append } from "./append.js";
export { default as cartesian } from "./cartesian.js";
export { default as cartesianAll } from "./cartesianAll.js";
export { default as chain } from "./chain.js";
export { default as chunk } from "./chunk.js";
export { default as combinations } from "./combinations.js";
export {
  default as combinationsWithReplacement
} from "./combinationsWithReplacement.js";
export { default as compact } from "./compact.js";
export { default as count } from "./count.js";
export { default as curry } from "./curry.js";
export { default as cycle } from "./cycle.js";
export { default as cycleN } from "./cycleN.js";
export { default as drop } from "./drop.js";
export { default as dropUntil } from "./dropUntil.js";
export { default as dropWhile } from "./dropWhile.js";
export { default as enumerate } from "./enumerate.js";
export { default as every } from "./every.js";
export { default as exclude } from "./exclude.js";
export { default as filter } from "./filter.js";
export { default as find } from "./find.js";
export { default as findLast } from "./findLast.js";
export { default as flatten } from "./flatten.js";
export { default as flattenDeep } from "./flattenDeep.js";
export { default as flattenDepth } from "./flattenDepth.js";
export { default as flow } from "./flow.js";
export { default as forEach } from "./forEach.js";
export { default as fromArrayLike } from "./fromArrayLike.js";
export { default as fromPairs } from "./fromPairs.js";
export { default as include } from "./include.js";
export { default as includes } from "./includes.js";
export { default as isArrayLike } from "./isArrayLike.js";
export { default as isIterable } from "./isIterable.js";
export { default as iter } from "./iter.js";
export { default as map } from "./map.js";
export { default as max } from "./max.js";
export { default as maxBy } from "./maxBy.js";
export { default as maxWith } from "./maxWith.js";
export { default as min } from "./min.js";
export { default as minBy } from "./minBy.js";
export { default as minWith } from "./minWith.js";
export { default as next } from "./next.js";
export { default as nth } from "./nth.js";
export { default as partition } from "./partition.js";
export { default as permutations } from "./permutations.js";
export { default as powerSet } from "./powerSet.js";
export { default as prepend } from "./prepend.js";
export { default as product } from "./product.js";
export { default as placeholder } from "./placeholder.js";
export { default as _ } from "./placeholder.js";
export { default as range } from "./range.js";
export { default as reduce } from "./reduce.js";
export { default as reduceInto } from "./reduceInto.js";
export { default as reiter } from "./reiter.js";
export { default as reject } from "./reject.js";
export { default as repeat } from "./repeat.js";
export { default as repeatN } from "./repeatN.js";
export { default as slice } from "./slice.js";
export { default as some } from "./some.js";
export { default as sum } from "./sum.js";
export { default as take } from "./take.js";
export { default as takeUntil } from "./takeUntil.js";
export { default as takeWhile } from "./takeWhile.js";
export { default as tee } from "./tee.js";
export { default as toPairs } from "./toPairs.js";
export { default as uniq } from "./uniq.js";
export { default as uniqBy } from "./uniqBy.js";
export { default as uniqWith } from "./uniqWith.js";
export { default as unzip } from "./unzip.js";
export { default as zip } from "./zip.js";
