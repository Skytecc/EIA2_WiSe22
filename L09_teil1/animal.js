"use strict";
var L09_01_Oldfarm;
(function (L09_01_Oldfarm) {
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
            let newText = document.createElement("div");
            newText.id = "div" + _index;
            _index++;
            newText.innerHTML = "OldMac Donald had a farm" + "<br>" + "Ee i ee i o" + "<br>" + "And on his farm he had some" + this.species + "<br>" +
                "with a " + this.sounds + "-" + this.sounds + "<br>" + "and a " + this.sounds + "-" + this.sounds + "there" + "<br>" +
                "Here a " + this.sounds + "there a " + this.sounds + " Everywhere a " + this.sounds + "-" + this.sounds +
                "<br>" + "";
            text.appendChild(newText);
        }
        eat() {
            this.food.amount -= this.amount;
        }
    }
    L09_01_Oldfarm.Animal = Animal;
})(L09_01_Oldfarm || (L09_01_Oldfarm = {}));
//# sourceMappingURL=animal.js.map