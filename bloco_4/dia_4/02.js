let nums = [2, 3, 6, 7, 10, 1];

function selecionaMaior(nums){
  let maior = 0, index;

  for (cont = 0; cont < nums.length; cont += 1){
    if(maior < nums[cont]){
      maior = nums[cont];
      index = cont;
    }
  }
  return index;
}



console.log(`O index de maior valor é o ${selecionaMaior(nums)}`);