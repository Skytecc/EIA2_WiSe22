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
        sing() {
            let output = document.getElementById("output");
        }
    }
    L09_Oldfarm.Animal = Animal;
})(L09_Oldfarm || (L09_Oldfarm = {}));
//# sourceMappingURL=Animal.js.map