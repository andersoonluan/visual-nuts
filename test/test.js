var assert = require('assert');
var visualNuts = require('../task1');

describe('Check Visual Nuts Valid Number', function() {
  describe('# String', function() {
    it('Attribute Test is not valid. You should use only numbers > 1 and <= 100', function() {
      let result = visualNuts("Test");
      assert.equal(result.failed, true);
    });
  });
  describe('# Number > 100', function() {
    it('Attribute 101 is not valid. You should use only numbers > 1 and <= 100.', function() {
      let result = visualNuts(101);
      assert.equal(result.failed, true);
    });
  });
  describe('# Number < 1', function() {
    it('Attribute 0 is not valid. You should use only numbers > 1 and <= 100.', function() {
      let result = visualNuts(0);
      assert.equal(result.failed, true);
    });
  });
  describe('# Number === 100', function() {
    it('success', function() {
      let result = visualNuts(100);
      assert.equal(result.failed, false);
    });
  });
});
