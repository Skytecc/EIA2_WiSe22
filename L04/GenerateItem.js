"use strict";
//import { discoverPlugins } from "typedoc/dist/lib/utils";
var L04_Einkaufsliste;
(function (L04_Einkaufsliste) {
    function newItem02() {
        let ulList = document.getElementById("addList");
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let div = document.createElement("div");
        div.classList.add("itemList");
        let linebreak = document.createElement("br");
        let inputValueName = document.getElementById("name");
        let inputValueAmount = document.getElementById("amount");
        let inputValueDate = document.getElementById("date");
        let textValueComment = document.getElementById("comment");
        let nameInput = document.createElement("p");
        nameInput.innerHTML = inputValueName.value;
        let amountInput = document.createElement("p");
        amountInput.innerHTML = inputValueAmount.value;
        let dateInput = document.createElement("p");
        dateInput.innerHTML = inputValueDate.value;
        let divComment = document.createElement("div");
        divComment.classList.add("showComment");
        divComment.innerHTML = textValueComment.value;
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
        div.appendChild(divTrash);
        div.appendChild(divEdit);
        divTrash.addEventListener("click", remove);
        divEdit.addEventListener("click", edit);
        li.appendChild(div);
        ulList.appendChild(li);
    }
    L04_Einkaufsliste.newItem02 = newItem02;
    function remove() {
        let ulList = document.getElementById("addList");
        let li = document.querySelector("#addList li");
        // selfComment = In dieser Line, da es sonst es nicht außerhalb im Editmode deleted wegen load
        ulList.removeChild(li);
        let divNewIcon = document.querySelector(".editOff");
        let inputContainer = document.querySelector("#container1");
        inputContainer.removeChild(divNewIcon);
        let p = document.querySelectorAll("#addList li p");
        let divComment = document.querySelector("#addList li div .showComment");
        divComment.setAttribute("contentEditable", "false");
        p.forEach((e) => {
            e.setAttribute("contentEditable", "false");
        });
        let editIcon = document.querySelectorAll(".edit");
        editIcon.forEach(elementEditIcon => {
            elementEditIcon.classList.remove("invisible");
        });
        inputContainer.removeChild(divNewIcon);
    }
    function edit() {
        let inputContainer = document.querySelector("#container1");
        let p = document.querySelectorAll("#addList li p");
        let divComment = document.querySelectorAll("#addList li div .showComment");
        let editIcon = document.querySelectorAll(".edit");
        divComment.forEach((comment) => {
            comment.setAttribute("contentEditable", "true");
        });
        editIcon.forEach(elementEditIcon => {
            elementEditIcon.classList.add("invisible");
        });
        p.forEach((e) => {
            e.setAttribute("contentEditable", "true");
        });
        let newIcon = document.createElement("i");
        newIcon.classList.add("fa-solid", "fa-square-check", "icon2", "editOff");
        inputContainer.appendChild(newIcon);
        let offIcon = document.querySelector(".editOff");
        offIcon.addEventListener("click", editOff);
        // create another icon for contenteditable false click Event
    }
    function editOff() {
        let inputContainer = document.querySelector("#container1");
        let p = document.querySelectorAll("#addList li p");
        let divComment = document.querySelectorAll("#addList li div .showComment");
        // making editIcon visible again
        let editIcon = document.querySelectorAll(".edit");
        editIcon.forEach(elementEditIcon => {
            elementEditIcon.classList.remove("invisible");
        });
        let divNewIcon = document.querySelector(".editOff");
        divComment.forEach((comment) => {
            comment.setAttribute("contentEditable", "false");
        });
        p.forEach((e) => {
            e.setAttribute("contentEditable", "false");
        });
        inputContainer.removeChild(divNewIcon);
    }
    L04_Einkaufsliste.editOff = editOff;
})(L04_Einkaufsliste || (L04_Einkaufsliste = {}));
//# sourceMappingURL=GenerateItem.js.map