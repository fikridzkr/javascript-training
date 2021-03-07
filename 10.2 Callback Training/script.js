$(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=7e8c7e39&s=" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search;
      let cards = "";
      movies.forEach((m) => {
        cards += showCards(m);
      });
      $(".movie-container").html(cards);

      // tombol detail diklik
      $(".movie-button").on("click", function () {
        console.log($(this).data("imdbid"));

        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=7e8c7e39&i=" +
            $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = showDetail(m);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

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
