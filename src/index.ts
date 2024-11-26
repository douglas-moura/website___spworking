import './assets/css/style.css'

let slideIndex = 0
showSlide(slideIndex)

// Função para mudar os slides
const changeSlide = (n: number): void => {
    showSlide(slideIndex += n);
}

// Função para exibir o slide atual
function showSlide(n: number): void {
    const slides = document.getElementsByClassName("slide") as HTMLCollection

    if (n >= slides.length) slideIndex = 0  // Volta ao primeiro slide
    if (n < 0) slideIndex = slides.length - 1 // Vai para o último slide

    // Esconde todos os slides
    for (let slide of slides) {
        (slide as HTMLElement).style.display = "none"
    }

    // Exibe o slide atual
    (slides[slideIndex] as HTMLElement).style.display = "block"
    if (n != slides.length - 1) (slides[slideIndex + 1] as HTMLElement).style.display = "block"
}

const btnPrev = document.getElementById('prev') as HTMLBRElement
const btnNext = document.getElementById('next') as HTMLBRElement

btnPrev.addEventListener('click', () => changeSlide(-1))
btnNext.addEventListener('click', () => changeSlide(1))