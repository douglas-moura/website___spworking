// galeria
let closeBtn = document.getElementById('fechar-popup')
let popup = document.getElementById('img-popup')
let img = document.getElementById('popup-img')

function abrirImagem(url) {
    popup.style.display = 'flex'
    img.setAttribute("src", "./src/img/" + url)
}

function fecharImagem() {
    popup.style.display = 'none'
    img.removeAttribute("src")    
}
