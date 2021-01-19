import { API_TMB_TOKEN } from "../token";

export function getFilmFromAPI(name, page) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_TMB_TOKEN}&language=fr&query=${name}&page=${page}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}


export function getFilmImage(name) {
    return `https://image.tmdb.org/t/p/w300${name}`;
}