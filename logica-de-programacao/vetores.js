let vetor = [1, 2, 3, 4, 5];

console.log(vetor[1]);

//Para mudar um valor dentro do array:

vetor[4] = 0

console.log (vetor);

//Arrays aceitam valores de vários tipos:

let vetor2 = [1, 2, 'três', 'quatro'];

//--------------------------------------------

//Percorrendo um vetor:

let vetor3 = [1, 2, 3, 4];

//for-of:

for (let item of vetor3) {
    console.log(item);
}

//for-in:

for (let item in vetor3) {
    console.log(item);
}

//-----------------------------------------

//Matriz:

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let linha of matriz) {
    for (let elemento of linha) {
        console.log(elemento);
    }
}