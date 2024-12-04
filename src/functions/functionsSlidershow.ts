export const slide = (n: number): void => {
    const slider = document.getElementById('slider') as HTMLSpanElement
    const slides = document.getElementsByClassName("slide") as HTMLCollection    
    const marginBase: number = slides[0].getBoundingClientRect().width
    const maxxMargin: number = (slides.length - 1) * marginBase
    const marginLeftAtual: number = parseInt(slider.style.marginLeft.slice(0, -2))
    const marginRightAtual: number = parseInt(slider.style.marginRight.slice(0, -2))

    if (n == 1) {
        const novoMarginL: number = marginLeftAtual - marginBase
        const novoMarginR: number = marginRightAtual + marginBase

        if (marginRightAtual < maxxMargin) {
            slider.style.marginLeft = novoMarginL.toString() + 'px'
            slider.style.marginRight = novoMarginR.toString() + 'px'
        } else {
            slider.style.marginLeft = '0px'
            slider.style.marginRight = '0px'
        }
    } else {
        const novoMarginL: number = marginLeftAtual + marginBase
        const novoMarginR: number = marginRightAtual - marginBase
        
        if (marginLeftAtual < 0) {
            slider.style.marginLeft = novoMarginL.toString() + 'px'
            slider.style.marginRight = novoMarginR.toString() + 'px'
        }
    }    
}