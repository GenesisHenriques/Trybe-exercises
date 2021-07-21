let clickCount = 0;

function qtsClick() {
  clickCount += 1;
  let frase = document.getElementById('text');
  frase.innerText = `click dados: ${clickCount}`;
}

let novaFrase = '';
let nome = 'Genesis';
let skills = ['html ', 'css ', 'js ', 'c# ', 'bootstrap '];

function imprimirNaTela(frase, skills) {
  skills.sort();
  alert(`${frase} minhas cinco principais habilidades sao: ${skills}`);
}

function enviar() {
  let text = document.getElementById('frase').value;
  
  for(let index = 0; index < text.length; index += 1) {
    if (text[index] === 'x' || text[index] == 'X') {
      novaFrase = `${novaFrase} ${nome} `;
    } else {
      novaFrase = `${novaFrase}${text[index]}.`;
    }
  }

  imprimirNaTela(novaFrase, skills);
}

document.getElementById('click').addEventListener('click', qtsClick);
document.getElementById('enviar').addEventListener('click', enviar);