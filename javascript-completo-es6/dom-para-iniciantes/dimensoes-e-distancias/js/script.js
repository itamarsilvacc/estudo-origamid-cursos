// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img');
const distanciaTopoPrimeiraImagem = primeiraImagem.offsetTop;
console.log(distanciaTopoPrimeiraImagem);

// Retorne a soma da largura de todas as imagens
function somaLarguraImagens(){
    const imagens = document.querySelectorAll('img');
    let somaLarguraImagens = 0;
    imagens.forEach((img) => {
        somaLarguraImagens += img.offsetWidth;
    });
    return somaLarguraImagens;
}
window.onload = function(){
    console.log(somaLarguraImagens());
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
    if(link.offsetWidth >= 48 && link.offsetHeight >= 48){
        return;
    }
    else{
        console.log('Link com altura ou largura menor que o recomendado pelo Google para mobile: ', link);
    }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu');
const small = window.matchMedia('(max-width: 720px)');

if(small.matches){
    menu.classList.add('menu-mobile');
}
else{
    menu.classList.remove('menu-mobile');
}