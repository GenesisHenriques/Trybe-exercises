//const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

describe('Requisitos 1 ao 5', () => {
  it('Requisito 1 e 2', () => {
    expect(9).toBe(sum(4,5));
    expect(0).toBe(sum(0,0));
  });

  test('throws an error when a string is passed', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  test('Testa a frase', () => {
    expect(() => {
      sum(4,'5');
    }).toThrow('parameters must be numbers');
  })
})