let num = [5, 9, 7, 3, 4, 1, 6, 2, 8, 0];
let a = 0;

for (let cont = 0; cont < num.length; cont+=1)
{
  for(let cont2 = 0; cont2 < (9-cont);cont2+=1)
  {
    if (num[cont2] > num[cont])
    {
      a = num[cont];
      num[cont] = num[cont2];
      num[cont2] = a;
    }
  }
}
console.log(num);