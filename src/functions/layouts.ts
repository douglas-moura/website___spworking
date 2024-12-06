import { Plano, Servico } from "./interfaces"

const logoSrc = './img/5b43d2e7a72e4336b5bb.png'

export const menu = (): HTMLElement => {
    const sessao = document.createElement('section')
    sessao.classList.add('py-6')

    sessao.innerHTML +=
        `
            <nav class="container grid-cols-2 lg:grid-cols-3">
                <img src="${logoSrc}" alt="Logotipo SPWorking" class="h-6 cursor-pointer my-auto">

                <!-- menu mobile -->
                <span class="justify-end lg:hidden">
                    <iconify-icon icon="tabler:menu-2" height="1rem" class="text-neutral-200 p-2" id="abrir-menu-mobile"></iconify-icon>
                    <ul id="mobile-menu-lista" class="absolute top-0 left-0 bg-white h-dvh text-neutral-800 p-8 w-full -translate-x-full transition-all">
                        <iconify-icon icon="tabler:x" height="2rem" class="mb-8 w-full text-verde-700" id="fechar-menu-mobile"></iconify-icon>
                        <li class="mb-6"><a href="/#banner">Home</a></li>
                        <li class="mb-6"><a href="/#servicos">Serviços</a></li>
                        <li class="mb-6"><a href="/#galeria">Galeria</a></li>
                        <li class="mb-6"><a href="/#localizacao">Localização</a></li>
                        <li class="mb-6"><a href="pages/planos.html">Planos</a></li>
                        <li class="">
                            <span class="text-sm items-center">
                                <iconify-icon icon="tabler:brand-whatsapp" height="1rem" class="mr-2 bg-[#25D366] rounded-full p-2"></iconify-icon>
                                11 98765-4321
                            </span>
                        </li>
                    </ul>
                </span>

                <!-- menu desktop -->
                <ul class="items-center h-full justify-between text-white col-span-2 hidden lg:inline-flex">
                    <li class="text-sm xl:text-base 2xl:text-sm"><a href="/#banner">Home</a></li>
                    <li class="text-sm xl:text-base 2xl:text-sm"><a href="/#servicos">Serviços</a></li>
                    <li class="text-sm xl:text-base 2xl:text-sm"><a href="/#galeria">Galeria</a></li>
                    <li class="text-sm xl:text-base 2xl:text-sm"><a href="/#localizacao">Localização</a></li>
                    <li class="text-sm xl:text-base 2xl:text-sm"><a href="pages/planos.html">Planos</a></li>
                    <li class="text-sm xl:text-base 2xl:text-sm">
                        <span class="ml-4 items-center text-sm xl:text-base 2xl:text-sm">
                            <iconify-icon icon="tabler:brand-whatsapp" height="1rem" class="mr-2 bg-[#25D366] rounded-full p-2"></iconify-icon>
                            11 98765-4321
                        </span>
                    </li>
                </ul>
            </nav>
        `
    return sessao
}

export const rodapeInfos = (): HTMLElement => {
    const sessao = document.createElement('section')
    sessao.classList.add('bg-neutral-800')

    sessao.innerHTML += 
        `
            <div class="container text-center mb-8 lg:px-28">
                <img src="${logoSrc}" alt="" class="mx-auto w-3/6 lg:w-2/6">
                <h2 class="text-neutral-400 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem tenetur quaerat eum illo temporibus</h2>
            </div>
            <div class="container grid-cols-4 gap-0 w-3/4 lg:w-1/4">
                <a href="https://www.linkedin.com/company/spworkingcoworking/" target="_blank" class="flex">
                    <iconify-icon icon="tabler:brand-linkedin" height="1.5rem" class="m-auto border-2 border-verde-500 text-verde-500 p-2 rounded-full cursor-pointer"></iconify-icon>
                </a>
                <a href="https://www.instagram.com/spworking/" target="_blank" class="flex">
                    <iconify-icon icon="tabler:brand-instagram" height="1.5rem" class="m-auto border-2 border-verde-500 text-verde-500 p-2 rounded-full cursor-pointer"></iconify-icon>
                </a>
                <a href="https://www.whatsapp.com/?lang=pt_BR" target="_blank" class="flex">
                    <iconify-icon icon="tabler:brand-whatsapp" height="1.5rem" class="m-auto border-2 border-verde-500 text-verde-500 p-2 rounded-full cursor-pointer"></iconify-icon>
                </a>
                <a href="mailto:contato@spworking.com.br" target="_blank" class="flex">
                    <iconify-icon icon="tabler:mail" height="1.5rem" class="m-auto border-2 border-verde-500 text-verde-500 p-2 rounded-full cursor-pointer"></iconify-icon>
                </a>
            </div>
            <script src="../index.ts"></script>
        `
    return sessao
}

