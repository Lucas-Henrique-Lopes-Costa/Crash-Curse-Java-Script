const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

app.route('/').get( (req, res) => {
  axios.get('https://api.github.com/users/Lucas-Henrique-Lopes-Costa')
    .then(result => res.send(`<img src"${result.data}" />`))
    .catch(error => console.error(error))
} )