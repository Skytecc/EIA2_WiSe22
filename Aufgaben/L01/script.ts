
let subjekte: string[] = [
    "Octane", 
    "Lifeline", 
    "Seer", 
    "Wraith", 
    "Hades", 
    "Bloodhound"
];

let prädikate: string[] = [
    "liebt",
    "hasst",
    "verrät",
    "lernt",
    "denkt",
    "jagt"
];

let objekte: string[] = [
    "die Gegner",
    "seinen Sohn Zagreus",
    "in New York",
    "neue Strategien",
    "Edward",
    "die kalte Nacht"
];

namespace ZufallsGedicht {

for (let i: number = 6; i > 0; i-- ) {
       console.log(getVerse(subjekte, prädikate, objekte));
    }

}

function getVerse(_arr01: string[], _arr02: string[], _arr03: string[]): string {


    let randomNumber01: number = Math.floor(Math.random() * _arr01.length);
    let randomNumber02: number = Math.floor(Math.random() * _arr02.length);
    let randomNumber03: number = Math.floor(Math.random() * _arr03.length);

    let a: string = _arr01[randomNumber01];
    let b: string = _arr02[randomNumber02];
    let c: string = _arr03[randomNumber03];

    // splice(startwert, Anzahl der Werte die spliced werden sollen)
    _arr01.splice(randomNumber01, 1);


    let vers: string = a + " " + b + " " + c;

    return vers;

    }



    
