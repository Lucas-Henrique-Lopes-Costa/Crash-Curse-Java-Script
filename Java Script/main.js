/*/

    alert('Hello World'); //Mostra um pop-up

/*/

/*/
    //mostra no console da página, ou seja não mostra para o usuário

    console.log('Hello World')

    console.error('Este é um erro')

    console.log('Este é um aviso')

/*/ 

/*/ 
    //let

    let idade = 15        //declarar uma variável

    idade = 16;           //modificando uma variável

    console.log(idade);   //monstrando a variável

    //const

    const idade = 30;   // atribui um valor constante a idade, logo sempre tem que ter uma valor atribuido

    idade = 80; //dâ erro, porque o valor deve ser constante

    console.log(idade);
/*/

/*/
    // tipos de variáveis:  Strings, Numbers, boolean, null, underfined, symbol

    const nome = 'Lucas';
    const idade = '16';
    const avaliacao = 4.5;
    const frio = true;
    const x = null;
    const y = undefined;
    
    let z;

    console.log(typeof nome); //string
    console.log(typeof x); //object(null)
    console.log(typeof z); //undefined

/*/

/*/
    //contatenação

    const nome = 'Lucas';
    const idade = '16';

    console.log('Meu nome é '+ nome + ' e minha idade ' + idade + ' anos de idade');//colocando variável no meio do texto

    //simplificando

    console.log(`Meu nome é ${nome} e tenho ${idade} anos`) // você pode colocar isso como uma variável

/*/

/*/
    //Modificando uma variável

    const s = 'Hello World';

    console.log(s.length); //conta caracter com espaços

    console.log(s.toUpperCase()) //coloca tudo em maíusculo

    console.log(s.toLowerCase())

    console.log(s.substring(0, 5)) //mostra a o texto do 0 até 5 caracter

    console.log(s.substring(0, 5). toUpperCase()); 

    console.log(s.split('')) //divide cada caracter

    const lista = 'tecnologia , computador, teclado, mouse, monitor'

    console.log(lista.split(', ')) // o que esta em parêntese será o que vai ser colocado entre um espaço e outro
/*/

/*/

    //Arrays => variáveis com muitos valores

    const numeros = new Array(1,2,3,4,5)

    console.log(numeros)

    const lista = ['maçã', 'banana', 'uva', true, 10] // aceita qualquer tipo de variável

    console.log(lista)

    const frutas = ['maçã', 'banana', 'uva']

    console.log(frutas[1]) //Ele começa a contar apartir do 0

    frutas[3] = 'abacaxi' //troca o elemento 3 por abacaxi

    console.log(frutas)

    frutas.push('pera') //adiciona no final

    console.log(frutas)

    frutas.unshift('morango') // adiiona no começo

    console.log(frutas)

    frutas.pop() //o último item some

    console.log(frutas)

    console.log(Array.isArray(frutas))

    console.log(Array.isArray('hello'))

    console.log(frutas.indexOf('banana'))// ve em que posição esta

    console.log(frutas.indexOf('Banana')) // não encontra correspondência

/*/

/*/
    //Objetos

    const pessoa = {
        Pnome: 'Lucas',// sempre colocar vírgula
        Unome: 'Henrique',
        idade: 16,
        hobbies: ['programar', 'Tocar viola', 'Estudar'],
        endereco: {
            rua: 'Cristo Redentor - 1651',
            cidade: 'Divionópolis',
            estado: 'Minas Gerais',
        }
    }

    console.log(pessoa)

    console.log(pessoa.Pnome, pessoa.Unome) //mostrar apenas um objeto

    console.log(pessoa.hobbies[1]) // mostrar um obejto + Array

    console.log(pessoa.endereco.cidade)

    const{ Pnome, Unome, endereco: { cidade } } = pessoa // puxando um objeto específico

    console.log(cidade)

    pessoa.email = ('Lucass20586@gmail.com') //adiciona um objeto

    console.log(pessoa)

/*/

/*/
    //Manipulando dados

    const todos = [
        {
            id: 1,
            texto: 'Faça o dever!',
            isCompleted: true,
        },

        {
            id: 2,
            texto: 'Reunião com o chefe',
            isCompleted: true,
        },

        {
            id: 3,
            texto: 'Consulta com dentista',
            isCompleted: false,
        },
    ]

    console.log(todos)

    console.log(todos[1].texto) //mostrar um objeto específico

    const todosJSON = JSON.stringify(todos); //transformar os objetos para JSON uqe serve para fazer os obejtos mais simples

    console.log(todosJSON)

/*/

