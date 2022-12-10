"use strict";
var L09_Oldfarm_Mcdonald;
(function (L09_Oldfarm_Mcdonald) {
    class Animal {
        species;
        name;
        food;
        amount;
        sounds;
        constructor(_species, _name, _food, _amount, _sounds) {
            this.species = _species;
            this.name = _name;
            this.food = _food;
            this.amount = _amount;
            this.sounds = _sounds;
        }
        sing(_index) {
            let text = document.getElementById("text");
            let newDiv = document.createElement("div");
            newDiv.id = "div" + _index;
            _index++;
            newDiv.innerHTML = "OldMac Donald had a farm" + "<br>" + "Ee i ee i o" + "<br>" + "And on his farm he had some" + this.species + "<br>" +
                "with a " + this.sounds + "-" + this.sounds + "<br>" + "and a " + this.sounds + "-" + this.sounds + "there" + "<br>" +
                "Here a " + this.sounds + "there a" + this.sounds + "Everywhere a " + this.sounds + "-" + this.sounds;
        }
    }
    L09_Oldfarm_Mcdonald.Animal = Animal;
    window.addEventListener("load", handleLoad);
    //let index: number = 0;
    let animal = [];
    function handleLoad() {
        showAnimalText();
    }
    function showAnimalText() {
        let text = document.getElementById("text");
        let cow = new Animal("cow", "Paula", "grass", 10, "muh");
        animal.push(cow);
        let test = document.createElement("div");
        test.innerHTML = cow.name;
        text.appendChild(test);
    }
})(L09_Oldfarm_Mcdonald || (L09_Oldfarm_Mcdonald = {}));
//# sourceMappingURL=animal.js.map