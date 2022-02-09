/* Ao clicar no ícone do menu verticla apresentará o menu de items */
const itemIcon = document.querySelectorAll('.creative .menu-icons i')
const menuItems = document.querySelector('.creative .menu-items')
const menuIcons = document.querySelector('.creative .menu-icons')

console.log(menuIcons)

for (const item of itemIcon) {
  item.addEventListener('click', () => {
    menuItems.classList.toggle('show')
    menuIcons.classList.toggle('show')
  })
}
