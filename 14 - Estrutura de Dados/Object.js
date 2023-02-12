// :Objetos

const pessoa = {
  Pnome: "Lucas", // sempre colocar vírgula
  Unome: "Henrique",
  idade: 16,
  hobbies: ["programar", "Tocar viola", "Estudar"],
  endereco: {
    rua: "Cristo Redentor - 1651",
    cidade: "Divionópolis",
    estado: "Minas Gerais",
  },
};

console.log(pessoa);

console.log(pessoa.Pnome, pessoa.Unome); //mostrar apenas um objeto

console.log(pessoa.hobbies[1]); // mostrar um obejto + Array

console.log(pessoa.endereco.cidade);

const {
  Pnome,
  Unome,
  endereco: { cidade },
} = pessoa; // puxando um objeto específico

console.log(cidade);

pessoa.email = "Lucass20586@gmail.com"; //adiciona um objeto

console.log(pessoa);

// :Manipulando dados

const todos = [
  {
    id: 1,
    texto: "Faça o dever!",
    isCompleted: true,
  },

  {
    id: 2,
    texto: "Reunião com o chefe",
    isCompleted: true,
  },

  {
    id: 3,
    texto: "Consulta com dentista",
    isCompleted: false,
  },
];

console.log(todos);

console.log(todos[1].texto); //mostrar um objeto específico

const todosJSON = JSON.stringify(todos); //transformar os objetos para JSON uqe serve para fazer os obejtos mais simples

console.log(todosJSON);
