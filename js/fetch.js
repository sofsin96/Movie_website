// fetch all movies
const marvelMovies = document.querySelector('.marvel-article');
const dcMovies = document.querySelector('.dc-article');

window.addEventListener('DOMContentLoaded', () => {
    loadJSON();
});

function loadJSON() {
    fetch('data/marvel.json')
        .then((resp) => resp.json())
        .then(data => {
            let html = '';
            data.forEach(movie => {
                html += `
                    <figure class="movie-card">
                        <a href="${movie.link}"><img src="${movie.imgSrc}" alt="movie image"></a>
                        <figcaption class="movie-title">
                            <h3>${movie.title}</h3>
                        </figcaption>
                    </figure>
                `;
            });
            marvelMovies.innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        });

    fetch('data/dc.json')
        .then((resp) => resp.json())
        .then(data => {
            let html = '';
            data.forEach(movie => {
                html += `
                    <figure class="movie-card">
                        <a href="#"><img src="${movie.imgSrc}" alt="movie image"></a>
                        <figcaption class="movie-title">
                            <h3>${movie.title}</h3>
                        </figcaption>
                    </figure>
                `;
            });
            dcMovies.innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        });
}

// fetch single movie
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('movieData');
const url = 'data/blackpanther.json';

    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let todos = data.movieData;
            return todos.map(function(todo) {
                let li = createNode('li');
                let  h2 =createNode('h2');
                let span = createNode('span');
                let p = createNode('p');
                let p1 = createNode('p');
                let span1 = createNode('span');
                let p2 = createNode('p');
                let span2 = createNode('span');
                let p3 = createNode('p');
                let span3 = createNode('span');
                h2.innerHTML = todo.title;
                span.innerHTML = `${todo.duration} | ${todo.genres[0]}, ${todo.genres[1]}, ${todo.genres[2]} | ${todo.year}`;
                p.innerHTML = todo.description;
                p1.innerHTML = 'Director: ';
                span1.innerHTML = `${todo.director}`;
                p2.innerHTML = 'Stars: ';
                span2.innerHTML = `${todo.stars[0]}, ${todo.stars[1]}, ${todo.stars[2]}`;
                p3.innerHTML = 'Language: ';
                span3.innerHTML = `${todo.language}`;
                append(li,h2);
                append(li, span);
                append(li, p);
                append(p1, span1);
                append(p2, span2);
                append(p3, span3);
                append(li, p1);
                append(li, p2);
                append(li, p3);
                append(ul, li);
            })
        })
        .catch(function(error) {
            console.log(error);
        });
