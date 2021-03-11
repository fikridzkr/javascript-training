const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  const inputKeyword = document.querySelector(".input-keyword");
  const movies = await getMovies(inputKeyword.value);
  updateUI(movies);
});

// eventBinding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("movie-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=7e8c7e39&i=" + imdbid)
    .then((res) => res.json())
    .then((m) => m);
}

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=7e8c7e39&s=" + keyword)
    .then((res) => res.json())
    .then((res) => res.Search);
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((m) => (cards += showCards(m)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

function showCards(m) {
  return `<div class="col-md-4  my-5">
      <div class="card">
        <img src="${m.Poster}" class="card-img-top" alt=${m.Title} />
        <div class="card-body">
          <h5 class="card-title">${m.Title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
          <a href="#" class="btn btn-primary movie-button" data-bs-toggle="modal" data-bs-target="#movieModal" data-imdbid="${m.imdbID}">Show Details</a>
        </div>
      </div>
    </div>`;
}

function showDetail(m) {
  return `<div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <img src=${m.Poster} alt="" class="img-fluid" />
        </div>
        <div class="col">
          <ul class="list-group">
            <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
            <li class="list-group-item"><strong>Director: </strong> ${m.Director}</li>
            <li class="list-group-item"><strong>Actors: </strong> ${m.Actors}</li>
            <li class="list-group-item"><strong>Writer:</strong> ${m.Writer}</li>
            <li class="list-group-item"><strong>Plot:</strong> ${m.Plot}</li>
          </ul>
        </div>
      </div>
    </div>`;
}

function updateUIDetail(m) {
  const movieDetail = showDetail(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}
