"use strict";
/*
Aufgabe: <L03_Einkaufsliste>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <Stackoverflow, W3schools>
*/
var L04_Einkaufsliste;
(function (L04_Einkaufsliste) {
    let dateInput = document.getElementById("date");
    dateInput.value = new Date().toISOString().substring(0, 10);
    window.addEventListener("load", handleload);
    function handleload() {
        let addBtn = document.getElementById("button");
        L04_Einkaufsliste.showItem1();
        L04_Einkaufsliste.showItem2();
        addBtn.addEventListener("click", L04_Einkaufsliste.newItem02);
    }
})(L04_Einkaufsliste || (L04_Einkaufsliste = {}));
//# sourceMappingURL=script.js.map