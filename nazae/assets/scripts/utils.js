export function setMovies(movieData) {
    const movies = movieData;
    const movieList = document.getElementById("now-playing");
    movieList.innerHTML = "";
    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        if (!movie.poster_path)
            return;
        movieElement.addEventListener('click', () => {showModal(movie)});
        movieElement.innerHTML = `
                    <img class="poster" src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" alt="${movie.title}">
                    <p class="description">${movie.title}</p>
            `;
        movieList.appendChild(movieElement);
    });
}

function showModal(info){
    document.getElementById("movieModal").show();
    document.getElementById('title').innerText = info.title;
    document.getElementById('desc').innerText = info.overview;
    document.getElementById('date').innerText = info.release_date;
    document.getElementById('rating').innerText =`User Rating: ${info.vote_average}/10`;
    document.getElementById('poster').src = "https://image.tmdb.org/t/p/w1280" + info.poster_path;
}
