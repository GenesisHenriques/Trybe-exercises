window.onload = function () {
  
  // troca a cor de fundo
  document.querySelectorAll('.ops')[0].style.backgroundColor = 'black';
  document.querySelectorAll('.ops')[0].addEventListener('click', function(){
    localStorage.setItem('corDeFundo', 'black');
    document.body.style.backgroundColor = localStorage.corDeFundo;
  });
 // troca a cor de fundo
  document.querySelectorAll('.ops')[1].style.backgroundColor = '#ffffff';
  document.querySelectorAll('.ops')[1].addEventListener('click', function(){
    localStorage.setItem('corDeFundo', '#ffffff');
    document.body.style.backgroundColor = localStorage.corDeFundo;
  });
 // troca a cor de fundo
  document.querySelectorAll('.ops')[2].style.backgroundColor = '#7F7F7F';
  document.querySelectorAll('.ops')[2].addEventListener('click', function(){
    localStorage.setItem('corDeFundo', '#7F7F7F');
    document.body.style.backgroundColor = localStorage.corDeFundo;
  });


  // troca a cor do texto
  document.querySelectorAll('.ops')[3].style.backgroundColor = 'black';
  document.querySelectorAll('.ops')[3].addEventListener('click', function(){
    localStorage.setItem('corDoTexto', 'black');
    document.getElementById('main-text').style.color = localStorage.corDoTexto;
  });
  // troca a cor do texto
  document.querySelectorAll('.ops')[4].style.backgroundColor = '#ffffff';
  document.querySelectorAll('.ops')[4].addEventListener('click', function(){
    localStorage.setItem('corDoTexto', '#ffffff');
    document.getElementById('main-text').style.color = localStorage.corDoTexto;
  });
  // troca a cor do texto
  document.querySelectorAll('.ops')[5].style.backgroundColor = '#7F7F7F';
  document.querySelectorAll('.ops')[5].addEventListener('click', function(){
    localStorage.setItem('corDoTexto', '#7F7F7F');
    document.getElementById('main-text').style.color = localStorage.corDoTexto;
  });
}
document.getElementsByTagName('header')[0].style.backgroundColor = '#58555A';
document.getElementsByTagName('header')[0].style.padding = '3px';
document.body.style.backgroundColor = localStorage.corDeFundo;
document.getElementById('main-text').style.color = localStorage.corDoTexto;