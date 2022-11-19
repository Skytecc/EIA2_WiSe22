"use strict";
/*
Aufgabe: <L03_Einkaufsliste>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <Stackoverflow, W3schools, jsowl.com, >
*/
var L06_Einkaufsliste;
(function (L06_Einkaufsliste) {
    let dateInput = document.getElementById("date");
    dateInput.value = new Date().toISOString().substring(0, 10);
    window.addEventListener("load", handleload);
    async function handleload() {
        let response = await fetch("https://webuser.hs-furtwangen.de/~nguyenki/Database/?command=find&collection=Items");
        let offer = await response.text();
        //console.log(offer);
        let dataJson = JSON.parse(offer);
        console.log("hier startet data.json");
        console.log(dataJson.data);
        //console.log("Response", response);
        //console.log(dataJson);
        /*for (let entry in dataJson.data) {
            //console.log(entry);
            //console.log(dataJson.data[entry]);
            console.log(typeof entry);

        }*/
        let addBtn = document.getElementById("button");
        L06_Einkaufsliste.showItems(dataJson);
        addBtn.addEventListener("click", L06_Einkaufsliste.newItem);
    }
})(L06_Einkaufsliste || (L06_Einkaufsliste = {}));
//# sourceMappingURL=script3.js.map