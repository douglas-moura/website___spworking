import './assets/css/style.css';
let slideIndex = 0;
showSlide(slideIndex);
const changeSlide = (n) => {
    showSlide(slideIndex += n);
};
function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length)
        slideIndex = 0;
    if (n < 0)
        slideIndex = slides.length - 1;
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    if (n != slides.length - 1)
        slides[slideIndex + 1].style.display = "block";
}
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
btnPrev.addEventListener('click', () => changeSlide(-1));
btnNext.addEventListener('click', () => changeSlide(1));