export const rodapeFinal = (): HTMLElement => {
    const sessao = document.createElement('section')
    sessao.classList.add('bg-neutral-900')
    sessao.classList.add('py-8')

    sessao.innerHTML += 
        `
            <div class="container">
                <span class="justify-between flex-col lg:flex-row">
                    <h5 class="text-neutral-200" class="mb-4 lg:m-0">SPWorking Butantã - 2024 | Todos os direitos reservados</h5>
                    <h5 class="text-neutral-200">criador por <a href="https://github.com/douglas-moura" target="_blank" class="text-roxo-100">Douglas Moura</a></h5>
                </span>
            </div>
        `
    return sessao
}

export const blocoPlano = (plano: Plano): HTMLElement => {
    const planoBloco: HTMLDivElement = document.createElement('div')    // tag DIV do bloco do plano atual
    const planoInformacoes: HTMLSpanElement = document.createElement('span')    // tag SPAN que recebe o nome do plano e os beneficios
    const listaBeneficios: HTMLUListElement = document.createElement('ul')  // tag UL onde são listados os beneficios de cada plano
    const planoPreco: HTMLSpanElement = document.createElement('span')  // tag SPAN que recebe o valor do plano e onde é inserido o botão de Contratar

    // Adicionando as classes Tailwind necessarias
    planoBloco.classList.add('bloco-plano')
    planoInformacoes.classList.add('flex-col')
    planoPreco.classList.add('flex-col')
    planoPreco.classList.add('sessao-preco')
    if (plano.promo) planoBloco.classList.add('plano-especial')     // classe de plano com estilo especial

    // primeiro o nome do plano é inserido de forma simples com innerHTML
    planoInformacoes.innerHTML = `<h3 class="mb-6">${plano.servico}</h3>`
    // os beneficios são processados com um FOR que os insere na tag UL
    for (let i = 0; i < plano.beneficios.length; i++) {
        listaBeneficios.innerHTML += 
        `
            <li class="flex items-center mb-2">
                <iconify-icon height="1rem" class="mr-3 text-roxo-500" icon="tabler:check"></iconify-icon>
                <p class="m-0 text-xs">${plano.beneficios[i]}</p>
            </li>
        `
    }
    
    // o valor do plano e o botão são criados e inseridos de forma simples com o innerHTML
    planoPreco.innerHTML =
        `
            <span class="items-start mb-4">
                <p class="m-0 text-neutral-600 text-xs leading-3">R$</p>
                <p class="m-0 text-neutral-800 text-3xl leading-6 font-extrabold">${plano?.valor.toLocaleString('pt-BR') || ''}</p>
                <p class="m-0 text-neutral-600 text-xs leading-3">,00</p>
                <p class="m-0 text-neutral-400 ml-1 text-sm" id="periodo-plano">/${plano?.periodo || ''}</p>
            </span>
            <button class="btn btn-verde-2 w-full font-extrabold">Contratar</button>
        `
        
    // montagem do conteudo do bloco
    planoInformacoes.appendChild(listaBeneficios)
    planoBloco.appendChild(planoInformacoes)
    planoBloco.appendChild(planoPreco)

    return planoBloco
}

export const boxServico = (servico: Servico): HTMLSpanElement => {
    const bloco = document.createElement('span')
    bloco.classList.add('bloco-servico')

    const icone = document.createElement('iconify-icon')
    icone.setAttribute('icon', servico.icon)
    icone.setAttribute('height', '2.5rem')

    const texto = document.createElement('p')
    texto.innerText = servico.descr

    bloco.appendChild(icone)
    bloco.appendChild(texto)

    return bloco
}