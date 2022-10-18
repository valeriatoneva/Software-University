let solve = require('./sum-of-numbers');
const expect = re
decribe(`Sum of Numbers`, () => {
    it(`Should return the sum of the nums of the array`, () =>{
       let numbers = [1,2,3,4,5];
       let expectedSum = 15;
       let actualSum = sum(numbers);
       expect(actualSum).to.equal(expectedSum)
    })
})