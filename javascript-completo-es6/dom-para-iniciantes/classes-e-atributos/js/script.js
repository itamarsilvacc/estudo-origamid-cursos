// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelector('.menu');
const itensMenu = menu.querySelectorAll('li');
itensMenu.forEach(function(item){
    item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach(function(item, index){
    if(index !== 0)
        item.classList.remove('ativo');
});

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
    if(img.hasAttribute('alt')){
        return;
    }
    else{
        console.log('Imagem sem atributo alt:');
        console.log(img);
    }
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('.menu li a[href^="https://"]');
linkExterno.setAttribute('href', 'https://itamarsilva.eti.br');