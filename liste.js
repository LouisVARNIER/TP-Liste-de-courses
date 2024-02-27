const panier = [];

const form = document.getElementById("form");
const objet = document.getElementById("objet");
const liste = document.getElementById("liste");
const button = document.getElementById("button");

form.onsubmit = (event) => {
    event.preventDefault();


switch (button.value) {
    case 'pomme':
        panier.push("pomme");
        break;
    case 'banane':
        panier.push("banane");
        break;
    case 'ananas':
            panier.push("ananas");
            break;
    case 'mangue':
        panier.push("mangue");
        break;            
    default:
        break;
}

    liste.innerText = panier;

};