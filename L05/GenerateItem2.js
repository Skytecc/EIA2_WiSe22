"use strict";
//import { discoverPlugins } from "typedoc/dist/lib/utils";
var L05_Einkaufsliste;
(function (L05_Einkaufsliste) {
    /*let formData: FormData = new FormData(document.forms[0]);
    console.log(formData);*/
    let index = 2;
    function newItem() {
        let formData = new FormData(document.forms[0]);
        let ulList = document.getElementById("addList");
        let li = document.createElement("li");
        li.id = "div" + index;
        index++;
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let div = document.createElement("div");
        div.classList.add("itemList");
        let linebreak = document.createElement("br");
        let inputValueName = document.getElementById("name");
        let inputValueAmount = document.getElementById("amount");
        let textValueComment = document.getElementById("comment");
        let nameInput = document.createElement("p");
        let formName = formData.get("Name");
        nameInput.innerHTML = formName;
        let amountInput = document.createElement("p");
        let formAmount = formData.get("Amount");
        amountInput.innerHTML = formAmount;
        let dateInput = document.createElement("p");
        let formDate = formData.get("Date");
        dateInput.innerHTML = formDate;
        let divComment = document.createElement("div");
        divComment.classList.add("showComment");
        let formComment = formData.get("Comment");
        divComment.innerHTML = formComment;
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
        //divTrash.addEventListener("click", remove);
        divTrash.addEventListener("click", function () {
            document.getElementById(li.id)?.remove();
        });
        divEdit.addEventListener("click", edit);
        //append list and div with items
        li.appendChild(div);
        ulList.appendChild(li);
        // clear input field
        inputValueName.value = "";
        inputValueAmount.value = "";
        textValueComment.value = "";
    }
    L05_Einkaufsliste.newItem = newItem;
    function remove() {
        let ulList = document.getElementById("addList");
        let li = document.querySelector("#addList li");
        // selfComment = In dieser Line geschrieben, da es sonst es nicht außerhalb im Editmode deleted wegen load
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
        sendItem();
    }
    L05_Einkaufsliste.remove = remove;
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
    L05_Einkaufsliste.edit = edit;
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
    L05_Einkaufsliste.editOff = editOff;
    async function sendItem() {
        console.log("Send to server");
        let formData = new FormData(document.forms[0]);
        let url = "L05_Einkaufsliste.html";
        let query = new URLSearchParams(formData);
        await fetch(url + "?" + query.toString());
        alert("New added Item");
    }
})(L05_Einkaufsliste || (L05_Einkaufsliste = {}));
//# sourceMappingURL=GenerateItem2.js.map