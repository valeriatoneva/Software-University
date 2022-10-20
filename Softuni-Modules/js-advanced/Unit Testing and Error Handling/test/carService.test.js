const carService = require("../carService.js");
const { assert, expect } = require("chai");

describe("carService function tests", () => {
  describe("isItExpensive function tests", () => {
    // valid input
    it("should return res if parameter is Engine", () => {
      expect(carService.isItExpensive("Engine")).to.equal(
        `The issue with the car is more severe and it will cost more money`
      );
    });

    it("should return res if parameter is Transmission", () => {
      expect(carService.isItExpensive("Transmission")).to.equal(
        `The issue with the car is more severe and it will cost more money`
      );
    });
    // // invalid input
    it("should return res if parameter is Transmission", () => {
      expect(carService.isItExpensive("string")).to.equal(
        `The overall price will be a bit cheaper`
      );
    });
  });

  describe("discount function tests", () => {
// invalid input
    it("should return Invalid input if parameter1 is string", () => {
    expect(carService.discount('string', 10)).to.equal("Invalid input");
    });

    it("should return Invalid input if parameter2 is string", () => {
      expect(carService.discount(10, 'string')).to.equal("Invalid input");
    });

    it("should return no discount if parameter1 is smaller than 2", () => {
      expect(carService.discount(1, 10)).to.equal("You cannot apply a discount");
    });

    it("should return no discount if parameter1 is equal to 2", () => {
        expect(carService.discount(2, 10)).to.equal("You cannot apply a discount");
    });
// valid input
    it("should return res if p1 is bigger than 2 and lower than 7", () => {
        expect(carService.discount(3, 10)).to.equal(`Discount applied! You saved 1.5`);
    });

    it("should return res if p1 is equal to 7", () => {
        expect(carService.discount(7, 10)).to.equal(`Discount applied! You saved 1.5`);
    });

    it("should return res if p1 is bigger than 7", () => {
        expect(carService.discount(8, 10)).to.equal(`Discount applied! You saved 3`);
    });

    it("should return res if p1 is bigger than 7", () => {
        expect(carService.discount(8, 10)).to.equal(`Discount applied! You saved 3`);
    });

  });

  describe("partsToBuy function tests", () => {
// invalid input 
    it("should return Invalid input if parameter1 is NOT an array", () => {
    expect(() => carService.partsToBuy('string', ["blowoff valve", "injectors"]).to.throw("Invalid input"))
    });

    it("should return Invalid input if parameter2 is NOT an array", () => {
    expect(() => carService.partsToBuy([{part: "blowoff valve", price: 145}],'string').to.throw("Invalid input"))
    });

    // valid input
    it("should return 0 if p1 is empty", () => {
    expect(carService.partsToBuy([], (["blowoff valve", "injectors"])).to.equal(0))
    });

    it("should return totalPrice inputs are valid", () => {
        expect(carService.partsToBuy([{part: "blowoff valve", price: 145}], ["blowoff valve", "injectors"]).to.equal(145))
        });
  })
});


