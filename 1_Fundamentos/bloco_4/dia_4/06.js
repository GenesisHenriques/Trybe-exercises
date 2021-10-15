function somarAteNum(num){
  let total = 0;
  for(cont = 0; cont <= num; cont += 1){
    total += cont;
  }
  return total;
}

console.log(somarAteNum(5));