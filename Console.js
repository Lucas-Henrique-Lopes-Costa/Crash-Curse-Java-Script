alert("Hello World"); //Mostra um pop-up

// :Mostra no console da página, ou seja não mostra para o usuário

console.log("Hello World");

console.error("Este é um erro"); // mostra um erro

console.log("Este é um aviso");

// :Variaveis

//let

let idade = 15; //declarar uma variável

idade = 16; //modificando uma variável

console.log(idade); //monstrando a variável

//const

const fakeIdade = 30; // atribui um valor constante a idade, logo sempre tem que ter uma valor atribuido

idade = 80; //dâ erro, porque o valor deve ser constante

console.log(idade);

// :Tipos de variáveis:  Strings, Numbers, boolean, null, underfined, symbol

const nome = "Lucas";
const minhaIdade = "16";
const avaliacao = 4.5;
const frio = true;
const x = null;
const y = undefined;

let z;

console.log(typeof nome); //string
console.log(typeof x); //object(null)
console.log(typeof z); //undefined

// :Contatenação

console.log(
  "Meu nome é " + nome + " e minha idade " + minhaIdade + " anos de idade"
); //colocando variável no meio do texto

// :Template String

console.log(`Meu nome é ${nome} e tenho ${idade} anos`); // você pode colocar isso como uma variável

// :Modificando uma variável
const s = "Hello World";

console.log(s.length); //conta caracter com espaços

console.log(s.toUpperCase()); //coloca tudo em maíusculo

console.log(s.toLowerCase());

console.log(s.substring(0, 5)); //mostra a o texto do 0 até 5 caracter

console.log(s.substring(0, 5).toUpperCase());

console.log(s.split("")); //divide cada caracter

const lista = "tecnologia , computador, teclado, mouse, monitor";

console.log(lista.split(", ")); // o que esta em parêntese será o que vai ser colocado entre um espaço e outro
