// Import externos
const { assert, expect } = require('chai');
const fs = require('fs').promises;
const sinon = require('sinon');

// Imports locais
const readFile = require('../readfile');

describe('Le um arquivo', () => {

  before(() => { // executa antes do teste
    sinon.stub(fs, 'readFile').resolves('Genesis'); // chamo sinon e crio um stub
  });

  after(() => { // executa dps do teste
    fs.readFile.restore();
  });

  describe('Arquivo lido com sucesso', () => {
    describe('O output', () => {
      it('é uma string', async () => {
        const output = await readFile('teste.txt', 'utf-8');
        expect(output).to.be.equal('Genesis');
      });

      it('é igual ao conteúdo do arquivo', async () => {
        const output = await readFile('teste.txt', 'utf-8');
        expect(output).to.be.a('string');
      });
    })
  });
});

describe('Arquivo não lido com sucesso', () => {

  before(() => { // executa antes do teste
    sinon.stub(fs, 'readFile').rejects('Erro'); // chamo sinon e crio um stub
  });

  after(() => { // executa dps do teste
    fs.readFile.restore();
  });

  describe('O output', () => {
    it('é undefined ou null', async () => {
      const output = await readFile('teste.txt', 'utf-8');
      expect(output).to.be.null; // Espero que a resposta seja null
    });
  });
});