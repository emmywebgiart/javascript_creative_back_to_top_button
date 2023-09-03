let buttonBack = document.getElementById("button_back")

document.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
        buttonBack.classList.add('show_button_back')
    } else {
        buttonBack.classList.remove('show_button_back')
    }
})

buttonBack.onclick = () => {
    window.scrollTo(0, 0)
}