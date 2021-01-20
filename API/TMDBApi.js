import { API_TMB_TOKEN } from "../token";

// Récupération de la liste de film
// En fonction de son nom et de la page
export function getFilmFromAPI(name, page) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_TMB_TOKEN}&language=fr&query=${name}&page=${page}`)
        .then(response => response.json())
        .catch(error => console.log(error));
}

// Récupération de l'image d'un film
export function getFilmImage(name) {
    return `https://image.tmdb.org/t/p/w300${name}`;
}

// Récupération du détail d'un film
export function getFilmDetailFromAPI(id) {
    return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TMB_TOKEN + '&language=fr')
        .then((response) => response.json())
        .catch((error) => console.error(error));
}