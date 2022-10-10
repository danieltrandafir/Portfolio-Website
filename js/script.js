/* =============== return to top of page =================*/
const scrollButton = document.querySelector('.scroll-button');

// show button when scrolling down


window.addEventListener('scroll', ()=> {
    if(document.documentElement.scrollTop > 20) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none'
    }
})

// when button is clicked return to top of page

scrollButton.addEventListener('click', ()=> {
    document.documentElement.scrollTop = 0;
})