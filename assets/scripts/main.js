

//  insetHelperModal is helping for close modal Page
const insetHelperModal = document.getElementById('insetHelperModal')

// SIDEBAR MENU START
// sideBarMenu
const sidebarMenu = document.getElementById('sidebarMenu')
const openNavMenu = () => {
    sidebarMenu.classList.remove('hidden')
    insetHelperModal.classList.remove('hidden')
    setTimeout(() => {
        sidebarMenu.classList.add('right-0-impo')
    },1)
    setTimeout(() => {
        insetHelperModal.classList.remove('opacity-0')
    },200)
}

const closeNavMenu = () => {
    sidebarMenu.classList.remove('right-0-impo')
    insetHelperModal.classList.add('opacity-0')
    sidebarMenu.classList.add('hidden')
    insetHelperModal.classList.add('hidden')
}
// SIDEBAR MENU END

// closeAllModal
insetHelperModal.onclick = () => {
    closeNavMenu()
}