document.addEventListener("DOMContentLoaded", () => {
    const filmsListElement = document.getElementById("films-list");
    const filmDetailsElement = document.getElementById("film-details");
        // Fonction pour afficher la liste des films
        function afficherListeFilms() {
        fetch("https://swapi.dev/api/films/")
            .then((response) => response.json())
            .then((data) => {
            data.results.forEach((film) => {
                const li = document.createElement("li");
                li.textContent = film.title;
                li.style.cursor = "pointer";
                li.addEventListener("click", () => afficherDetailsFilm(film.url));
                filmsListElement.appendChild(li);
                });
            })
            .catch((error) => console.error("Erreur lors de la récupération des films :", error));
        }

        // Fonction pour afficher les détails d'un film sélectionné
        function afficherDetailsFilm(url) {
        fetch(url)
            .then((response) => response.json())
            .then((film) => {
            filmDetailsElement.innerHTML = `
            <h2>${film.title}</h2>
            <p><strong>Date de sortie :</strong> ${film.release_date}</p>
            <p><strong>Réalisateur :</strong> ${film.director}</p>
            <p><strong>Producteurs :</strong> ${film.producer}</p>
            <p><strong>Résumé :</strong> ${film.opening_crawl}</p>
            `;
            })
        .catch((error) => console.error("Erreur lors de la récupération des détails du film :", error));
        }

    afficherListeFilms();
});

document.addEventListener("DOMContentLoaded", () => {
    const planetsListElement = document.getElementById("planets-list");
    const planetsDetailsElement = document.getElementById("planets-details");
        // Fonction pour afficher la liste des planètes
        function afficherListePlanets() {
        fetch("https://swapi.dev/api/planets/")
            .then((response) => response.json())
            .then((data) => {
            data.results.forEach((planet) => {
                const li = document.createElement("li");
                li.textContent = planet.name;
                li.style.cursor = "pointer";
                li.addEventListener("click", () => afficherDetailsPlanets(planet.url));
                planetsListElement.appendChild(li);
                });
            })
            .catch((error) => console.error("Erreur lors de la récupération des planètes :", error));
        }

        // Fonction pour afficher les détails d'une planète sélectionnée
        function afficherDetailsPlanets(url) {
            fetch(url)
                .then((response) => response.json())
                .then((planet) => {
                planetsDetailsElement.innerHTML = `
                <h2>${planet.name}</h2>
                <p><strong>Période de rotation :</strong> ${planet.rotation_period}</p>
                <p><strong>Période d'orbite :</strong> ${planet.orbital_period}</p>
                <p><strong>Diamètre :</strong> ${planet.diameter}</p>
                <p><strong>Climat :</strong> ${planet.climate}</p>
                <p><strong>Gravité :</strong> ${planet.gravity}</p>                
                <p><strong>Terrain :</strong> ${planet.terrain}</p>               
                <p><strong>Surface d'eau :</strong> ${planet.surface_water}</p>                
                <p><strong>Population :</strong> ${planet.population}</p>                
                `;
                })
            .catch((error) => console.error("Erreur lors de la récupération des détails du film :", error));
            }
    
        afficherListePlanets();

});