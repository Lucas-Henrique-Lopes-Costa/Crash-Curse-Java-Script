// :For

for (let i = 0; i < 10; i++) {
  //ele vai repetir isso até que o "i" seja o máximo passível menor do que 10, e cada vez que ele passa pelo loop, o progrma adiciona +1 na varíavel "i"
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  //ele vai repetir isso até que o "i" seja igual a 10, e cada vez que ele passa pelo loop, o progrma adiciona +1 na varíavel "i"
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  //ele vai repetir isso até que o "i" seja o máximo passível menor do que 10, e cada vez que ele passa pelo loop, o progrma adiciona +1 na varíavel "i"
  console.log(`O número do for é: ${i}`);
}

// :Algumas coisas legais

for (let i = 0; i < todos.length; i++) {
  //mostra todos os "textos" do objeto "todos"
  console.log(todos[i].texto);
}

for (let NovoTodo of todos) {
  //muda de variavel
  console.log(NovoTodo);
  console.log(`Este é o id do texto: ${NovoTodo.id}`);
}

// :forEach
todos.forEach(function (NovoTodos) {
  //muda de variável
  console.log(NovoTodos.texto);
});

// :Map
const NovoTexto = todos.map(function (NovoTodos2) {
  //muda de variável
  return NovoTodos2.texto;
});

console.log(NovoTexto);

// :Filter

const NovoCompleted = todos.filter(function (NovoTodos3) {
  return NovoTodos3.isCompleted === true; //seleciona apenas o que são "true"
});

console.log(NovoCompleted);

const NovoCompleted2 = todos
  .filter(function (NovoTodos3) {
    return NovoTodos3.isCompleted === true; //seleciona apenas o que são "true"
  })
  .map(function (NovoTodos3) {
    //filtra e mostra o "texto"
    return NovoTodos3.texto;
  });

console.log(NovoCompleted2);

// :While

let i = 0;

while (i < 10) {
  console.log(`O némro do while é: ${i}`);
  i++;
}
