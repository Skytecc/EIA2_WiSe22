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

        sing(_index: number): void {
            let text: HTMLDivElement = <HTMLDivElement>document.getElementById("text");
            let newText: HTMLDivElement = document.createElement("div");


            newText.id = "div" + _index;
            _index++;

            newText.innerHTML = "OldMac Donald had a farm" + "<br>" + "Ee i ee i o" + "<br>" + "And on his farm he had some" + this.species + "<br>" +
                "with a " + this.sounds + "-" + this.sounds + "<br>" + "and a " + this.sounds + "-" + this.sounds + "there" + "<br>" +
                "Here a " + this.sounds + "there a " + this.sounds + " Everywhere a " + this.sounds + "-" + this.sounds + 
                "<br>" + "";

            text.appendChild(newText);
        }

        eat(): void {
            this.food.amount -= this.amount;
        }
    }

}