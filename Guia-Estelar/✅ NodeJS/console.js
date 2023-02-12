// módulo nativo
const path = require('path')
console.log(__filename)
console.log(path.basename(__filename))

// meus módulos
const myModulo = require('./exports')
console.log(myModulo)