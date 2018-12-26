// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
}
// console.log(cor, marca, portas); // As variáveis marca e portas usam const e let em suas declarações, e não podem ser acessadas exteriormente ao bloco

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
    //const dois = 2;
    return x + dois;
}
function dividirDois(x) {
    return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(10));

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);