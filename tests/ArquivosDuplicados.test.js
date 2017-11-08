

var chai = require('chai');
var expect = chai.expect;

var ArquivosDuplicados = require('../src/ArquivosDuplicados');

describe('Teste que passa', function() {
    it('vai passar', function() {
      expect(ArquivosDuplicados()).to.equal(true);
    });
});
  