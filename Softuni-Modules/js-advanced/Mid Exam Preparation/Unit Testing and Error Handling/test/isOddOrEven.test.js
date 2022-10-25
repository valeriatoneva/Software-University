const isOddOrEven = require("../src/isOddOrEven");
const assert = require('chai');


describe('isOddOrEven function tests', () =>{
// invalid input
    it('should return undefined if parameter is number', () => {
    assert.equal(isOddOrEven(10), undefined)
    })

    it('should return undefined if parameter is array', () => {
        assert.equal(isOddOrEven([]), undefined)
    })

    it('should return undefined if parameter is object', () => {
        assert.equal(isOddOrEven({}), undefined)
    })
// valid input
    it('should return even if parameter is % 2 === 0', () => {
        assert.equal(isOddOrEven('Hi'), 'even')
    })

    it('should return uneven if parameter is % 2 !== 0', () => {
        assert.equal(isOddOrEven(`Hello`), 'odd')
    })
})