// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual
var idade = 28;
var idadeFlor = 4;

if( idade > idadeFlor ) {
    console.log( 'É maior' );
}
else if( idade === idadeFlor ) {
    console.log( 'É igual' );
}
else {
    console.log( 'É menor' );
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
var retorno = 3;

console.log( retorno );

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log( !!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta );

// Compare o total de habitantes do Brasil com China (valor em mi
var brasil = 207; 
var china = 1340;

if( brasil > china ) {
    console.log( 'Brasil maior que China' );
}
else {
    console.log( 'China maior que Brasil' )
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}
// Primeira expressão false
// Segunda expressão true
// Pela lógica do operador && o resultado final será false e o retorno será Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}
// Primeira expressão false
// Segunda expressão true
// Pela lógica do operador || o resultado final será true
// Terceira expressão true e último valor verdadeiro 'Cão', o retorno será Cão
