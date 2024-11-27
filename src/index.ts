import './assets/css/style.css'
import { abrirImagem } from './assets/functions/imgFunctions'
import { slide } from './assets/functions/sliderShow'

// SLIDESHOW TESTEMUNHAL CLIENTES
const btnPrev = document.getElementById('prev') as HTMLElement
btnPrev.addEventListener('click', () => slide(0))

const btnNext = document.getElementById('next') as HTMLElement
btnNext.addEventListener('click', () => slide(1))

// VISUALIZAR IMAGENS DA GALERIA
const galeriaImagens = document.getElementsByClassName('img-galeria') as HTMLCollection
for (let i = 0; i < galeriaImagens.length; i++) {
    galeriaImagens[i].addEventListener('click', () => abrirImagem(galeriaImagens[i].attributes[2].value, galeriaImagens[i].attributes[1].value))
}