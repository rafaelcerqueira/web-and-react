//var e let:


//variáveis do tipo primitivo:

//utilizando o "var":

var numero = 10; //numero
var float = 13.5; //numero float
var string = 'texto'; // string
var boolean = true; // boolean (true/false)

//--------------------------------------------------

// Cirar variáveis com "var" pode causar problemas;
// O "var" não fica restrito a um escopo;
// O "var" pode escapar do escopo de uma função, por exemplo;
//Para padronizar, usa-se a palavra "let";
//A variável "let" respeita o escopo onde foi criada;
//Cirar variável "let" garante que ela não escape do escopo.

//--------------------------------------------------

//utilizando o "let":

let numero2 = 10; //numero
let float2 = 13.5; //numero float
let string2 = 'texto'; // string
let boolean3 = true; // boolean (true/false)

//podemos reatribuir um valor a uma variável já existente:

//para isso, escrevemos o nome da variável sem declará-la novamente:

numero2 = 23;

//--------------------------------------------------

//variáveis do tipo complexo:

//function:

let complexo = function(){
    console.log("Essa é uma variável do tipo complexo.")
};

//object:

let objeto = {nome: 'João', idade: 23};
let vetor = [1, 2, 3, 4];//array

//Para criar variáveis que não guarda nenhuma informação:

//guardamos o valor "null" na variável:
let variavelVazia = null;

//--------------------------------------------------

//Utilizando "const":

//O "const" impede que o valor seja alterado;
//Sendo assim, o "const" não é exatamente uma variável.

const pi = 3.1415;

//se tentarmos reatribuir um valor à "pi", retornará um erro.

