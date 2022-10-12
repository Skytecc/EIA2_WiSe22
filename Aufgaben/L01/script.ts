
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

console.log(subjekte);
console.log(prädikate);
console.log(objekte);


for (let i: number = 6; i > 0; i-- ) {
        console.log(i);
        console.log(getVerse(subjekte, prädikate, objekte));

    }

function getVerse(_arr01: string[], _arr02: string[], _arr03: string[]): string {
        let a: string = _arr01[1];

        return a;
    }

    
