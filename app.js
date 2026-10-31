
import { home } from "./pages/home.js";
import { competence } from "./pages/competence.js";
import { porfolio } from "./pages/porfolio.js";
import { contact } from "./pages/contact.js";

// Association entre les routes et les fonctions
const routes = {
    "#home": home,
    "#competence": competence,
    "#porfolio": porfolio,
    "#contact": contact
};

// Fonction de navigation
function afficherPage() {

    const page = location.hash || "#home";

    const afficher = routes[page] || home;

    afficher();

    // Récupérer tous les liens de navigation
    const liens = document.querySelectorAll(".navbar a");

    // Parcourir les liens
    liens.forEach(lien => {

        // Supprimer la classe active
        lien.classList.remove("active");

        // Ajouter active au lien correspondant
        if (lien.getAttribute("href") === page) {
            lien.classList.add("active");
        }

    });
}

// Détecter les changements de page
window.addEventListener("hashchange", afficherPage);

// Charger la première page
afficherPage();






/*
import { home } from "./pages/home.js";
import { competence } from "./pages/competence.js";
import { porfolio } from "./pages/porfolio.js";
import { contact } from "./pages/contact.js";

function afficherPage() {
    const page = location.hash;

    if (page === "#competence") {
        competence();
    }
    else if (page === "#porfolio") {
        porfolio();
    }
    else if (page === "#contact") {
        contact();
    }
    else {
        home();
    }
}

window.addEventListener("hashchange", afficherPage);

afficherPage();
*/
