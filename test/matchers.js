/* eslint-disable no-console */
import diff from "jest-diff";
import chalk from "chalk";
import { iter } from "reiter";

const isIterator = value => value != null && typeof value.next === "function";

export function toIterEqual(received, expected) {
  if (!isIterator(received)) {
    console.log(
      chalk.dim(
        "The received argument was not an iterator" +
          " with the `toIterEqual` matcher"
      )
    );
  }
  const receivedArray = [...received];
  const expectedArray = [...expected];
  const pass = this.equals(receivedArray, expectedArray);
  return {
    pass,
    message: pass
      ? () =>
          this.utils.matcherHint(".not.toIterEqual") +
          "\n\nExpected value not to yield the same sequence:\n" +
          `  ${this.utils.printExpected(expectedArray)}\n` +
          "Received:\n" +
          `  ${this.utils.printReceived(receivedArray)}`
      : () => {
          const diffString = diff(expectedArray, receivedArray, {
            expand: this.expand
          });
          return (
            this.utils.matcherHint(".toIterEqual") +
            "\n\nExpected value to yield the same sequence:\n" +
            `  ${this.utils.printExpected(expectedArray)}\n` +
            "Received:\n" +
            `  ${this.utils.printReceived(receivedArray)}` +
            (diffString ? `\n\nDifference:\n\n${diffString}` : "")
          );
        }
  };
}

export function toIterMatch(received, expected) {
  if (!isIterator(received)) {
    console.log(
      chalk.dim(
        "The received argument was not an iterator" +
          " with the `toIterMatch` matcher"
      )
    );
  }
  const receivedIterator = iter(received);
  const receivedArray = [];
  const expectedArray = [...expected];
  let finishedIteration = false;
  for (let i = 0; i < expectedArray.length; i++) {
    const { done, value } = receivedIterator.next();
    if (done) {
      finishedIteration = true;
      break;
    }
    receivedArray.push(value);
  }
  const pass = this.equals(receivedArray, expectedArray);
  return {
    pass,
    message: pass
      ? () =>
          this.utils.matcherHint(".not.toIterMatch") +
          "\n\nExpected value not to yield a matching sequence:\n" +
          `  ${this.utils.printExpected(expectedArray)}\n` +
          "Received:\n" +
          `  ${this.utils.printReceived(receivedArray)}` +
          this.utils.RECEIVED_COLOR(finishedIteration ? "" : "...")
      : () => {
          const diffString = diff(expectedArray, receivedArray, {
            expand: this.expand
          });
          return (
            this.utils.matcherHint(".toIterMatch") +
            "\n\nExpected value to yield a matching sequence:\n" +
            `  ${this.utils.printExpected(expectedArray)}\n` +
            "Received:\n" +
            `  ${this.utils.printReceived(receivedArray)}` +
            this.utils.RECEIVED_COLOR(finishedIteration ? "" : "...") +
            (diffString ? `\n\nDifference:\n\n${diffString}` : "")
          );
        }
  };
}
