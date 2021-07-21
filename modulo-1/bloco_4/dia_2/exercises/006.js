let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0, par = 0;

for (index = 0; index < numbers.length; index+=1){
  if(numbers[index]%2===0){
    par+=1;
  } else {
    impar+=1;
  }
}
if (impar > 0){
  console.log(`Foi encontrado ${impar} numeros ímpares`);
} else {
  console.log('Nenhum valor ímpar encontrado');
}