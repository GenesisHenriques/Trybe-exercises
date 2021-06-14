window.onload = () => {
  const nomes = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo',   'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

  const estados = document.getElementById('estados');

  for (let index = 0; index < nomes.length; index += 1) {
    const estado = document.createElement('option');
    estado.innerText = nomes[index];
    estado.value = `valor${index}`;
    estados.appendChild(estado);
  }
}

document.getElementById("submit-button").addEventListener("click", function(event){
  event.preventDefault()
  validationName();
  validationEmail();
  validationCpf();
  validationEndereco();
});

function validationEndereco() {
  const endereco = document.getElementById('endereco').value;
  
  if (endereco.length === 0 || endereco.length === null) {
    alert('Vou entregar as coisas em qual casa amigo?');
    return false;
  } else {
    return true;
  }
}

function validationCpf() {
  const cpf = document.getElementById('cpf').value;

  if (cpf.length === 11) {
    return true;
  } else {
    alert('Amigo, CPF tem 11 digitos');
    return false
  }
}

function validationEmail() {
  const email = document.getElementById('email').value;
  let a = 0;
  
  for (let index = 0; index < email.length; index += 1) {
    if (email[index] === '@') {
      a += 1;
    }
  }
  if (a === 0) {
    alert('Nunca vi email sem @ kkkk');
    return true;
  } else {
    return false;
  }
}

function validationName() {
  const name = document.getElementById('name');
  if (name.value === '') {
    alert('por favor, digite seu nome');
  } else {
    return true;
  }
}
