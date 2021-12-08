const fs = require('fs').promises;
const sinon = require('sinon');
const { assert, expect } = require('chai');
const readline = require('readline-sync');
const squareArea = require('../squareArea');

describe('Calcula a area de um quadrado', () => {
  describe('Se o lado do quadrado for maior ou igual a zero', () => {

    before(() => {
      sinon.stub(readline, 'questionInt').returns(10)
    });

    after(() => {
      readline.questionInt.restore();
    });

    describe('o output', () => {
      it('é um numero', async () => {
        const output = await squareArea();
        expect(output).to.be.a('number');
      })
      it('é o quadrado do input', async () => {
        const output = await squareArea();
        expect(output).to.be.equal(100)
      })
    });
  });

  describe('Se o lado do quadrado for maior ou igual a zero', () => {

    before(() => {
      sinon.stub(readline, 'questionInt').returns(-4)
    });

    after(() => {
      readline.questionInt.restore();
    });

    it('retornar "valor invalido" quando ouver uma exceção', async () => {
      const output = await squareArea();
      expect(() => squareArea()).to.Throw('Valor invalido') // trabalhando com exceção
    })
  });
});

