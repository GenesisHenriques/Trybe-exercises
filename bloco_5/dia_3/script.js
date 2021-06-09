function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
for (let a = 0; a < dezDaysList.length; a += 1) {
let addDia = document.createElement('li');
addDia.innerText = dezDaysList[a];
addDia.className = 'day';
if(a - 1 === 24 || a - 1 === 25 || a - 1 === 31){
  addDia.className = addDia.className + ' holiday';
  addDia.style.backgroundColor = 'rgb(238,238,238)';
}
if ( a - 1 === 4 || a - 1 === 11 || a - 1 === 18 || a - 1 === 25) {
  addDia.className = addDia.className + ' friday';
}
document.querySelectorAll('#days')[0].appendChild(addDia);
}
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados"
// Adicione a este botão a ID "btn-holiday" 
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
document.querySelectorAll('.buttons-container')[0];
let btnHoliday = document.createElement('button');
btnHoliday.innerText = 'Feriados';
btnHoliday.id = 'btn-holiday';
document.querySelectorAll('.buttons-container')[0].appendChild(btnHoliday);

//Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

document.getElementById('btn-holiday').addEventListener('click', function(){
  let holiday = document.getElementsByClassName('holiday');

  for (const a in holiday) {
    if (holiday[a].style.backgroundColor !== 'red') {
      holiday[a].style.backgroundColor = 'red';
    } else {
      holiday[a].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
});

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

let btnFriday = document.createElement('button');
btnFriday.innerText = 'Sexta-feira';
btnFriday.id = 'btn-friday';
document.querySelectorAll('.buttons-container')[0].appendChild(btnFriday);

//Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

document.getElementById('btn-friday').addEventListener('click', function(){
  let friday = document.getElementsByClassName('friday');
  for (let a = 0; a < friday.length; a += 1) {
    if (friday[a].innerText > 0) {
      friday[a].innerText = 'SEXTOOUU!';
      console.log('a')
    } else {
      
      let ant = parseInt (document.querySelectorAll('.friday')[a].previousElementSibling.innerText);
      friday[a].innerText = ant + 1 + '';
    } 
  }
});






