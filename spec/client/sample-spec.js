var assert = require('power-assert');
var sum = require("../../sample");
describe('sum', function() {
  it('should return 3 when give 1 and 2', function () {
      assert(sum(1,2) === 3);
  });
});
