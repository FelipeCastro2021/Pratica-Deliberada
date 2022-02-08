const iconMenu = document.querySelectorAll('.toggle')
const menu = document.querySelector('nav.container')

for (const item of iconMenu) {
  item.addEventListener('click', () => {
    menu.classList.toggle('show')
  })
}

const itemMenu = document.querySelectorAll('.menu-items li a')

for (const item of itemMenu) {
  item.addEventListener('click', () => {
    menu.classList.remove('show')
  })
}
