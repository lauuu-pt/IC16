const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}




const openModalButtons2 = document.querySelectorAll('[data-modal-target]')
const closeModalButtons2 = document.querySelectorAll('[data-close-button]')
const overlay2 = document.getElementById('overlay')

openModalButtons2.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = document.querySelector(button.dataset.modalTarget)
    openModal(modal2)
  })
})

overlay.addEventListener('click', () => {
  const modals2 = document.querySelectorAll('.modal2.active')
  modals2.forEach(modal2 => {
    closeModal(modal2)
  })
})

closeModalButtons2.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = button.closest('.modal2')
    closeModal(modal2)
  })
})

function openModal2(modal2) {
  if (modal2 == null) return
  modal2.classList.add('active')
  overlay2.classList.add('active')
}

function closeModal2(modal2) {
  if (modal2 == null) return
  modal2.classList.remove('active')
  overlay2.classList.remove('active')
}