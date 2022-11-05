"use strict";
var L04_Einkaufsliste;
(function (L04_Einkaufsliste) {
    function createNewList(_event) {
        let li = document.createElement("li");
        let test = L04_Einkaufsliste.existingItems[1].name;
        li.innerHTML = test;
        console.log(test);
    }
    L04_Einkaufsliste.createNewList = createNewList;
    function newItem01() {
        let ulList = document.getElementById("addList");
        let li = document.createElement("li");
        let inputValueName = document.getElementById("name");
        let inputValueAmount = document.getElementById("amount");
        let inputValueDate = document.getElementById("date");
        let nameInput = document.createElement("p");
        nameInput.innerHTML = inputValueName.value;
        nameInput.classList.add("showName");
        let amountInput = document.createElement("p");
        amountInput.innerHTML = inputValueAmount.value;
        let dateInput = document.createElement("p");
        dateInput.innerHTML = inputValueDate.value;
        li.appendChild(nameInput);
        li.appendChild(amountInput);
        li.appendChild(dateInput);
        ulList.appendChild(li);
    }
    L04_Einkaufsliste.newItem01 = newItem01;
    function newItem02() {
        let ulList = document.getElementById("addList");
        let li = document.createElement("li");
        let div = document.createElement("div");
        div.classList.add("itemList");
        let linebreak = document.createElement("br");
        let inputValueName = document.getElementById("name");
        let inputValueAmount = document.getElementById("amount");
        let inputValueDate = document.getElementById("date");
        let textValueComment = document.getElementById("comment");
        let nameInput = document.createElement("p");
        nameInput.innerHTML = inputValueName.value;
        nameInput.classList.add("showName");
        let amountInput = document.createElement("p");
        amountInput.innerHTML = inputValueAmount.value;
        let dateInput = document.createElement("p");
        dateInput.innerHTML = inputValueDate.value;
        let divComment = document.createElement("div");
        divComment.classList.add("showComment");
        divComment.innerHTML = textValueComment.value;
        div.appendChild(nameInput);
        div.appendChild(amountInput);
        div.appendChild(dateInput);
        div.appendChild(linebreak);
        div.appendChild(divComment);
        li.appendChild(div);
        ulList.appendChild(li);
    }
    L04_Einkaufsliste.newItem02 = newItem02;
})(L04_Einkaufsliste || (L04_Einkaufsliste = {}));
//# sourceMappingURL=GenerateItem.js.map