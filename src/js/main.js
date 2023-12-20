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
