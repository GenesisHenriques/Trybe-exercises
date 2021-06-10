const nomes = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo',   'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const estados = document.getElementById('estados');

for (let index = 0; index < nomes.length; index += 1) {
  const estado = document.createElement('option');
  estado.innerText = nomes[index];
  estado.value = `valor${index}`;
  estados.appendChild(estado);
}

