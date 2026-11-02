export function home() {
    const app = document.getElementById("app");
    app.innerHTML = `
     <section class="home">

            <div class="home-text">

                <h1>Bonjour, je suis RANTENAINA Yhasminh !</h1>

                <h2>Développeur Full Stack spécialisé en Python</h2>

                <p>Diplômé de l'École Nationale d'Informatique (ENI), 
                je suis passionné par la conception et le développement 
                d'applications web modernes, performantes et évolutives.
                </p>

                <p>
                    J'aime apprendre, résoudre des problèmes techniques
                    et participer à la réalisation de projets innovants.
                </p>

                <div class="home-buttons">
                    <a href="#porfolio">Découvrir mes projets</a>
                    <a href="#contact">Me contacter</a>
                </div>

            </div>

            <div class="home-info">

                <h3>Informations personnelles</h3>

                <ul>
                    <li><strong>Adresse :</strong> Madagascar</li>
                    <li><strong>Langues :</strong> Français, Anglais, Malagasy</li>
                    <li><strong>Domaine :</strong> Développement Web</li>
                </ul>

                <h3>Domaines techniques</h3>

                <ul>
                    <li>Frontend Development</li>
                    <li>Backend Development</li>
                    <li>Base de données</li>
                    <li>DevOps</li>
                </ul>

            </div>

        </section>
    `;
}