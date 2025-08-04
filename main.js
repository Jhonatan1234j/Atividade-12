// Mostra no console
console.log('Olá mundo!');

// Criando um novo elemento <h1>
let novoElemento = document.createElement('h1');
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';

// Selecionando o <body> e adicionando o <h1>
let elementoBody = document.body;
elementoBody.appendChild(novoElemento);

// Estilizando o <h1>
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
novoElemento.style.padding = '20px';
novoElemento.style.textAlign = 'center';
novoElemento.style.borderRadius = '10px';
novoElemento.style.fontFamily = 'Arial';

// Conteúdo extra criado só com JavaScript
let paragrafo = document.createElement('p');
paragrafo.innerText = 'Isso foi criado totalmente com JavaScript!';
paragrafo.style.fontSize = '20px';
paragrafo.style.fontFamily = 'Arial';
paragrafo.style.color = 'green';
paragrafo.style.textAlign = 'center';
paragrafo.style.marginTop = '20px';
document.body.appendChild(paragrafo);

// Fazendo o parágrafo piscar com JavaScript puro
setInterval(() => {
  paragrafo.style.visibility = (paragrafo.style.visibility === 'hidden') ? 'visible' : 'hidden';
}, 500);
