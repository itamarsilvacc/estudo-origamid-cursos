// Crie um objeto com os seus dados pessoais
// deve possuir pelo menos duas propriedades nome e sobrenome
var dados = {
    nome: 'Itamar',
    sobrenome: 'Silva',
    idade: 28,
    profissao: 'Perigo'
}
console.log(dados);
  
// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}
console.log(dados.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}
carro.preco = 30.000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cao = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'Homem'){
            return 'Aau au au Aau';
        }
        else{
            return '';
        }
    }
}
console.log(cao.latir('Homem'));