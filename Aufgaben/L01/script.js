"use strict";
let subjekte = [
    "Octane",
    "Lifeline",
    "Seer",
    "Wraith",
    "Hades",
    "Bloodhound"
];
let prädikate = [
    "liebt",
    "hasst",
    "verrät",
    "lernt",
    "denkt",
    "jagt"
];
let objekte = [
    "die Gegner",
    "seinen Sohn Zagreus",
    "in New York",
    "neue Strategien",
    "Edward",
    "die kalte Nacht"
];
console.log(subjekte);
console.log(prädikate);
console.log(objekte);
for (let i = 6; i > 0; i--) {
    console.log(i);
    console.log(getVerse(subjekte, prädikate, objekte));
}
function getVerse(_arr01, _arr02, _arr03) {
    let a = _arr01[1];
    return a;
}
//# sourceMappingURL=script.js.map