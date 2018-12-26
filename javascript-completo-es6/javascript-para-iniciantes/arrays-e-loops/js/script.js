// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anosCampeao = [1959, 1962, 1970, 1994, 2002];
anosCampeao.forEach(function(item){
    console.log(item);
});

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(var i = 0; i < anosCampeao.length; i++){
    console.log(`O Brasil ganhou a copa de ${anosCampeao[i]}`);
}
anosCampeao.forEach(function(ano){
    console.log(`O Brasil se iludiu de campeão da copa de ${ano}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
/*frutas.forEach(function(fruta){    
    console.log(fruta);
});*/
for(var i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
    if(frutas[i] === 'Pera'){
        break;
    }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);