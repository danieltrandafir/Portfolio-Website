// display menu when clicked
const styleToggler = document.querySelector('.style-toggler');
const switcherMenu = document.querySelector('.style-switcher');

styleToggler.addEventListener('click', () => {
    switcherMenu.classList.toggle('open')
})

// hide switcher menu when scolling 
window.addEventListener('scroll', () =>{
    if(switcherMenu.classList.contains('open')) {
        switcherMenu.classList.remove('open')
    }
})

/* ===== Color Theme Switcher ===== */
const alternateStyle = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    alternateStyle.forEach((style)=> {
        if(color === style.getAttribute('title')){
            style.removeAttribute('disabled')
        } else {
            style.setAttribute('disabled', 'true')
        }
    })
}

// Set Default Light Mode on page load
const dayNight = document.querySelector('.day-night')

window.addEventListener('load', ()=> {
    if(document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun')
    } else {
        dayNight.querySelector('i').classList.add('fa-moon')
    }
})

// Change between Dark and Light mode

dayNight.addEventListener('click', ()=> {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})