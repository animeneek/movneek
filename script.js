const API_KEY = atob("ZTNhZmQ0Yzg5ZTMzNTFlZGFkOWU4NzVmZjdhMDFmMGM="); // Decoded TMDB key
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

async function getMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await response.json();
  showMovies(data.results);
}

function showMovies(movies) {
  const movieGrid = document.getElementById('movies');
  movieGrid.innerHTML = '';

  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie');
    movieCard.innerHTML = `
      <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    `;
    movieGrid.appendChild(movieCard);
  });
}

getMovies();
