const logoSrc = 'img/5b43d2e7a72e4336b5bb.png'

export const menu = (): HTMLElement => {
    const sessao = document.createElement('section')
    sessao.classList.add('py-6')

    sessao.innerHTML +=
        `
            <nav class="container grid-cols-2">
                <img src="${logoSrc}" alt="Logotipo SPWorking" class="h-6 cursor-pointer">
                <ul class="inline-flex items-center h-full justify-between text-white">
                    <li class=""><a href="">Home</a></li>
                    <li class=""><a href="">Galeria</a></li>
                    <li class=""><a href="">Serviços</a></li>
                    <li class=""><a href="">Localização</a></li>
                    <li class=""><a href="">Contato</a></li>
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
            <div class="container px-28 text-center mb-8">
                <img src="./assets/img/logo-spworking-branco.png" alt="" class="mx-auto w-2/6">
                <h2 class="text-neutral-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem tenetur quaerat eum illo temporibus</h2>
            </div>
            <div class="container grid-cols-4 w-1/4">
                <a href="https://www.linkedin.com/company/spworkingcoworking/" target="_blank">
                    <iconify-icon icon="tabler:brand-linkedin" height="1.5rem" class="m-auto border-2 border-verde-500 text-verde-500 p-2 rounded-full cursor-pointer"></iconify-icon>
                </a>
                <a href="https://www.instagram.com/spworking/" target="_blank">
                    <iconify-icon icon="tabler:brand-instagram" height="1.5rem" class="m-auto border-2 border-verde-500 text-verde-500 p-2 rounded-full cursor-pointer"></iconify-icon>
                </a>
                <a href="https://www.whatsapp.com/?lang=pt_BR" target="_blank">
                    <iconify-icon icon="tabler:brand-whatsapp" height="1.5rem" class="m-auto border-2 border-verde-500 text-verde-500 p-2 rounded-full cursor-pointer"></iconify-icon>
                </a>
                <a href="mailto:contato@spworking.com.br" target="_blank">
                    <iconify-icon icon="tabler:mail" height="1.5rem" class="m-auto border-2 border-verde-500 text-verde-500 p-2 rounded-full cursor-pointer"></iconify-icon>
                </a>
            </div>
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
                <span class="justify-between">
                    <h5 class="text-neutral-200">SPWorking Butantã - 2024 | Todos os direitos reservados</h5>
                    <h5 class="text-neutral-200">criador por <a href="https://github.com/douglas-moura" target="_blank" class="text-roxo-100">Douglas Moura</a></h5>
                </span>
            </div>
        `
    return sessao
}