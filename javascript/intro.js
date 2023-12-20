"use strict";

const phrases = ["Bienvenue sur mon site", "Je suis Janelle"];

function animationTexteConsole(motAffiches, id) {
    let indexMot = 0;
    let indexLettre = 0;
    let lettreVisible = true;
    const idTexteConsole = document.getElementById(id);
    const con = document.getElementById('texteConsole'); // Assuming 'texteConsole' is the ID of your underscore element

    function afficherLettre() {
        if (indexMot < motAffiches.length) {
            if (indexLettre < motAffiches[indexMot].length) {
                idTexteConsole.textContent += motAffiches[indexMot].charAt(indexLettre);
                indexLettre++;
                setTimeout(afficherLettre, 100);
            } else {
                indexLettre = 0;
                indexMot++;
                setTimeout(effacerLettre, 2000);
            }
        } else {
            indexMot = 0; // Réinitialiser pour afficher en boucle
            setTimeout(afficherLettre, 1000); // Attendre avant de recommencer
        }
    }

    function effacerLettre() {
        if (idTexteConsole.textContent.length > 0) {
            idTexteConsole.textContent = idTexteConsole.textContent.slice(0, -1);
            setTimeout(effacerLettre, 50);
        } else {
            if (indexMot >= motAffiches.length) {
                indexMot = 0;
            }
            setTimeout(afficherLettre, 500);
        }
    }

    window.setInterval(function() {
        if (lettreVisible === true) {
            con.className = 'console-underscore hidden';
            lettreVisible = false;
        } else {
            con.className = 'console-underscore';
            lettreVisible = true;
        }
    }, 400);

    afficherLettre();
}

animationTexteConsole(phrases, "text");
