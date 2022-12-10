namespace L09_Oldfarm_Mcdonald {
    export class Animal {
        species: string;
        name: string;
        food: string;
        amount: number;
        sounds: string;

        constructor(_species: string, _name: string, _food: string, _amount: number, _sounds: string) {
            this.species = _species;
            this.name = _name;
            this.food = _food;
            this.amount = _amount;
            this.sounds = _sounds;
        }

        sing(_index: number): void {
            let text: HTMLDivElement = <HTMLDivElement>document.getElementById("text");
            let newDiv: HTMLDivElement = document.createElement("div");


            newDiv.id = "div" + _index;
            _index++;

            newDiv.innerHTML = "OldMac Donald had a farm" + "<br>" + "Ee i ee i o" + "<br>" + "And on his farm he had some" + this.species + "<br>" +
                "with a " + this.sounds + "-" + this.sounds + "<br>" + "and a " + this.sounds + "-" + this.sounds + "there" + "<br>" +
                "Here a " + this.sounds + "there a" + this.sounds + "Everywhere a " + this.sounds + "-" + this.sounds;


        }
    }

    window.addEventListener("load", handleLoad);

    //let index: number = 0;

    let animal: Animal[] = [];

    function handleLoad(): void {

        showAnimalText();

    }

    function showAnimalText(): void {

        let text: HTMLDivElement = <HTMLDivElement>document.getElementById("text");

        let cow: Animal = new Animal("cow", "Paula", "grass", 10, "muh");
        animal.push(cow);

        let test: HTMLElement = document.createElement("div");

        test.innerHTML = cow.name;

        text.appendChild(test);

    }


}