// -- Geral

// SELECT * FROM aluno
// SELECT * FROM professor
// SELECT * FROM aulas

// -- Filtro

// SELECT nome, responsavel FROM aluno

// -- Busca

// SELECT * FROM aluno WHERE matricula = 1

// SELECT * FROM aluno WHERE nome like '%G%'
// SELECT cpf, nome FROM aluno WHERE nome like '%G%'

// SELECT * FROM professor WHERE id_professor BETWEEN 2 and 3
// SELECT * FROM professor WHERE id_professor IN (1,2)

// -- Edição

// UPDATE aluno SET nome='Lucas', responsavel='Lidiana' WHERE matricula = 2
// DELETE FROM aluno WHERE matricula = 2