"use strict";
var L05_Einkaufsliste;
(function (L05_Einkaufsliste) {
    L05_Einkaufsliste.existingItem = [
        {
            name: "Banane",
            amount: 4,
            date: "30.10.2022",
            comment: "Für den Milchshake",
            checked: true
        },
        {
            name: "Apfel",
            amount: 8,
            date: "30.10.2022",
            comment: "Für den Smoothie",
            checked: false
        }
    ];
    /* export function test01(): void {
         //console.log(existingItems[1].name);
         let p: HTMLParagraphElement = document.createElement("p");
         p.innerText = existingItem1[0].name + "";
 
         for (let entry of existingItem1) {
             console.log(entry.name);
         }
     }*/
    function showItems(_data) {
        let index = 0;
        let currentItems = _data.entries;
        console.log(currentItems);
        for (let entry of currentItems) {
            let ulList = document.getElementById("addList");
            let li = document.createElement("li");
            let div = document.createElement("div");
            div.classList.add("itemList");
            li.id = "div" + index;
            index++;
            let linebreak = document.createElement("br");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = entry.checked;
            let nameInput = document.createElement("p");
            let amountInput = document.createElement("p");
            let dateInput = document.createElement("p");
            let divComment = document.createElement("div");
            divComment.classList.add("showComment");
            nameInput.innerHTML = entry.name;
            amountInput.innerHTML = entry.amount + "";
            dateInput.innerHTML = entry.date;
            divComment.innerHTML = entry.comment;
            li.appendChild(checkbox);
            div.appendChild(nameInput);
            div.appendChild(amountInput);
            div.appendChild(dateInput);
            div.appendChild(linebreak);
            div.appendChild(divComment);
            let divTrash = document.createElement("div");
            divTrash.classList.add("fa-regular", "fa-square-minus", "icon2", "trash");
            let divEdit = document.createElement("div");
            divEdit.classList.add("fa-solid", "fa-pen-to-square", "icon2", "edit");
            divTrash.addEventListener("click", function () {
                document.getElementById(li.id)?.remove();
            });
            divEdit.addEventListener("click", L05_Einkaufsliste.edit);
            div.appendChild(divTrash);
            div.appendChild(divEdit);
            li.appendChild(div);
            ulList.appendChild(li);
        }
    }
    L05_Einkaufsliste.showItems = showItems;
})(L05_Einkaufsliste || (L05_Einkaufsliste = {}));
//# sourceMappingURL=Data2.js.map