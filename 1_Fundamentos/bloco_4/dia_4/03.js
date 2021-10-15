let nums = [2, 4, 6, 7, 10, 0, -3];

function selecionaMaior(nums){
  let menor = 100, index = 23;

  for (cont = 0; cont < nums.length; cont += 1){
    if(menor > nums[cont]){
      menor = nums[cont];
      index = cont;
    } else {
      
    }
  }
  return index;
}



console.log(`O index de menor valor é o ${selecionaMaior(nums)}`);