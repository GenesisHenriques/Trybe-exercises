// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'banana', 'maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'creme de leite', 'leite em pó'];

const fruitSalad = (fruit, additional) => {
  const saladaDeFrutas = [...fruit, ...additional];
  return saladaDeFrutas;
};

console.log(fruitSalad(specialFruit, additionalItens));