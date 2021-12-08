// Import externos
const { assert, expect } = require('chai');
const fs = require('fs').promises;
const sinon = require('sinon');

// Imports locais
const positivoNegativo = require('../exercicio01');


describe('Verifica o input', () => {
  describe('Quando for maior que 0', () => {
    it('A resposta é uma string', async () => {
      const output = await positivoNegativo(10);
      expect(output).to.be.a('string');
    });
    it('é igual a "Positivo"?', async () => {
      const output = await positivoNegativo(10);
      expect(output).to.be.equals('Positivo');
    });
  });

  describe('Quando for menor que 0', () => {
    it('A resposta é uma string', async () => {
      const output = await positivoNegativo(-5);
      expect(output).to.be.a('string');
    });
    it('é igual a "Negativo"?', async () => {
      const output = await positivoNegativo(-7);
      expect(output).to.be.equals('Negativo');
    });
  });

  describe('Quando for igual a 0', () => {
    it('A resposta é uma string', async () => {
      const output = await positivoNegativo(0);
      expect(output).to.be.a('string');
    });
    it('é igual a "Neutro"?', async () => {
      const output = await positivoNegativo(0);
      expect(output).to.be.equals('Neutro');
    });
  });

  describe('Quando não for um numero', () => {
    describe('passando uma string', () => {
      it('o output deve ser "o valor deve ser um número"', async () => {
        const output = await positivoNegativo('string');
        expect(output).to.be.equals('o valor deve ser um número');
      });
    });

    describe('passando um boolean', () => {
      it('o output deve ser "o valor deve ser um número"', async () => {
        const output = await positivoNegativo(true);
        expect(output).to.be.equals('o valor deve ser um número');
      });
    });
  });
});