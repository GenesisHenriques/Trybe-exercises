function CriarObject(object, nome, valor) {
  object[nome] = valor;
  return object;
}

let corDeCabelo = {
  genesis: 'loiro',
  filipe: 'preto'
};

console.log(CriarObject(corDeCabelo, 'thiago', 'azul'));
