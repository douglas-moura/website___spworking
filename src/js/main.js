// slide banner
let slideIndex = 1
let slides = document.getElementsByClassName("sld")

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("sld")

    //retorna para primeiro slide
    if (n > slides.length) {slideIndex = 1}

    //retorna para ultimo slide
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    
    slides[slideIndex-1].style.display = 'flex';  
}

// menu mobile
function abrirMenu() {
    let menu = document.getElementById('menu-mobile')
    let icone = document.getElementById('topbar-icone')

    if(menu.style.marginLeft !== '0px') {
        menu.style.marginLeft = '0px'
        icone.setAttribute('name', 'close')
    } else {
        menu.style.marginLeft = '-100%'
        icone.setAttribute('name', 'menu')
    }
}
