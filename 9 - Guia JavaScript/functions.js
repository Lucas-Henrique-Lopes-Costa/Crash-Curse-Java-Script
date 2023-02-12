var i

console.log(i)

function createPhrases() {
    i++
    console.log(i)
    createPhrases();
}

createPhrases();

Parameters

let total = 0;

const sum = function (num1, num2) {
    let total = num1 + num2
    return total
}

let num1 = 2
let num2 = 2

console.log(sum(num1, num2))

// Função Liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + ' e de ' + fruta2
}

const copo = fazerSuco('Uva', 'Maça')

console.log('Suco de ' + copo)

let subject = 'create video'

console.log(createThink(subject))
console.log(subject)

function createThink(subject) {
    subject = 'matemática'
    return subject
}

console.log(createThink(subject))
console.log(subject)

const sayMyName = (name) => {
    console.log('antes de executar a função callback')
    
    name()

    console.log('DEPOIS de executar a função callback')
}

sayMyName(
    () => {
        console.log('Estou em uma CallBack')
    }
)

function Person() {
    this.name = name
    this.walk = () => {
        return 'Andando'
    }
}

const lucas = new Person();
console.log(lucas)
console.log(lucas.walk())

const marcos = new Person();
console.log(marcos)
console.log(marcos.walk())