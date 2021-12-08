// Exercício 4 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
// Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
// Após concluir a escrita do arquivo ela deverá retornar um ok .

const fs = require('fs').promises;
const readline = require('readline-sync');
const { assert, expect } = require('chai');
const sinon = require('sinon');

const escreveConteudo = require('../exercicio04');

describe('Executa a função escreveConteudo', () => {

  before(() => {
    sinon.stub(fs, 'writeFile').resolves('ok');
  });

  after(() => {
    fs.writeFile.restore();
  });

  describe('O retorno', () => {
    it('é uma string?', async () => {
      const output = await escreveConteudo('test.txt', 'Genesis');
      expect(output).to.be.a('string');
    });
    it('é igual a "ok"', async () => {
      const output = await escreveConteudo('test.txt', 'Genesis');
      expect(output).to.be.equals('ok');
    })
  });
});