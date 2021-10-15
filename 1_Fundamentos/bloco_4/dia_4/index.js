let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell s Four Color Comics #178',
  nota: 'O último MacPatinhas',
};
info.recorrente = 'Sim';
info2.recorrente = 'Sim';

for(let cont in info){
  console.log(`${info[cont]} e ${info2[cont]}`);
}


/*
console.log(`Seja bem vinda, ${info.personagem}`);

for (let cont in info){
  console.log(cont);
}
for (let cont in info){
  console.log(info[cont]);
}
*/