// :Funções

function adicionarNum(num1, num2) {
  //pode colocar valores dentro do parentese
  console.log(num1 + num2); // somando
}
adicionarNum(5, 6);
adicionarNum("Lucas", " Henrique");

function adicionarNum(num1, num2) {
  return num1 + num2; //mais usado
}

console.log(adicionarNum(5, 7));

const addNum = (num1, num2) => {
  return num1 + num2;
};

console.log(addNum(5, 8));

const addOtherNum = (num1, num2) => console.log(num1 + num2); // O "return" so funciona entre chaves('{}')

addOtherNum(5, 45);

// :Construindo uma função

function Pessoa(Nome, SobreNome, Aniversario) {
  this.Nome = Nome;
  this.SobreNome = SobreNome;
  this.Aniversario = new Date(Aniversario);

  this.getBirthYear = function () {
    return this.Aniversario.getFullYear();
  };
  this.GetFullName = function () {
    return `${this.Nome} ${SobreNome}`;
  };
}

Pessoa.prototype.getBirthYear = function () {
  return this.Aniversario.getFullYear();
};

Pessoa.prototype.GetFullName = function () {
  return `Meu nome é ${this.Nome} e meu sobrenome é ${this.SobreNome}`;
};

console.log(Pessoa('Lucas', 'Henrique', 123))

console.log(Pessoa(
  {
    Name: 'Lucas',
    SobreNome: 'Hnerique',
    Aniversario: 2004819,
  }
))

data = new Date(2004, 8, 19)

console.log(data.getFullYear())