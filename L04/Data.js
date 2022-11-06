"use strict";
var L04_Einkaufsliste;
(function (L04_Einkaufsliste) {
    L04_Einkaufsliste.existingItems = [
        {
            name: "Banane",
            amount: 4,
            date: "30.10.2022",
            comment: "Für den Milchshake",
            checked: false
        },
        {
            name: "Apfel",
            amount: 8,
            date: "30.10.2022",
            comment: "Für den Smoothie",
            checked: false
        }
    ];
    function test01() {
        //console.log(existingItems[1].name);
        let p = document.createElement("p");
        p.innerText = L04_Einkaufsliste.existingItems[1].name + "";
        for (let entry of L04_Einkaufsliste.existingItems) {
            console.log(entry.name);
        }
    }
    L04_Einkaufsliste.test01 = test01;
    function showInterface() {
        let ulList = document.getElementById("addList");
        let li = document.createElement("li");
        let div = document.createElement("div");
        div.classList.add("itemList");
        let linebreak = document.createElement("br");
        for (let entry of L04_Einkaufsliste.existingItems) {
            let nameInput = document.createElement("p");
            nameInput.innerHTML = L04_Einkaufsliste.existingItems[1].name;
            console.log(L04_Einkaufsliste.existingItems.[1].name);
            li.appendChild(nameInput);
            li.appendChild(div);
            ulList.appendChild(li);
        }
    }
    L04_Einkaufsliste.showInterface = showInterface;
})(L04_Einkaufsliste || (L04_Einkaufsliste = {}));
//# sourceMappingURL=Data.js.map