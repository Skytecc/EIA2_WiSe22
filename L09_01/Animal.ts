namespace L09_Oldfarm {
    export class Animal {
        species: string;
        name: string;
        food: Foodstock;
        amount: number;
        sounds: string;
    
        constructor(_species: string, _name: string, _food: Foodstock, _amount: number, _sounds: string) {
            this.species = _species;
            this.name = _name;
            this.food = _food;
            this.amount = _amount;
            this.sounds = _sounds;
        }

        sing(): void {
            let output: HTMLDivElement = <HTMLDivElement> document.getElementById("output");
        }
    
    }
}