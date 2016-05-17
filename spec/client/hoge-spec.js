var assert = require('power-assert');
var detect = require("../../hoge");
describe('detect', () => {
  it('should return string when give string', () => {
      assert(detect('s') === 'string');
  });
  it('should return number when give number', () => {
    assert(detect(1) === 'number');
  });
  it('should return none wher give array', () => {
    assert(detect([]) === undefined);
  });
});
