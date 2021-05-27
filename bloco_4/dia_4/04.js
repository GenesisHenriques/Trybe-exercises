let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'GenesisHenriques'];

let maiorNome = retornaMaiorNome(nomes);

function retornaMaiorNome(nomes){

  let maior = 0, index;

  for(let cont = 0; cont < nomes.length; cont += 1){
    
    if(nomes[cont].length > maior){
      maior = nomes[cont].length;
      index = cont;
    } else {}
  }
  return nomes[index];
}
console.log(maiorNome);