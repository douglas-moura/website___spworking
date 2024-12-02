import './assets/css/style.css'
import { menu, rodapeInfos, rodapeFinal, blocoPlano, boxServico } from './functions/layouts'
import { abrirImagem } from './functions/functionsImagens'
import { Plano, QuestaoFreq } from './functions/interfaces'
import { planos, servicos, perguntasFrequentes } from './functions/informacoesCoworking'
import { slide } from './functions/functionsSlidershow'

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
    const blocoServicos = document.getElementById('box-servicos') as HTMLDivElement
    for (let index = 0; index < servicos.length; index++) {
        const element = boxServico(servicos[index])
        blocoServicos.appendChild(element)
    }

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
    const planosContainer = document.getElementById('planos-container') as HTMLDivElement
    const blocoFAQ = document.getElementById('faq-bloco') as HTMLDivElement

    for (let index = 0; index < planos.length; index++) {
        const plano: Plano = planos[index]
        const blocoMontado = blocoPlano(plano)

        // o bloco, após ser montado pela função blocoPlano, é inserido no container junto dos demais planos
        planosContainer.appendChild(blocoMontado)
    }

    for (let index = 0; index < perguntasFrequentes.length; index++) {
        const question: QuestaoFreq = perguntasFrequentes[index]
        const novaPergunta =
            `<details class="border-b border-neutral-200 pb-4 m-0">
                <summary class="cursor-pointer text-neutral-600 font-semibold">${question.pergunta}</summary>
                <p class="pt-2 text-sm">${question.resposta}</p>
            </details>`
        blocoFAQ.innerHTML += novaPergunta
    }
}