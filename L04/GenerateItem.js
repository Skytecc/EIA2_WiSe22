"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var L04_Einkaufsliste;
(function (L04_Einkaufsliste) {
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
        let divTrash = document.createElement("div");
        divTrash.classList.add("fa-regular", "fa-square-minus", "icon2", "trash");
        let divEdit = document.createElement("div");
        divEdit.classList.add("fa-solid", "fa-pen-to-square", "icon2", "edit");
        div.appendChild(divTrash);
        div.appendChild(divEdit);
        divTrash.addEventListener("click", remove);
        divEdit.addEventListener("click", edit(divEdit, divTrash, div));
        li.appendChild(div);
        ulList.appendChild(li);
    }
    L04_Einkaufsliste.newItem02 = newItem02;
    function remove() {
        let ulList = document.getElementById("addList");
        let li = document.querySelector("#addList li");
        ulList.removeChild(li);
    }
    function edit(_editIcon, _trashIcon, _div) {
        let li = document.querySelector("#addList li");
        _div.replaceChild();
        li.setAttribute("contenteditable", "true");
        /*_inputAmount.contentEditable; , _inputAmount: HTMLInputElement, _inputDate: HTMLInputElement, _textComment: HTMLTextAreaElement
        _inputDate.contentEditable;
        _textComment.contentEditable;*/
    }
})(L04_Einkaufsliste || (L04_Einkaufsliste = {}));
//# sourceMappingURL=GenerateItem.js.map