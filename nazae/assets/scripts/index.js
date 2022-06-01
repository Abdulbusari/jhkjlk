import {movieData} from "./database.js";
import {setMovies} from "./utils.js";

setMovies(movieData);

document.getElementById('close-help').addEventListener('click', () => {
    document.getElementById("movieModal").close();
});