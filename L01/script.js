"use strict";
/*
Aufgabe: <Nummer und Titel der Aufgabe>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <13.10.2022>
Quellen: <->
*/
var ZufallsGedicht;
(function (ZufallsGedicht) {
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
    for (let i = 6; i > 0; i--) {
        console.log(getVerse(subjekte, prädikate, objekte));
    }
    function getVerse(_arr01, _arr02, _arr03) {
        let randomNumber01 = Math.floor(Math.random() * _arr01.length);
        let randomNumber02 = Math.floor(Math.random() * _arr02.length);
        let randomNumber03 = Math.floor(Math.random() * _arr03.length);
        let a = _arr01[randomNumber01];
        let b = _arr02[randomNumber02];
        let c = _arr03[randomNumber03];
        // splice(startwert, Anzahl der Werte die spliced werden sollen)
        _arr01.splice(randomNumber01, 1);
        let vers = a + " " + b + " " + c;
        return vers;
    }
})(ZufallsGedicht || (ZufallsGedicht = {}));
//# sourceMappingURL=script.js.map