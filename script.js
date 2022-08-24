let totalSlider = document.querySelectorAll('.slide--item').length
let slideAtual = 0

document.querySelector('.slide--width').style.width = `calc(100vw * ${totalSlider})`

document.querySelector('.slide--controls').style.height = `${document.querySelector('.slide').clientHeight}px`

function volta(){
    slideAtual--
    if(slideAtual < 0){
        slideAtual = totalSlider - 1
    }
    updateMargin()

}

function proximo(){
    slideAtual++
    if(slideAtual > (totalSlider-1)){
        slideAtual = 0;
    }
    updateMargin()
}

function updateMargin(){
    let slideWidth = document.querySelector('.slide--item').clientWidth
    let newMargin = (slideAtual * slideWidth)


    document.querySelector('.slide--width').style.marginLeft = `-${newMargin}px`
}

setInterval(proximo,5000)

