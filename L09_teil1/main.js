"use strict";
/*
Aufgabe: <L09_01_>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <W3schools, Praktika++>
*/
var L09_01_Oldfarm;
(function (L09_01_Oldfarm) {
    window.addEventListener("load", handleLoad);
    let index = 0;
    let foodstock = [
        new L09_01_Oldfarm.Foodstock("grass", 80),
        new L09_01_Oldfarm.Foodstock("grain", 90),
        new L09_01_Oldfarm.Foodstock("bones", 10000),
        new L09_01_Oldfarm.Foodstock("hay", 60),
        new L09_01_Oldfarm.Foodstock("fish", 80)
    ];
    let animals = [
        new L09_01_Oldfarm.Animal("cow", "Dana", foodstock[0], 5, "muh"),
        new L09_01_Oldfarm.Animal("chicken", "Chika", foodstock[1], 5, "coock-coocka"),
        new L09_01_Oldfarm.Animal("dog", "Fluffy", foodstock[2], 10, "woof"),
        new L09_01_Oldfarm.Animal("horse", "Carl", foodstock[3], 15, "hüha"),
        new L09_01_Oldfarm.Animal("cat", "Kuro", foodstock[4], 5, "miau")
    ];
    function handleLoad() {
        for (let animal of animals) {
            animal.sing(index);
            animal.eat();
        }
        for (let foodstack of foodstock) {
            foodstack.showfood(index);
        }
    }
})(L09_01_Oldfarm || (L09_01_Oldfarm = {}));
//# sourceMappingURL=main.js.map