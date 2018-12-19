// nomeie 3 propriedades ou métodos de strings
var nomeCompleto = 'Itamar Silva';
// length
console.log(nomeCompleto.length);
// small
console.log(nomeCompleto.small());
// url
console.log(nomeCompleto.link('https://itamarsilva.eti.br'));

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
// setAttribute
btn.setAttribute('id', 'btn-test');
console.log(btn);
// innerHTML
var btnInnerHTML = btn.innerHTML;
console.log(btnInnerHTML);
// hasAttribute
console.log(btn.hasAttribute('id'));
// classList
console.log(btn.classList);
// addEventListener
/*btn.addEventListener('click', function() {
    alert('btn hover');
});*/

// busque na web um objeto (método) capaz de interagir com o clip
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
btn.addEventListener('click', function() {
    var copyText = document.getElementById('clipboard');

    copyText.select();
    document.execCommand('copy');

    alert('Texto copiado: ' + copyText);
});