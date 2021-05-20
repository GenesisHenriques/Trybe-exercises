let nomePeca = "Peão";
a = nomePeca.toLowerCase();


switch(a){
  case "rei": console.log('Uma casa para qualquer lado'); break;
  case "rainha": console.log('Quantas casas quiser, para todos os lados'); break;
  case "torre": console.log('Quantas casas quiser, na horizontal e vertical '); break;
  case "bispo": console.log('Quantas casas quiser, na diagonal'); break;
  case "cavalo": console.log('Qualquer lado, fazendo um movimento de "L"'); break;
  case "peão": console.log('Uma casa a frente'); break;
  default: console.log('Não conheço essa peça');
}