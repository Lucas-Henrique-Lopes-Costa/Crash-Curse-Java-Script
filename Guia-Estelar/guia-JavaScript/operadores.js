// let expression = 'a'

// switch (expression) {
//     case 'a':
//         console.log('Letra A')
//         break;
//     case 'b':
//         console.log('Letra B')
//         break;
//     default:
//         console.log('Letra B')    
//         break;
// }

// function sayMyName(name = '') {
//     if (name === '') {
//         throw 'Nome é obrigatório' // para a execução da função caso um erro (tem que usar o try catch para conseguir prosseguir com o código)
//     }

//     console.log("Depois do erro")
// }

// try {
//     sayMyName()
// } catch (e) { // caso não consiga pegar
//     console.log(e)
// }

// let name = 'Mayk'
// let names = ['João', 'Paulo', 'Pedro']

// for (let char of name) {
//     console.log(char)
// }



// for (let name of name) {
//     console.log(name)
// }

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property + ': ' + person[property])
}