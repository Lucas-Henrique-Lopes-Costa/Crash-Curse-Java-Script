// :Classes
class Pessoa {
  constructor(Nome, SobreNome, Aniversario) {
    this.Nome = Nome;
    this.SobreNome = SobreNome;
    this.Aniversario = new Date(Aniversario);
  }

  getBirthYear() {
    return this.Aniversario.getFullYear();
  }

  GetFullName() {
    return `${this.Nome} ${this.SobreNome}`;
  }
}

// :Objetos Intantênio

const pessoa1 = new Pessoa("Lucas", "Henrique", "9-19-2004");
const pessoa2 = new Pessoa("Marcos", "Túlio", "5-28-2010");

console.log(pessoa1);

console.log(pessoa2.Aniversario);

console.log(pessoa2.Aniversario.getFullYear());

console.log(pessoa1.getBirthYear());

console.log(pessoa2.GetFullName());

console.log(pessoa2.GetFullName());

console.log(pessoa1);
