let custo = 10;
let venda = custo + (custo/100 * 20); 
let lucro = venda-custo;

if (custo === 0){
  console.log('ERRO');
} else {
  console.log(`Lucro de ${lucro * 1000}`);
}
