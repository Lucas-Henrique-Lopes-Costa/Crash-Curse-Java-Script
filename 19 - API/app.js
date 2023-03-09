const express = require('express')

const app = express()

// server -> ouvi e espera a entrada do navegador
app.listen('3000')

// middleware -> entende o código que vem da requisição (que vem como json)
app.use(express.json())

// POST
// criando as rotas do site
app.route('/').get( (req, res) => res.send(req.body))
// no insomnia você faz a requisição post para o localhost

// PUT
let author = "Lucas"
app.route('/').put( (req, res) => {
  author = req.body
  res.send(author)
})
// no insomnia passa um json como PUT

// DELETE
let project = "API"
app.route('/:identificador').put( (req, res) => {
  res.send(req.params.identificado)
})
// no insomnia passa um json como DELETE colocando depois do / o id do que quer apagar
