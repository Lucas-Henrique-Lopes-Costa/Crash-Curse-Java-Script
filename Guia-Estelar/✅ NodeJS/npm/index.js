const questions = [
  "Qual seu nome?",
  "Qual o seu sexo?"
]

const ask = ( index = 0 ) => {
  process.stdout.write("\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit()
  }
})

process.on('exit', () => {
  console.log(`
      Olá, ${answers[0]}
      Seu sexo é: ${answers[1]}
  `)
})