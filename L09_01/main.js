"use strict";
/*
Aufgabe: <L09_01_>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <W3schools>
*/
var L09_Oldfarm;
(function (L09_Oldfarm) {
    window.addEventListener("load", handleLoad);
    /*     let food: Foodstock[] = [
            new Food("Hay", 100)
        ];
        let animals: Animal[] = [
            new Animal("cow", "Paula", food[0], 20, "mooh")
        ]; */
    function handleLoad() {
        //let hayForCow: Foodstock = new Foodstock("Hay", 100);
        //let cow: Animal = new Animal("cow", "Paula", hayForCow, 20, "mooh");
        let food = [
            new L09_Oldfarm.Foodstock("hay", 100),
            new L09_Oldfarm.Foodstock("grains", 80),
            new L09_Oldfarm.Foodstock("dog food", 50),
            new L09_Oldfarm.Foodstock("wheat", 60)
        ];
        let animals = [
            new L09_Oldfarm.Animal("cow", "Paula", food[0], 3, "mooh"),
            new L09_Oldfarm.Animal("chicken", "Carlos", food[1], 4, "cock-cockadu"),
        ];
        console.log(animals[0]);
    }
})(L09_Oldfarm || (L09_Oldfarm = {}));
//# sourceMappingURL=main.js.map