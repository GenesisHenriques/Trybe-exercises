const dados = (n) => {
  return a = {
    nome: n,
    email: `${n}@trybe.com`,
  }
}

const newEmployees = (nome) => {
  const employees = {
    id1: dados(nome), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: dados(nome), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: dados(nome), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees('Genesis'));