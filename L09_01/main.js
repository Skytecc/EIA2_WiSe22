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
    let index = 0;
    let animal = [];
    function handleLoad() {
        showAnimalText();
        console.log("test");
    }
    function showAnimalText() {
        let cow = new L09_Oldfarm.Animal("cow", "Paula", "grass", 10, "muh");
        animal.push(cow);
        let test = document.createElement("div");
        let text = document.getElementById("text");
        text.innerHTML = cow.name;
        //text.appendChild(test);
    }
})(L09_Oldfarm || (L09_Oldfarm = {}));
//# sourceMappingURL=main.js.map