/*/
    // For

    for(let i = 0; i < 10; i++) { //ele vai repetir isso até que o "i" seja o máximo passível menor do que 10, e cada vez que ele passa pelo loop, o progrma adiciona +1 na varíavel "i"
        console.log(i)
    }

    for(let i = 0; i <= 10; i++) { //ele vai repetir isso até que o "i" seja igual a 10, e cada vez que ele passa pelo loop, o progrma adiciona +1 na varíavel "i"
        console.log(i)
    }

    for(let i = 0; i < 10; i++) { //ele vai repetir isso até que o "i" seja o máximo passível menor do que 10, e cada vez que ele passa pelo loop, o progrma adiciona +1 na varíavel "i"
        console.log(`O número do for é: ${i}`)
    }
/*/

/*/
    // While

    let i = 0;

    while(i < 10){
        console.log(`O némro do while é: ${i}`);
        i++;
    }
/*/

/*/
    //Algumas coisas legais

    for(let i = 0; i < todos.length; i++) { //mostra todos os "textos" do objeto "todos"
        console.log(todos[i].texto)
    }

    for(let NovoTodo of todos) { //muda de variavel
        console.log(NovoTodo)
        console.log(`Este é o id do texto: ${NovoTodo.id}`)
    }
/*/

/*/
    //forEach
    todos.forEach(function(NovoTodos) { //muda de variável
        console.log(NovoTodos.texto);
    });

    //map
    const NovoTexto = todos.map(function(NovoTodos2) { //muda de variável
        return NovoTodos2.texto
    })

    console.log(NovoTexto)

    //filter

    const NovoCompleted = todos.filter(function(NovoTodos3) {
        return NovoTodos3.isCompleted === true; //seleciona apenas o que são "true"
    })

    console.log(NovoCompleted)

    const NovoCompleted2 = todos.filter(function(NovoTodos3) {
        return NovoTodos3.isCompleted === true; //seleciona apenas o que são "true"
    }).map(function(NovoTodos3){ //filtra e mostra o "texto"
        return NovoTodos3.texto;
    })

    console.log(NovoCompleted2)

/*/

/*/
    // Condições

    const x = 4 // se fosse '10' ele iria considerar como uma string
    const y = 15

    if(x === 10) {
        console.log('X é igual a 10')
    } else if(x > 10){
        console.log('X é maior que 10')
    } else{
        console.log('X é menor que 10')
    }


    if(x > 5 || y > 10) { // o "||" significa "ou" => se uma das sentenças estiver certa ele realiza a ação
        console.log('X é maior que 5 e y é maior que a 10')
    } 

    if(x > 5 && y > 10) { // o "&&" significa "e" => as duas sentenças devem estar certas para realizar a ação
        console.log('X é maior que 5 e y é maior que a 10')
    } 

    const x = 8

    //const color = x > 10 ? // Se x for maior que 10 ENTÃO faça isso // 'red' : // Senão // 'blue'  //Condições em uma linha

    const color = 'Verde'
    console.log(color)

    // Swith

    switch(color) {
        case 'red':
            console.log('A cor é red')
            break
        case 'blue':
            console.log('A cor é blue')
            break
        default:
            console.log('A cor não é nem red nem blue')
    }
/*/

/*/
    //Funções
    /*
        function adicionarNum(num1, num2) { //pode colocar valores dentro do parentese
            console.log(num1 + num2) // somando
        }
        adicionarNum(5, 6)
        adicionarNum('Lucas', ' Henrique')
    /*

    /*
        function adicionarNum(num1, num2) { 
            return num1 + num2 //mais usado
        }

        console.log(adicionarNum(5, 7))
    /*

    /*
        const adicionarNum = (num1, num2) => { 
        return num1 + num2
        }

        console.log(adicionarNum(5, 8))
    /*

    /*
        const adicionarNum = (num1, num2) => console.log(num1 + num2) // O "return" so funciona entre chaves('{}')

        adicionarNum(5, 45)
    /*

/*/

