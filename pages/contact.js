
import { supabase } from "../js/supabase.js";

export function contact() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="contact">

            <div class="contact-header">
                <h1>Contactez-moi</h1>
                <p>
                    Vous avez un projet, une opportunité professionnelle
                    ou une question ? N'hésitez pas à me contacter.
                </p>
            </div>

            <div class="contact-container">

                <div class="contact-info">
                    <h2>Mes coordonnées</h2>

                    <div class="contact-item">
                        <span>📧</span>
                        <div>
                            <h3>Email</h3>
                            <p>yhasminhrantenaina@gmail.com</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <span>📍</span>
                        <div>
                            <h3>Localisation</h3>
                            <p>Madagascar</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <span>💼</span>
                        <div>
                            <h3>GitHub</h3>
                            <a href="https://github.com/allonzo23"
                               target="_blank"
                               rel="noopener noreferrer">
                                Mon profil GitHub
                            </a>
                        </div>
                    </div>

                    <div class="contact-item">
                        <span>🌐</span>
                        <div>
                            <h3>LinkedIn</h3>
                            <p>Yhasminh Rantenaina</p>
                        </div>
                    </div>
                </div>

                <form class="contact-form" id="contact-form">

                    <h2>Envoyer un message</h2>

                    <label for="nom">Votre nom</label>
                    <input type="text"
                           id="nom"
                           maxlength="100"
                           placeholder="Entrez votre nom"
                           required>

                    <label for="email">Votre adresse e-mail</label>
                    <input type="email"
                           id="email"
                           maxlength="150"
                           placeholder="exemple@gmail.com"
                           required>

                    <label for="sujet">Sujet</label>
                    <input type="text"
                           id="sujet"
                           maxlength="200"
                           placeholder="Objet de votre message"
                           required>

                    <label for="message">Votre message</label>
                    <textarea id="message"
                              rows="5"
                              maxlength="10000"
                              placeholder="Écrivez votre message..."
                              required></textarea>

                    <button type="submit" id="btn-envoyer">
                        Envoyer le message
                    </button>

                    <p id="resultat-message" aria-live="polite"></p>

                </form>

            </div>
        </section>
    `;

    // Récupération du formulaire
    const formulaire = document.getElementById("contact-form");

    // Gestion de l'envoi
    formulaire.addEventListener("submit", async function (event) {

        event.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const sujet = document.getElementById("sujet").value.trim();
        const message = document.getElementById("message").value.trim();

        const resultat = document.getElementById("resultat-message");
        const bouton = document.getElementById("btn-envoyer");

        // Vérification des champs
        if (!nom || !email || !sujet || !message) {
            resultat.textContent = "Veuillez remplir tous les champs.";
            return;
        }

        // Désactivation du bouton pendant l'envoi
        bouton.disabled = true;
        bouton.textContent = "Envoi en cours...";

        resultat.textContent = "";

        try {

            // Insertion dans PostgreSQL via Supabase
            const { error } = await supabase
                .from("messages")
                .insert([
                    {
                        nom: nom,
                        email: email,
                        sujet: sujet,
                        contenu: message
                    }
                ]);

            if (error) {
                throw error;
            }

            // Message de confirmation
            resultat.style.color = 'green';
            resultat.textContent =
                "Votre message a été envoyé avec succès !";

            // Réinitialisation du formulaire
            formulaire.reset();

        } catch (error) {

            console.error("Erreur Supabase :", error);
            resultat.style.color = 'red';
            resultat.textContent =
                "Une erreur est survenue lors de l'envoi. Veuillez réessayer.";

        } finally {

            // Réactivation du bouton
            bouton.disabled = false;
            bouton.textContent = "Envoyer le message";

        }

    });
}
