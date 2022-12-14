"use strict";
/*
Aufgabe: <L03_Einkaufsliste>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <Stackoverflow, W3schools, jsowl.com>
*/
var L06_Einkaufsliste;
(function (L06_Einkaufsliste) {
    let dateInput = document.getElementById("date");
    dateInput.value = new Date().toISOString().substring(0, 10);
    window.addEventListener("load", handleload);
    async function handleload() {
        let response = await fetch("https://skytecc.github.io/EIA2_WiSe22//L05/Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        console.log("Response", response);
        let addBtn = document.getElementById("button");
        L06_Einkaufsliste.showItems(data); // Get Items through Data.Json
        addBtn.addEventListener("click", L06_Einkaufsliste.newItem);
    }
})(L06_Einkaufsliste || (L06_Einkaufsliste = {}));
//# sourceMappingURL=script2.js.map