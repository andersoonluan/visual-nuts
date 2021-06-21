var assert = require('assert');
var countries = require('../task2');

describe('Check Countries Testing', function() {
  describe('# Total Countries = 250', function() {
    it('We need to have 250 countries available.', function() {
      let result = countries.getAllTaskData().total;
      assert.equal(result, 250);
    });
  });
  describe('# Most Common Language = EN', function() {
    it(`We need to receive ['en'] as most common language`, function() {
      let result = countries.getAllTaskData().most_common;
      assert.equal(result[0].toString().toUpperCase(), "EN");
    });
  });
  describe('# Highest Country with more Languages', function() {
    it(`We need to receive 10`, function() {
      let result = countries.getAllTaskData().highest_languages;
      assert.equal(result, 10);
    });
  });
});
