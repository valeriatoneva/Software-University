const lookupChar = require("../src/charLookUp");
const assert = require("chai");

describe("lookupChar function tests", () => {
  // invalid input
  it("should return undefined if first parameter is number", () => {
    assert.equal(lookupChar(10, 0), undefined);
  });

  it("should return undefined if first parameter is array", () => {
    assert.equal(lookupChar([], 0), undefined);
  });

  it("should return undefined if fist parameter is object", () => {
    assert.equal(lookupChar({}, 0), undefined);
  });

  it("should return undefined if second parameter is string", () => {
    assert.equal(lookupChar("Hello", "Hello"), undefined);
  });

  it("should return undefined if second parameter is object", () => {
    assert.equal(lookupChar("Hello", {}), undefined);
  });

  it("should return undefined if second parameter is array", () => {
    assert.equal(lookupChar("Hello", []), undefined);
  });

  it("should return undefined if first parameter is string and second is decimal", () => {
    assert.equal(lookupChar("Hello", 10.5), undefined);
  });

  it("should return result if parameter is string", () => {
    assert.equal(lookupChar("L", 0), "L");
  });
  // valid input
  it("should return result if parameter is string", () => {
    assert.equal(lookupChar("Love", 1), "o");
  });
  // inncorect index
  it("should return incorrect index if the string.length <= index", () => {
    assert.equal(lookupChar(`Hello`, 10), "Incorrect index");
  });

  it("should return incorrect index if index < 0", () => {
    assert.equal(lookupChar(`Hello`, -10), "Incorrect index");
  });
});
