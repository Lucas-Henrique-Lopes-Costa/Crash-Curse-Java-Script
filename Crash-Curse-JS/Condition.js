// :Condições

let x = 4; // se fosse '10' ele iria considerar como uma string
let y = 15;

if (x === 10) {
  console.log("X é igual a 10");
} else if (x > 10) {
  console.log("X é maior que 10");
} else {
  console.log("X é menor que 10");
}

if (x > 5 || y > 10) {
  // o "||" significa "ou" => se uma das sentenças estiver certa ele realiza a ação
  console.log("X é maior que 5 e y é maior que a 10");
}

if (x > 5 && y > 10) {
  // o "&&" significa "e" => as duas sentenças devem estar certas para realizar a ação
  console.log("X é maior que 5 e y é maior que a 10");
}

x = 8;

//const color = x > 10 ? // Se x for maior que 10 ENTÃO faça isso // 'red' : // Senão // 'blue'  //Condições em uma linha

const color = "Verde";
console.log(color);

// :Swith

switch (color) {
  case "red":
    console.log("A cor é red");
    break;
  case "blue":
    console.log("A cor é blue");
    break;
  default:
    console.log("A cor não é nem red nem blue");
}
