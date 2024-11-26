import './assets/css/style.css'
import { slide } from './assets/functions/sliderShow'

const btnPrev = document.getElementById('prev') as HTMLElement
btnPrev.addEventListener('click', () => slide(0))

const btnNext = document.getElementById('next') as HTMLElement
btnNext.addEventListener('click', () => slide(1))
