import { supabase } from "./js/supabase.js";

async function testerConnexion() {

    const { data, error } = await supabase
        .from("messages")
        .insert([
            {
                nom: "Test Portfolio",
                email: "test@example.com",
                sujet: "Test Supabase",
                contenu: "Mon portfolio communique avec Supabase !"
            }
        ]);

    if (error) {
        console.error("Erreur :", error.message);
        return;
    }

    console.log("Message enregistré avec succès !");
}

testerConnexion();