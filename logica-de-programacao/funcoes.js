function escreva(texto){
    console.log(texto);
}

escreva("Passando parâmetro para a função");

//------------------------------------------

function somar (a, b) {
    return a + b;
}

let resultado = somar(1, 4);

console.log(resultado);

//Outra forma:

const somarNumeros = function (a, b) {return a + b;}

console.log(somarNumeros(1, 2));

//Arrow function (função de flecha):

const subtrair = (a, b) => a - b;

/* Obs:
Arrow function:

1. Se for passado apenas um parâmetro, podemos omitir os parênteses da função.

2. Caso a função retorne apenas algum valor, podemos omitir o "return" e as "{ }";

3. Arrow functions têm algumas restrições, ler documentação para saber mais. 

*/