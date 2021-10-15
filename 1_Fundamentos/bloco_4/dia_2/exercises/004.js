let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
total = 0;

for (let cont = 0; cont < numbers.length; cont+=1){
  total += numbers[cont];
}

let media = total / numbers.length;

if (media > 20){
  console.log('valor maior que 20');
} else {
  console.log('Valor menor que 20');
}
