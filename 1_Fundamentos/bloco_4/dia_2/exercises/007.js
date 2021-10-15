let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 777;

for (let cont = 0; cont < numbers.length; cont+=1){
  if (numbers[cont] < menor){
    menor = numbers[cont];
  } else {}
}

console.log(`Maior numero encontrado foi ${menor}`);