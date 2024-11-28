import './assets/css/style.css'
import { menu, rodapeInfos, rodapeFinal } from './functions/_layouts'
import { abrirImagem } from './functions/imgFunctions'
import { slide } from './functions/sliderShow'

console.log(window.location.pathname);

// INSERIR LAYOUTS PADRÃO DA PÁGINA
window.addEventListener('DOMContentLoaded', () => {
    const headerPagina = document.getElementById('header-pagina') as HTMLHeadElement
    const footerPagina = document.getElementById('footer-pagina') as HTMLElement

    const menuContent: HTMLElement = menu()
    headerPagina.appendChild(menuContent)

    const rodapeInfosContent: HTMLElement = rodapeInfos()
    footerPagina.appendChild(rodapeInfosContent)

    const rodapFimContent: HTMLElement = rodapeFinal()
    footerPagina.appendChild(rodapFimContent)
})

// FUNCIONALIDADES DA HOME
if(window.location.pathname == '/') {

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

}