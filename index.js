fetch('http://localhost:3000/films')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    const movies = document.getElementById("movie-list");
    data.forEach((film) => {
      const movieList = document.createElement("li");
      movieList.textContent = film.title;
      movieList.addEventListener("click", () => {
        fetchMovieDetails(film.id);
      });
      movies.appendChild(movieList);
    });
  });

function fetchMovieDetails(movieId) {
  fetch(`http://localhost:3000/films/${movieId}`)
    .then(res => res.json())
    .then(movie => {
      const { title, poster, runtime, capacity, showtime, tickets_sold, description } = movie;
      const availabeTickets = capacity - tickets_sold;

      const movieDetails = `<div class="myDiv">
          <h1 id="header1">${title}</h1>
          <img id="poster1" src="${poster}" alt="${title}">
          <p id="runtime1">Runtime: ${runtime}</p>
          <p id="showtime1">Showtime: ${showtime}</p>
          <p id="available1">Available Tickets: ${availabeTickets}</p>
          <p id="description1">Description: ${description}</p>
          <button id="ticketButton">Buy Tickets</button>
        </div>`;

      const movieContainer = document.getElementById("movieDetails");
      movieContainer.innerHTML = movieDetails;
    });
}

const ticketButton = document.getElementById("ticketButton");
ticketButton.addEventListener("click", buyTicket);

function buyTicket() {
  alert("Tickets purchased successfully!");
}
