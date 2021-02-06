// :Arrays => variáveis com muitos valores

const numeros = new Array(1, 2, 3, 4, 5);

console.log(numeros);

const lista = ["maçã", "banana", "uva", true, 10]; // aceita qualquer tipo de variável

console.log(lista);

const frutas = ["maçã", "banana", "uva"];

console.log(frutas[1]); //Ele começa a contar apartir do 0

frutas[3] = "abacaxi"; //troca o elemento 3 por abacaxi

console.log(frutas);

frutas.push("pera"); //adiciona no final

console.log(frutas);

frutas.unshift("morango"); // adiiona no começo

console.log(frutas);

frutas.pop(); //o último item some

console.log(frutas);

console.log(Array.isArray(frutas));

console.log(Array.isArray("hello"));

console.log(frutas.indexOf("banana")); // ve em que posição esta

console.log(frutas.indexOf("Banana")); // não encontra correspondência
