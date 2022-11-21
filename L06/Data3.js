"use strict";
var L06_Einkaufsliste;
(function (L06_Einkaufsliste) {
    function showItems(_data) {
        console.log(_data);
        let index = 0;
        //let currentItems: Item[] = _data.data;
        //console.log("Anfang");
        //console.log(currentItems);
        let entries = []; // making a new list
        for (let entry in _data.data) {
            // going through every key in the json.data and pushing it in the new created list
            //let entryModifiedBecauseTypescriptIsAnnoying: any = entry; // Modifying entry because Typescript is making things difficult with the types???
            entries.push(entry);
            //console.log(entry + " schau hier");
        }
        console.log(entries);
        console.log(entries[0]);
        for (let entryID of entries) {
            let entry = _data.data[entryID];
            /*console.log("Hallo ist hier etwas?")
            console.log(_data.data[entryID].name);*/
            let ulList = document.getElementById("addList");
            let li = document.createElement("li");
            let div = document.createElement("div");
            div.classList.add("itemList");
            //console.log(entryID);
            //console.log(entry);
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
                removeSend02(entryID);
            });
            divEdit.addEventListener("click", L06_Einkaufsliste.edit);
            div.appendChild(divTrash);
            div.appendChild(divEdit);
            li.appendChild(div);
            ulList.appendChild(li);
        }
    }
    L06_Einkaufsliste.showItems = showItems;
    async function removeSend02(_dataID) {
        //_data.data.reduce;
        //console.log(_data.data);
        //let divTrash: NodeListOf<HTMLElement> = document.querySelectorAll(".trash");
        //let response: Response = await fetch("https://webuser.hs-furtwangen.de/~nguyenki/Database/?command=find&collection=Items");
        //let offer: string = await response.text();
        //console.log(offer);
        //let dataJson: DataEntries = JSON.parse(offer);
        /*for (let addEntry in _data.data) {
            newEntries.push(addEntry);
            console.log(addEntry);
        }*/
        //let json: DataEntries = dataJson;
        let query = new URLSearchParams();
        query.set("command", "delete");
        query.set("collection", "Items");
        query.set("id", _dataID.toString());
        let url = "https:webuser.hs-furtwangen.de/~nguyenki/Database/?";
        let response = await fetch(url + query.toString());
        console.log(response);
        console.log("delete");
        console.log(_dataID);
    }
    L06_Einkaufsliste.removeSend02 = removeSend02;
})(L06_Einkaufsliste || (L06_Einkaufsliste = {}));
//# sourceMappingURL=Data3.js.map