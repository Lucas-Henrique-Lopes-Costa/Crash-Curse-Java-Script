// Desafio 1

function getNota(nota) {
    if (nota >= 90) {
        console.log("Tirou letra A")
    } else if (nota <= 89 && nota >= 80) {
        console.log("Tirou letra B")
    } else if (nota <= 79 && nota >= 70) {
        console.log("Tirou letra C")
    } else if (nota <= 69 && nota >= 60) {
        console.log("Tirou letra D")
    } else if (nota <= 60) {
        console.log("Tirou letra F")
    } else {
        console.log("Letra inválida")
    }
}
getNota(0)

// Desafio 2

let pessoa = {
  receita: [1200, 1200, 250.43, 360.45],
  despesas: [320.34, 128.45, 176.87, 1450.00, 2000],
};

function totalPessoa(pessoa) {
  let newTotal = 0;

  let totalReceita = 0;
  for (let index = 0; index < pessoa.receita.length; index++) {
    newTotal += pessoa.receita[index];
  }

  let totalDespesas = 0;
  for (let index = 0; index < pessoa.despesas.length; index++) {
    newTotal -= pessoa.despesas[index];
  }

  return newTotal.toFixed(2)
}

let mensagem = "negativo"

if (totalPessoa(pessoa) > 0){
    mensagem = "positivo"
}

console.log(`Saldo é ${mensagem} e é de: R$${totalPessoa(pessoa)}`)

// Desafio 3

function transformar(str) {
    let result = str.indexOf("ºC") > -1
    let value = parseInt(str.replace("ºC", "").replace("F", ""))
    let calculated

    if (result) {
        temp = str.replace("", "F")
        calculated = value * 9/5 + 32
        console.log("O valor em Fahrenheit é de: "+ calculated.toFixed(2) + "F")
    } else {
        temp = str.replace("F", "ºC")
        calculated = (value-32) * 5/9
        console.log("O valor em Celsius é de: "+ calculated.toFixed(2) + "ºC")
    }
}

transformar("34F")
transformar("34ºC")

// Desafio 4

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade – Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

console.log("Há: " + booksByCategory.length + " categorias:");

let author = 0;

for (let index = 0; index < booksByCategory.length; index++) {
  console.log("## " + booksByCategory[index].category);
  console.log("Com " + booksByCategory[index].books.length + " livros");
}

console.log("----------------------------------");

function coutAuthors() {
  let authors = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        // se não achou o autor, ele coloca
        authors.push(book.author);
      }
    }
  }

  console.log("No total são: " + authors.length + " autores");
}

coutAuthors();

function booksOfAuthor(author) {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author == author) {
        // se não achou o autor, ele coloca
        books.push(book);
      }
    }
  }

  console.log("E são " + books.length + " livros de " + author + ":");

  for (let index = 0; index < books.length; index++) {
    console.log(books[index].title);
  }
}

console.log("----------------------------------");

booksOfAuthor("Stephen R. Covey");
