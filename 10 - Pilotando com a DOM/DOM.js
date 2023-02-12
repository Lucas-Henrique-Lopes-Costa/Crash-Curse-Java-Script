console.log(window); //Mostra todos os documents que esta na tela

// :DOM

// :Elemetos Sozinhos
const form = document.getElementById("meu-formulario");
console.log(form);

console.log(document.querySelector(".conteudo")); //funciona com tudo
console.log(document.querySelector("h1"));

// :Elemetos multiplos

console.log(document.querySelectorAll(".item"));

console.log(document.getElementsByClassName("item"));

console.log(document.getElementsByTagName("li"));

const item = document.querySelectorAll(".item");

item.forEach((item) => console.log(item));

// :Mudando o HTML

const ul = document.querySelector(".itens");

//ul.remove(); //Remove todos os itens

// ul.lastElementChild.remove(); //Remove o último item

ul.firstElementChild.textContent = "Hello World"; //muda o texto do primeiro item

ul.children[1].innerText = "Lucas"; // Muda o texto do segunda pessoa(porque o código conta apartir do 0)

ul.lastElementChild.innerHTML = "<h1>Marcos Túlio</h1>";

// :Mudando o CSS

const btn = document.querySelector(".btn");

btn.style.background = "red";

btn.addEventListener("click", (e) /*Primeiro o evento e depois a função*/ => {
  e.preventDefault();
  console.log("click");
  console.log(e);
  console.log(e.target.id);

  //document.querySelector('#meu-formulario').style.background = 'black'
  //document.querySelector('#meu-formulario').style.color = 'white'

  document.querySelector("body").classList.add("modo-dark");
  document.querySelector(".itens").lastElementChild.innerHTML =
    "<h1>Hello</h1>";
});

btn.addEventListener("mouseout", (e) => {
  e.preventDefault();
  document.querySelector("body").classList.add("modo-dark");
  document.querySelector("#meu-formulario").style.color = "black";
  document.querySelector(".itens").lastElementChild.innerHTML =
    "<h1>Hello</h1>";
});
