document.addEventListener("DOMContentLoaded", function () {
    fetch("https://swapi.dev/api/films/1/")
        .then((response) => response.json())
        .then((film) => {
            document.getElementById("title").textContent = film.title;
            document.getElementById("opening-crawl").textContent = film.opening_crawl;
            document.getElementById("release-date").textContent = film.release_date;
            document.getElementById("director").textContent = film.director;
            document.getElementById("producers").textContent = film.producer;
    })
        .catch((error) =>
        console.error("Erreur lors de la récupération des détails du film:",error)
        );
});