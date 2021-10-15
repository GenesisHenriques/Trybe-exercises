// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, nome) => {
    let cont = 0;
    for (const key in nome) {
      if (nome[key] === 'a' || nome[key] === 'A') {
        cont += 1;
      }
    }
    return acc + cont;
  }, 0);
}
//console.log(containsA());
assert.deepStrictEqual(containsA(), 20);