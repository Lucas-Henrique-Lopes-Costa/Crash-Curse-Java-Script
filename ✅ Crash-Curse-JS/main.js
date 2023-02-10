const meuFormulario =  document.querySelector('#meu-formulario')
const nome =  document.querySelector('#nome')
const email =  document.querySelector('#email')
const msg =  document.querySelector('.msg')
const usuarios =  document.querySelector('#usuarios')

meuFormulario.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()

    console.log(name.value) //faz aparecer o nome no console

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