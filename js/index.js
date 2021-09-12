const root = document.querySelector(':root')
const intro = document.querySelector('.intro')
const item = document.querySelector('.portfolio-item')
const nameDiv = document.querySelector('.name')
const footer = document.querySelector('.footer')
const about = document.querySelector('.about-me')
const work = document.querySelector('.my-work')
const navToggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__link')
const header = document.querySelector('.header')
const headerDiv = document.querySelector('.header-div')
const sun = document.getElementById("sun")
const rays = document.querySelectorAll(".ray")
const ball = document.querySelector('.ball')
let dark

localDark = localStorage.getItem('darkMode')
console.log(localDark)
dark = (localDark === 'true')

function darkModeOn() {
    sun.classList.add('set-sun')
    root.classList.add('dark')
    document.body.classList.add('dark')
    nav.classList.add('dark')
    footer.classList.add('dark')
    intro ? intro.classList.add('dark') : ''
    about ? about.classList.add('dark') : ''
    item ? item.classList.add('dark') : ''
    nameDiv ? nameDiv.classList.add('dark') : ''
    work ? work.classList.add('dark') : ''
    for (let i=0; i < rays.length; i++) {
        if (i <= 1) {
          rays[i].classList.add('lower')
          if (i == 0) {
            rays[i].classList.add('keep-left')
          }
        } else if (i < 5) {
          rays[i].classList.add('lengthen')
          if (i == 2) {
            rays[i].classList.add('move-left')
          } else if (i == 3) {
            rays[i].classList.add('rotate-cw')
          } else if (i == 4) {
            rays[i].classList.add('rotate-ccw')
          }
        } else {
          rays[i].classList.add('set-ray')
        }
    }
    ball.classList.add('set-ball')
}

function darkModeOff() {
    sun.classList.remove('set-sun')
    root.classList.remove('dark')
    document.body.classList.remove('dark')
    nav.classList.remove('dark')
    footer.classList.remove('dark')
    intro ? intro.classList.remove('dark') : ''
    about ? about.classList.remove('dark') : ''
    item ? item.classList.remove('dark') : ''
    nameDiv ? nameDiv.classList.remove('dark') : ''
    work ? work.classList.remove('dark') : ''
    for (let i=0; i < rays.length; i++) {
        if (i <= 1) {
            rays[i].classList.remove('lower')
            if (i == 0) {
            rays[i].classList.remove('keep-left')
            }
        } else if (i < 5) {
            rays[i].classList.remove('lengthen')
            if (i == 2) {
            rays[i].classList.remove('move-left')
            } else if (i == 3) {
            rays[i].classList.remove('rotate-cw')
            } else if (i == 4) {
            rays[i].classList.remove('rotate-ccw')
            }
        } else {
            rays[i].classList.remove('set-ray')
        }
    }
    ball.classList.remove('set-ball')
}

function setDark(dark) {
    localStorage.setItem('darkMode', JSON.stringify(dark))
    if (dark) {
        darkModeOn()
    } else {
        darkModeOff()
    }
}

// initial color mode
setDark(dark)

// sun/set animation
sun.addEventListener('click', () => {
    console.log(dark)
    dark = !dark
    setDark(dark)
    console.log(dark)
})

// Navigation toggle
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})

// Changes opacity of header as user scrolls down the page 
document.addEventListener('scroll', () => {
    if (dark && window.scrollY < 355) {
        const opacity = window.scrollY / 355
        header.style.background = `rgba(27, 15, 14, ${opacity})`
    } else if (window.scrollY < 355) {
        const opacity = window.scrollY / 355
        header.style.background = `rgba(255, 255, 255, ${opacity})`
    } else  if (dark) {
        header.style.background = "var(--clr-secondary-dark)"
    }
    else {
        header.style.background = "var(--clr-light)"
    }
})

// return to top of screen if header clicked
headerDiv.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})



