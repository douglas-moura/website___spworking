import './assets/css/style.css'
console.log('Site Spworking')

let slideIndex = 0
showSlide(slideIndex)

// Função para mudar os slides
const changeSlide = (n) => {
    showSlide(slideIndex += n);
}

// Função para exibir o slide atual
function showSlide(n) {
    const slides = document.getElementsByClassName("slide")

    console.log(slides.length)
    console.log(n)

    if (n >= slides.length) slideIndex = 0  // Volta ao primeiro slide
    if (n < 0) slideIndex = slides.length - 1 // Vai para o último slide

    // Esconde todos os slides
    for (let slide of slides) {
        slide.style.display = "none"
    }

    // Exibe o slide atual
    slides[slideIndex].style.display = "block"
    if (n != slides.length - 1) slides[slideIndex + 1].style.display = "block"
}

document.getElementById('prev').addEventListener('click', () => changeSlide(-1))
document.getElementById('next').addEventListener('click', () => changeSlide(1))