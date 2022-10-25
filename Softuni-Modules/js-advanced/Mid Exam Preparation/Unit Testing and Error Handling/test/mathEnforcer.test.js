const mathEnforcer = require("../src/mathEnforcer");
const assert = require("chai");
// 57/100
describe("mathEnforcer function tests", () => {
  describe("addFive function tests", () => {
    // tests with incorrect input
    it("should return undefined if parameter is string", () => {
      assert.equal(addFive("Hello"), undefined);
    });

    it("should return undefined if parameter1 is array", () => {
      assert.equal(mathEnforcer.addFive([]), undefined);
    });

    it("should return undefined if parameter is object", () => {
      assert.equal(mathEnforcer.addFive({}), undefined);
    });
 
    it("should return undefined if parameter is undefined", () => {
        assert.equal(mathEnforcer.addFive(undefined), undefined);
      });
    // tests with correct input
    it("should return result if parameter is positive integer number", () => {
      assert.equal(mathEnforcer.addFive(5) === 10);
    });

    it("should return result if parameter is negative integer number", () => {
      assert.equal(mathEnforcer.addFive(-5) === 0);
    });

    it("should return result if parameter is decimal number", () => {
        assert.equal(mathEnforcer.addFive(10.5) === 15.5);
      });
  });

  describe("subtractTen function tests", () => {

    it("should return undefined if parameter is string", () => {
        assert.equal(mathEnforcer.subtractTen('Hello'), undefined);
      });

      it("should return undefined if parameter is array", () => {
        assert.equal(mathEnforcer.subtractTen([]), undefined);
      });

      it("should return undefined if parameter is object", () => {
        assert.equal(mathEnforcer.subtractTen({}), undefined);
      });

      it("should return undefined if parameter is undefined", () => {
        assert.equal(mathEnforcer.subtractTen(undefined), undefined);
      });


      it("should return result if parameter is positive integer number", () => {
        assert.equal(mathEnforcer.subtractTen(15) === 5);
      });
  
      it("should return result if parameter is negative integer number", () => {
        assert.equal(mathEnforcer.subtractTen(-5) === -15);
      });

      it("should return result if parameter is decimal number", () => {
        assert.equal(mathEnforcer.subtractTen(10.5) === 0.5);
      });
  });


  describe("sum function tests", () => {

    it("should return undefined if parameter1 is string", () => {
        assert.equal(mathEnforcer.sum('Hello', 0), undefined);
      });

      it("should return undefined if parameter2 is string", () => {
        assert.equal(mathEnforcer.sum(0, 'Hello'), undefined);
      });

      it("should return undefined if parameter1 is array", () => {
        assert.equal(mathEnforcer.sum([], 0), undefined);
      });

      it("should return undefined if parameter2 is array", () => {
        assert.equal(mathEnforcer.sum(0, []), undefined);
      });

      it("should return undefined if parameter1 is object", () => {
        assert.equal(mathEnforcer.sum({}, 0), undefined);
      });

      it("should return undefined if parameter2 is object", () => {
        assert.equal(mathEnforcer.sum(0, {}), undefined);
      });
      // correct input 
      it("should return sum if both parameters are positive numbers", () => {
        assert.equal(mathEnforcer.sum(10, 5), 15);
      });

      it("should return sum if both parameters are negative numbers", () => {
        assert.equal(mathEnforcer.sum(-5, -5), 10);
      });

      it("should return sum if both parameters are decimal numbers", () => {
        assert.equal(mathEnforcer.sum(10.5, 10.5), 21);
      });


  });
});
