// condicionais "if/else" (Se/Senão):

let ensolarado = true;

if (ensolarado) {
    console.log("Vou à praia.");
} else {
    console.log("O dia não está ensolarado, não vou à praia.")
}

//Podemos usar quantos if/else for necessário.

//--------------------------------------------------

// usando o "else if":

let sinal = "vermelho";

if (sinal === "vermelho") {
    console.log("Pare! O sinal está vermelho.");
} else if (sinal === "amarelo") {
    console.log("Reduza a velocidade! O sinal irá fechar.");
} else {
    console.log("Pode seguir! O sinal está verde.");
}

//--------------------------------------------------

//Operador Ternário:

// O JavaScript possui um operador que permite fazer um if else em uma linha.

//O sinal "?" verifica se a condição é verdadeira;
//O sinal ":" verifica se a condição é falsa;
//Os valores entre o "?" e o ":" retorna a cada condição (true ou false).

let x = 4;

let paridade = x % 2 === 0 ? 'par' : 'impar';

//Nesse caso, o valor irá retornar "par" porque o "x" é 4.

//--------------------------------------------------

//Utilizando o "switch":

//o código irá executar caso a caso.
//Usamos o "default quando a não atende a nenhum dos casos."

switch (sinal) {
    case 'verde' :
        console.log("Pode seguir! O sinal está verde.");
        break;
    case 'amarelo' :
        console.log("Reduza a velocidade! O sinal irá fechar.");
        break;
    case 'vermelho' :
        console.log("Pare! O sinal está vermelho.");
        break;
    default :
        console.log("Sinal inválido.")
}