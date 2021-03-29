// show/hide navigation links
const burger= document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click',() => {
    navLinks.classList.toggle('active');
});

// modal form
const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click',() => {
    modal.classList.add('active');
});

closeBtn.addEventListener('click',() => {
    modal.classList.remove('active');
});

// dark/light mode
const themeBtn = document.querySelector('#theme-toggle');
const bodyEl = document.querySelector('body');

const darkMode = () => {
    bodyEl.classList.toggle('dark')
};

themeBtn.addEventListener('click', () => {
    setDarkMode = localStorage.getItem('dark');

    if(setDarkMode !== "on") {
        darkMode();
        setDarkMode = localStorage.setItem('dark', 'on');
    } else {
        darkMode();
        setDarkMode = localStorage.setItem('dark', null);
    }
});

let setDarkMode = localStorage.getItem('dark');

if(setDarkMode === 'on') {
    darkMode();
}

// movie trailer
const playBtn = document.querySelector('#play-btn');
const trailer = document.querySelector('.movie-trailer');
const closeTrailer = document.querySelector('.close-trailer');

playBtn.addEventListener('click',() => {
    trailer.classList.add('active');
});

closeTrailer.addEventListener('click',() => {
    trailer.classList.remove('active');
});


