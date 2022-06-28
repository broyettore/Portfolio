/*============ sticky navbar ===============*/


const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

/*============ responsive navbar ================*/

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');  

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/*============= dark / light theme ===============*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-moonset'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-sunset' : 'uil-moonset'


if (selectedTheme) {
    
    document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-sunset' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
    
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




       