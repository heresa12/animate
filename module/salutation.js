"use strict"
export default function bonjour() {
    console.log("Bonjour les gens !");
}
export function salut() {
    console.log("Salut la populace !");
}

export function coucou(name) {
    parler(name, "Coucou tout le monde !");
}
function parler(nom, text) {
    console.log(`${nom}:${text}`);
}
console.log("Salutation Importe !");  