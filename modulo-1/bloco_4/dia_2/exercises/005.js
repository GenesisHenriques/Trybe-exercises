let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 0;

for (let cont = 0; cont < numbers.length; cont+=1){
  if (numbers[cont] > maior){
    maior = numbers[cont];
  } else {}
}

console.log(`Maior numero encontrado foi ${maior}`);