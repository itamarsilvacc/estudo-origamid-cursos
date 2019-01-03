// Retorne no console todas as imagens do site
const images = document.getElementsByTagName('img');
console.log(images);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagesImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagesImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2PrimeiroAnimaisDescricao = document.querySelector('.animais-descricao h2');
console.log(h2PrimeiroAnimaisDescricao);

// Selecione o último p do site
const ultimoPSite = document.getElementsByTagName('p');
console.log(ultimoPSite[ultimoPSite.length - 1]);