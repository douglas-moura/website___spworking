import './assets/css/style.css';
import { menu, rodapeInfos, rodapeFinal, blocoPlano, boxServico } from './functions/layouts';
import { abrirImagem } from './functions/helpers';
import { planos, servicos, perguntasFrequentes } from './functions/infos';
import { slide } from './functions/helpers';
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
    const abrirMenu = document.getElementById('abrir-menu-mobile');
    const fecharMenu = document.getElementById('fechar-menu-mobile');
    const menuLateral = () => {
        document.getElementById('mobile-menu-lista').classList.toggle('-translate-x-full');
    };
    abrirMenu.addEventListener('click', () => menuLateral());
    fecharMenu.addEventListener('click', () => menuLateral());
});
if (window.location.pathname == '/') {
    const blocoServicos = document.getElementById('box-servicos');
    for (let index = 0; index < servicos.length; index++) {
        const element = boxServico(servicos[index]);
        blocoServicos.appendChild(element);
    }
    const btnPrev = document.getElementById('prev');
    btnPrev.addEventListener('click', () => slide(0));
    const btnNext = document.getElementById('next');
    btnNext.addEventListener('click', () => slide(1));
    const galeriaImagens = document.getElementsByClassName('img-galeria');
    for (let i = 0; i < galeriaImagens.length; i++) {
        galeriaImagens[i].addEventListener('click', () => abrirImagem(galeriaImagens[i].attributes[2].value, galeriaImagens[i].attributes[1].value));
    }
}
if (window.location.pathname == '/pages/planos.html') {
    const planosContainer = document.getElementById('planos-container');
    const blocoFAQ = document.getElementById('faq-bloco');
    for (let index = 0; index < planos.length; index++) {
        const plano = planos[index];
        const blocoMontado = blocoPlano(plano);
        planosContainer.appendChild(blocoMontado);
    }
    for (let index = 0; index < perguntasFrequentes.length; index++) {
        const question = perguntasFrequentes[index];
        const novaPergunta = `<details class="border-b border-neutral-200 pb-4 m-0">
                <summary class="cursor-pointer text-neutral-600 font-semibold">${question.pergunta}</summary>
                <p class="pt-2 text-sm">${question.resposta}</p>
            </details>`;
        blocoFAQ.innerHTML += novaPergunta;
    }
}
