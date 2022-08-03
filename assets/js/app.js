// slider 
const slideItems = document.querySelectorAll('.slider-item')
const slides = document.querySelector('.slides')
const moveL = document.querySelector('.move-left')
const moveR = document.querySelector('.move-right')

let sizeSlide = slideItems.length

var idx = 0
moveL.onclick = () => {
    if(idx > 0){
        idx--
        slides.style.marginLeft = -100 * idx + "%"
    }   
    else{
        slides.style.marginLeft = -100 * (sizeSlide - 1) + "%"
        idx = sizeSlide -1
    }
}

moveR.onclick = () => {
    if(idx < sizeSlide -1){
        idx++
        slides.style.marginLeft = -100 * idx + "%"
    }
    else {
        idx = 0
        slides.style.marginLeft = -100 * idx + "%"
    }

}
