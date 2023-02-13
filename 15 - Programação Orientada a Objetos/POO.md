## O que é?
Usado por JS e outras linguagens

## Quando usar?
Padrões de código + Organização + Classifica a rotina do código

## Conceitos:
- Objetos: Possui propriedades e funcionalidades
  Abstratos: Autenticação/Autorização
  Concretos: Pessoa/Aluno
- Classes: Protótipo e uma forma de organizar
- Encapsulamento: Esconde os detalhes de implementação das classes
    A vantagem do POO é que ele separa o objeto e isso faz ele se tornar mais organizado

    ```
    // Estrutural
    let altura = 50
    let largura = 60
    function calcularArea() {
      return altura * largura
    }
    let area = calcularArea()
    ```
    permite alterar o código

    ```
    // Orientado a Objetos
    class Poligono {
      constructor(altura, largura) {
        this.altura = altura // refere ao que vai ser passado mais tarde no let poligono = new Poligono([this], [this])
        this.largura = largura
      }
      get area() {
        return this.#calcularArea() // o # significa que ela só retorna valor, e que o usuário não tem acesso a dentro dessa função
      }
      #calcularArea() {
        return this.altura * this.largura
      }
    }

    let poligono = new Poligono(50,60) // novo objeto
    console.log(poligono) => O QUE TEM NO OBJETO
    console.log(poligono.area) => Calculo da área
    console.log(poligono.#calcularArea()) => Não tem acesso
    ```
- Herança: Organização de classes dentro da outra | Fácil de reutilizar o código
- Polimorfismo: Quando um objeto se estende ao outro -> Reescreve as características
    Classe:
    ```
    class Atleta {
    peso;
    categoria;

    constructor(peso) {
      this.peso = peso
    }
    
    definirCategoria() {
      if (this.peso <= 50) {
        this. categoria = 'infantil'
      }
      else if (this.peso <= 65) {
        this.categoria = 'juvenil'
      }
      else {
        this.categoria = 'adulto'
      }
    ```
    Sub-classe:
    ```
    class Lutador extends Atleta {
      constructor(peso) {
        super(peso)
      }
      
      definirCategoria() {
        if (this.peso <= 54) {
          this.categoria = 'pluma'
        }
        else if (this.peso <= 60 {
          this.categoria = 'leve'
        }        
        else if (this.peso <= 75) {
          this.categoria = 'meio—leve'
        }
        else {
          this.categoria = 'pesado'
        }
    ```
- Abstração: Identidade de uma classe para criar outras
  // definir
  class Parafuso { // Superclasse - Abstrata
    constructor() {
    if (this.constructor === Parafuso) {
      throw new Error( 'Classe abstrata não pode ser instânciada')
    }
    get tipo() {
      throw new Error( 'Método "get tipo()" precisa ser implementado")
    }
  }
  
  class Fenda extends Parafuso {
    constructor() { super() }
  
    get tipo() {
      return 'fenda'
    }
  }

  class Philips extends Parafuso {
    constructor() { super() }
    
    get tipo() {
      return 'philips'
    }
  }