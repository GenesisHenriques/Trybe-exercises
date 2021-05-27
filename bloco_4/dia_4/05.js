let nums = [2, 3, 2, 5, 8, 2, 3];
let um =0 , dois = 0, tres = 0, quatro = 0, cinco = 0, seis = 0, sete = 0, oito = 0, nove = 0, zero = 0;

for (cont = 0; cont < nums.length; cont += 1){

  switch(nums[cont]){
    case 2: dois+=1; break;
    case 3: tres+=1; break;
    case 5: cinco+=1; break;
    case 8: oito+=1; break;
  }
}
if (dois > tres && dois > cinco && dois > oito){
  console.log(`O número mais encontrado foi o 2 - ${dois} vezes`);
} else if(tres > dois && tres > cinco && tres > oito){
  console.log(`O número mais encontrado foi o 3 - ${tres} vezes`);
} else if (cinco > dois && cinco > tres && cinco > oito){
  console.log(`O número mais encontrado foi o 5 - ${cinco} vezes`);
} else if (oito > dois && oito > tres && oito > cinco){
  console.log(`O número mais encontrado foi o 8 - ${oito} vezes`);
}
