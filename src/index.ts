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

// FUNCIONALIDADES DA PÁGINA PLANOS
if(window.location.pathname == '/pages/planos.html') {
    const servicos = [
        { id: 0, servico: "Mesa Individual", diaria: 49, mensal: 490, anual: 5880, promo: null },
        { id: 1, servico: "Sala de Reunião", diaria: 249, mensal: null, anual: null, promo: true },
        { id: 2, servico: "Sala 6 Lugares", diaria: null, mensal: 1599, anual: 19188, promo: null },
        { id: 3, servico: "Sala 12 Lugares", diaria: null, mensal: 3199, anual: 38388, promo: null }
    ]

    const planosContainer = document.getElementById('planos-container') as HTMLDivElement

    for (let index = 0; index < servicos.length; index++) {
        const plano = servicos[index]

        const planoBloco: HTMLDivElement = document.createElement('div')    // tag DIV do bloco do plano atual
        const planoInformacoes: HTMLSpanElement = document.createElement('span')    // tag SPAN que recebe o nome do plano e os beneficios
        const listaBeneficios: HTMLUListElement = document.createElement('ul')  // tag UL onde são listados os beneficios de cada plano
        const planoPreco: HTMLSpanElement = document.createElement('span')  // tag SPAN que recebe o valor do plano e onde é inserido o botão de Contratar

        // Adicionando as classes Tailwind necessarias
        planoBloco.classList.add('bloco-plano')
        planoInformacoes.classList.add('flex-col')
        planoPreco.classList.add('flex-col')
        if (plano.promo) planoBloco.classList.add('plano-especial')     // classe de plano com estilo especial

        // primeiro o nome do plano é inserido de forma simples com innerHTML
        planoInformacoes.innerHTML = `<h3 class="mb-6">${plano.servico}</h3>`
        // os beneficios são processados com um FOR que os insere na tag UL
        for (let i = 0; i < 6; i++) {
            listaBeneficios.innerHTML += 
            `<li class="flex items-center mb-2">
                <iconify-icon height="1rem" class="mr-3 text-roxo-500" icon="tabler:check"></iconify-icon>
                <p class="m-0 text-xs">Wi-Fi de alta velocidade</p>
            </li>`
        }
        
        // o valor do plano e o botão são criados e inseridos de forma simples com o innerHTML
        planoPreco.innerHTML =
            `<span class="items-start mb-4">
                <p class="m-0 text-neutral-600 text-xs leading-3">R$</p>
                <p class="m-0 text-neutral-800 text-3xl leading-6 font-extrabold">${plano?.diaria || plano.mensal}</p>
                <p class="m-0 text-neutral-600 text-xs leading-3">,00</p>
                <p class="m-0 text-neutral-400 ml-1 text-sm">/dia</p>
            </span>
            <button class="btn btn-verde-2 w-full font-extrabold">Contratar</button>`
            
        // montagem do conteudo do bloco
        planoInformacoes.appendChild(listaBeneficios)
        planoBloco.appendChild(planoInformacoes)
        planoBloco.appendChild(planoPreco) 

        // o bloco, enfim montado, é inserido no container junto dos demais planos
        planosContainer.appendChild(planoBloco)
    }
}