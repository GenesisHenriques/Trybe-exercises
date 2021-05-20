let salario = 3000;
let salarioBase, salarioLiquido;
let INSS, IR;

if (salario < 1556.94)
{
  INSS = salario / 100 * 8;
  salarioBase = salario - INSS;
} 
else if (salario < 2594.92)
{
  INSS = salario / 100 * 9;
  salarioBase = salario - INSS;
}
else if (salario < 5189.82)
{
  INSS = salario / 100 * 11;
  salarioBase = salario - INSS;
} 
else 
{
  INSS = 570,88;
  salarioBase = salario - INSS;
}


if (salarioBase < 1903.98)
{
  IR = 0;
  salarioLiquido = salarioBase - IR;
}
else if (salarioBase < 2826.65)
{
  IR = (salarioBase / 100 * 7.5) - 142.80;
  salarioLiquido = salarioBase - IR;
}
else if (salarioBase < 3751.05)
{
  IR = (salarioBase / 100 * 15) - 142.80;
  salarioLiquido = salarioBase - IR;
}
else if (salarioBase < 4664.68)
{
  IR = (salarioBase / 100 * 22.5) - 142.80;
  salarioLiquido = salarioBase - IR;
}
else
{
  IR = (salarioBase / 100 * 27.5) - 142.80;
  salarioLiquido = salarioBase - IR;
}

console.log(`Salario liquido de ${salarioLiquido = salarioBase - IR}`);