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
    const form = document.querySelector('.form');

    modal.classList.remove('active');
    form.reset();
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
const movieTrailer = document.querySelector('.movie-trailer');
const iframe = document.querySelector('iframe');
const closeTrailer = document.querySelector('.close-trailer');

const player = new Vimeo.Player(iframe);

playBtn.addEventListener('click',() => {
    movieTrailer.classList.add('active');
    player.play();
});

closeTrailer.addEventListener('click',() => {
    movieTrailer.classList.remove('active');
    player.pause();
});

