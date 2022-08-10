// slider 
const slideItems = document.querySelectorAll('.slider-item')
const slides = document.querySelector('.slides')
const moveL = document.querySelector('.move-left')
const moveR = document.querySelector('.move-right')

let sizeSlide = slideItems.length

var idx = 0
moveL.onclick = () => {
    if (idx > 0) {
        idx--
        slides.style.marginLeft = -100 * idx + "%"
    }
    else {
        slides.style.marginLeft = -100 * (sizeSlide - 1) + "%"
        idx = sizeSlide - 1
    }
}

moveR.onclick = () => {
    if (idx < sizeSlide - 1) {
        idx++
        slides.style.marginLeft = -100 * idx + "%"
    }
    else {
        idx = 0
        slides.style.marginLeft = -100 * idx + "%"
    }

}

// Scroll
const milisToHour = 3600000
const milistoMinute = 60000
var d = new Date()

const header = document.querySelector('.header')
function checkScroll() {
    if (window.pageYOffset > 50) {
        if ((16 - d.getHours()) <= 0) {
            header.setAttribute("style", "background-color: #bbe1e4;")
        } else {
            header.setAttribute("style", "background-color: #ffe6df;")

        }
    } else if (window.pageYOffset === 0) {
        header.removeAttribute("style")
    }
}

window.addEventListener("scroll", checkScroll)

// Merge Element

const layerProject = document.querySelector(".layer")
const contentProject = document.querySelector(".content-project")
const itemsProject = document.querySelectorAll(".item")
layerProject.addEventListener("click", function () {
    contentProject.setAttribute("style", "display: block;")
})

contentProject.addEventListener("click", function () {
    contentProject.removeAttribute("style")
})

for (const item of itemsProject) {
    item.addEventListener("click", function (e) {
        e.stopPropagation()
    })
}

// Menu navigation 
const navBtn = document.querySelector(".nav-btn")
const nav = document.querySelector(".nav")


navBtn.addEventListener("click", function () {
    if (nav.classList.contains("active")) {
        nav.classList.remove("active")
    } else {
        nav.classList.add("active")
    }
})

// Change style 
const slider = document.querySelector(".slider")

function changeBackground() {
    if ((16 - d.getHours()) > 0) {
        document.querySelector('.wrapper').removeAttribute("class")
    } else {
        document.querySelector('.wrapper').setAttribute("class", "night")
    }
}

window.addEventListener("load", function () {
    if ((16 - d.getHours()) <= 0) {
        setTimeout(changeBackground, 0)
        slider.classList.add("change-day")
    } else {
        clearTimeout(changeBackground)
        slider.classList.remove("change-day")
    }

})
