

var chai = require('chai');
var expect = chai.expect;

var ArquivosDuplicados = require('../src/ArquivosDuplicados');

// describe('Teste que passa', function() {
//     it('vai passar', function() {
//       expect(ArquivosDuplicados()).to.equal(true);
//     });   
// });
  
describe('Verificando lista', function() {
  it('Não vai passar :(', function() {
    expect(ArquivosDuplicados()).to.not.have.same.members([]);
  });   
});

describe('Verificando se removeu lista 2', function() {
  it('Vai passar', function() {
    expect(ArquivosDuplicados()).to.not.have.same.members(['a', 'b', 'c', 'd']);
  });   
});

describe('Verificando se removeu duplicados', function() {
  it('Vai passar', function() {
    expect(ArquivosDuplicados()).to.have.same.members(['a', 'b', 'c']);
  });   
});
