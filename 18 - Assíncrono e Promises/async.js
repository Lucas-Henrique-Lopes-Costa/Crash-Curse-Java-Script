const promessa = new Promise(function(resolve, reject) {
  return reject('error')
})

async function start() {
  // try {
  //   const result = await promessa
  //   console.log(result)
  // } catch(e) {
  //   console.log(e)
  // } finally {
  //   console.log('rodar sempre')
  // }

  const response = await fetch('https://api.github.com/users/Lucas-Henrique-Lopes-Costa')
  const user = await response.json()

  const reposResponse = await fetch(user.repos_url)
  const repos = await reposResponse.json()

  console.log(repos)
}

start().catch( error => console.log(error))