const visualizadorContainer = document.getElementById('visualizador-img-bloco') as HTMLSpanElement

export const abrirImagem = (source: string, title: string): void => {
    const btnFechar = document.getElementById('btn-fechar-visualizador') as HTMLElement
    const imgSelecionada = document.getElementById('img-visualizador') as HTMLImageElement
    const titulo = document.getElementById('img-title') as HTMLTitleElement

    visualizadorContainer.classList.remove('-translate-y-full')
    imgSelecionada.attributes[2].value = source
    titulo.innerText = title

    btnFechar.addEventListener('click', () => fecharVisualizador())
}

const fecharVisualizador = () => {
    visualizadorContainer.classList.add('-translate-y-full')
}