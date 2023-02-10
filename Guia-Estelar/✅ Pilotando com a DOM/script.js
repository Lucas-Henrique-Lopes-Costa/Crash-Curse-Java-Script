// Manipulando ocntéudo

// // inner HTML
// const element = document.querySelector("h1")
// element.innerHTML = "Olá!"

// element.style.backgroundColor = "blue"

// // events
// element.addEventListener('click', console.log("Mouse"))

const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function() {
  modalWrapper
    .classList
    .remove('invisible')
}

document.addEventListener('keydown', function(event) {
  const isEscKey = event.key === 'Escape'

  if(isEscKey) {
    modalWrapper.classList.add('invisible')
  }
})