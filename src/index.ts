import './assets/css/style.css'
import { menu, rodapeInfos, rodapeFinal, blocoPlano } from './functions/layouts'
import { abrirImagem } from './functions/imagemFunctions'
import { slide } from './functions/sliderShow'
import { Plano } from './functions/interfaces'

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
if (window.location.pathname == '/') {

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

// FUNCIONALIDADES DA PÁGINA PLANOS
if (window.location.pathname == '/pages/planos.html') {
    const servicos = [
        { id: 0, servico: "Mesa Individual", diaria: 49, mensal: 490, anual: 5880, promo: null },
        { id: 1, servico: "Sala de Reunião", diaria: 249, mensal: null, anual: null, promo: true },
        { id: 2, servico: "Sala 6 Lugares", diaria: null, mensal: 1599, anual: 19188, promo: null },
        { id: 3, servico: "Sala 12 Lugares", diaria: null, mensal: 3199, anual: 38388, promo: null }
    ]

    const planosContainer = document.getElementById('planos-container') as HTMLDivElement

    for (let index = 0; index < servicos.length; index++) {
        const plano: Plano = servicos[index]
        const blocoMontado = blocoPlano(plano)

        // o bloco, após ser montado pela função blocoPlano, é inserido no container junto dos demais planos
        planosContainer.appendChild(blocoMontado)
    }
}