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
                            <p>Ajoutez ici votre profil LinkedIn</p>
                        </div>
                    </div>
                </div>

                <form class="contact-form" id="contact-form">
                    <h2>Envoyer un message</h2>

                    <label for="nom">Votre nom</label>
                    <input type="text" id="nom"
                           placeholder="Entrez votre nom" required>

                    <label for="email">Votre adresse e-mail</label>
                    <input type="email" id="email"
                           placeholder="exemple@gmail.com" required>

                    <label for="sujet">Sujet</label>
                    <input type="text" id="sujet"
                           placeholder="Objet de votre message" required>

                    <label for="message">Votre message</label>
                    <textarea id="message" rows="5"
                              placeholder="Écrivez votre message..."
                              required></textarea>

                    <button type="submit">Envoyer le message</button>
                </form>

            </div>
        </section>
    `;

    const formulaire = document.getElementById("contact-form");

    formulaire.addEventListener("submit", function (event) {
        event.preventDefault();

        const nom = document.getElementById("nom").value;
        const email = document.getElementById("email").value;
        const sujet = document.getElementById("sujet").value;
        const message = document.getElementById("message").value;

        const destinataire = "votre.email@gmail.com";

        const contenu = `
Nom : ${nom}
Email : ${email}

Message :
${message}
        `;

        const lienEmail =
            `mailto:${destinataire}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(contenu)}`;

        window.location.href = lienEmail;
    });
}