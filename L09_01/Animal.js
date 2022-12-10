"use strict";
var L09_Oldfarm;
(function (L09_Oldfarm) {
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
                "Here a " + this.sounds + "there a" + this.sounds + "Everywhere a " + this.sounds + "-" + this.sounds;
            text.appendChild(newText);
        }
    }
    L09_Oldfarm.Animal = Animal;
})(L09_Oldfarm || (L09_Oldfarm = {}));
//# sourceMappingURL=animal.js.map