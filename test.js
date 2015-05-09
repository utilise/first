var expect = require('chai').expect
  , first = require('./')
  
describe('first', function() {
  it('should return first element', function() {
    expect(first(['a', 'b'])).to.equal('a')
  })
})