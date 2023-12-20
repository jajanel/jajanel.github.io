"use strict";
animationTexteConsole(['Bienvenue', 'blblblbbl :)'], 'text',['azure']);

/**
 * Fonction qui permet d'afficher le texte lettre par lettre dans un style de console.
 * @param motAffiches mots affichés
 * @param id id de l'élément html
 * @param colors couleurs utilisées
 */
function animationTexteConsole(motAffiches, id, colors) {
    let visible = true;
    let con = document.getElementById('texteConsole');
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);
    window.setInterval(function() {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = motAffiches[0].substring(0, letterCount);
            window.setTimeout(function() {
                let usedColor = colors.shift();
                colors.push(usedColor);
                let usedWord = motAffiches.shift();
                motAffiches.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)

        } else if (letterCount === motAffiches[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)

        } else if (waiting === false) {
            target.innerHTML = motAffiches[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 200)
    window.setInterval(function() {
        if (visible === true) {
            con.className = 'console-underscore hidden';
            visible = false;
        } else {
            con.className = 'console-underscore';
            visible = true;
        }
    }, 400)
}