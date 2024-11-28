import './assets/css/style.css';
import { menu, rodapeInfos, rodapeFinal } from './functions/_layouts';
import { abrirImagem } from './functions/imgFunctions';
import { slide } from './functions/sliderShow';
console.log(window.location.pathname);
window.addEventListener('DOMContentLoaded', () => {
    const headerPagina = document.getElementById('header-pagina');
    const footerPagina = document.getElementById('footer-pagina');
    const menuContent = menu();
    headerPagina.appendChild(menuContent);
    const rodapeInfosContent = rodapeInfos();
    footerPagina.appendChild(rodapeInfosContent);
    const rodapFimContent = rodapeFinal();
    footerPagina.appendChild(rodapFimContent);
});
const btnPrev = document.getElementById('prev');
btnPrev.addEventListener('click', () => slide(0));
const btnNext = document.getElementById('next');
btnNext.addEventListener('click', () => slide(1));
const galeriaImagens = document.getElementsByClassName('img-galeria');
for (let i = 0; i < galeriaImagens.length; i++) {
    galeriaImagens[i].addEventListener('click', () => abrirImagem(galeriaImagens[i].attributes[2].value, galeriaImagens[i].attributes[1].value));
}
