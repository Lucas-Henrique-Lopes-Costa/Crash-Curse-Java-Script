import axios from 'axios'

Promise.all([
  axios.get('https://api.github.com/users/Lucas-Henrique-Lopes-Costa'),
  axios.get('https://api.github.com/users/Lucas-Henrique-Lopes-Costa/repos')
])
  .then(responses => {
    console.log(responses[0].data.login)
    console.log(responses[1].data)
  })