/*/
    //Construindo uma função

    function Pessoa(Nome, SobreNome, Aniversario) {
        this.Nome = Nome
        this.SobreNome = SobreNome
        this.Aniversario = new Date(Aniversario)
        
        /*
        
        this.getBirthYear = function(){
            return this.Aniversario.getFullYear()
        }
        this.GetFullName = function(){
            return `${this.Nome} ${SobreNome}`
        }
        
        /*
    }

    Pessoa.prototype.getBirthYear = function() {
        return this.Aniversario.getFullYear()
    }

    Pessoa.prototype.GetFullName = function() {
        return `Meu nome é ${this.Nome} e meu sobrenome é ${this.SobreNome}`
    }
/*/

/*/
    //Classes

    class Pessoa {
        constructor(Nome, SobreNome, Aniversario) {
            this.Nome = Nome
            this.SobreNome = SobreNome
            this.Aniversario = new Date(Aniversario)
        }

        getBirthYear() {
            return this.Aniversario.getFullYear()
        }

        GetFullName() {
            return `${this.Nome} ${this.SobreNome}`
        }
    }

    // Objetos Intantênio

    const pessoa1 = new Pessoa('Lucas', 'Henrique', '9-19-2004')
    const pessoa2 = new Pessoa('Marcos', 'Túlio', '5-28-2010')

    /*
        console.log(pessoa1)

        console.log(pessoa2.Aniversario)

        console.log(pessoa2.Aniversario.getFullYear())

        console.log(pessoa1.getBirthYear())

        console.log(pessoa2.GetFullName())
    /*

    console.log(pessoa2.GetFullName())

    console.log(pessoa1)
/*/

/*console.log(window)*/ //Mostra todos os documents que esta na tela

/*
    //DOM

    // Elemetos Sozinhos
    const form = (document.getElementById('meu-formulario'))
    console.log(form)

    console.log(document.querySelector('.conteudo')) //funciona com tudo
    console.log(document.querySelector('h1'))

    ///Elemetos multiplos

    console.log(document.querySelectorAll('.item'))

    console.log(document.getElementsByClassName('item'))

    console.log(document.getElementsByTagName('li'))

    const item = document.querySelectorAll('.item');

    item.forEach((item) => console.log(item));

/*
    //Mudando o HTML

    const ul = document.querySelector('.itens')

    //ul.remove(); //Remove todos os itens

    ul.lastElementChild.remove() //Remove o último item

    ul.firstElementChild.textContent = 'Hello World' //muda o texto do primeiro item

    ul.children[1].innerText = 'Lucas' // Muda o texto do segunda pessoa(porque o código conta apartir do 0)

    ul.lastElementChild.innerHTML = '<h1>Marcos Túlio</h1>'

    //Mudando o css

    const btn = document.querySelector('.btn')

    btn.style.background = 'red'

    btn.addEventListener('click', (e) /*Primeiro o evento e depois a função/* => {
        e.preventDefault()
        console.log('click')
        console.log(e)
        console.log(e.target.id)

        //document.querySelector('#meu-formulario').style.background = 'black'
        //document.querySelector('#meu-formulario').style.color = 'white'

        document.querySelector('body').classList.add('modo-dark')
        document.querySelector('.itens')
        .lastElementChild.innerHTML = '<h1>Hello</h1>'
    })

    const btn = document.querySelector('.btn')

    btn.addEventListener('mouseout', (e) => {
        e.preventDefault()
        document.querySelector('body').classList.add('modo-dark')
        document.querySelector('#meu-formulario').style.color = 'black'
        document.querySelector('.itens')
        .lastElementChild.innerHTML = '<h1>Hello</h1>'
    })
*/

const meuFormulario =  document.querySelector('#meu-formulario')
const nome =  document.querySelector('#nome')
const email =  document.querySelector('#email')
const msg =  document.querySelector('.msg')
const usuarios =  document.querySelector('#usuarios')

meuFormulario.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()

    //console.log(name.value) //faz aparecer o nome no console

    if(nome.value === '' || email.value === ''){ //caso os valores sejam nulos
        msg.classList.add('erro')
        msg.innerHTML = 'Por Favor, insira seus dados'

        setTimeout(() => msg.remove(), 3000) //remove o aviso
    }else{
        const li = document.createElement('li') //cria um elemento li
        
        li.appendChild(document.createTextNode(`${nome.value} / ${email.value}`)) //cria um texto

        usuarios.appendChild(li)

        //Limpar campos

        name.value = ''
        email.value = ''
    }
}