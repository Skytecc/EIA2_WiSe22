"use strict";
//import { discoverPlugins } from "typedoc/dist/lib/utils";
var L06_Einkaufsliste;
(function (L06_Einkaufsliste) {
    /*let formData: FormData = new FormData(document.forms[0]);
    console.log(formData);*/
    let index = 2;
    //let index2: number;
    //let newEntries: any[] = []; // making a new list
    async function newItem() {
        /*let response: Response = await fetch("https://webuser.hs-furtwangen.de/~nguyenki/Database/?command=find&collection=Items");
        let offer: string = await response.text();
        //console.log(offer);
        let dataJson: DataEntries = JSON.parse(offer);

        for (let addEntry in _data.data) {
            newEntries.push(addEntry);
            //console.log(addEntry);
        }*/
        let formData = new FormData(document.forms[0]);
        let ulList = document.getElementById("addList");
        let li = document.createElement("li");
        li.id = "div" + index;
        index++;
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = false;
        let div = document.createElement("div");
        div.classList.add("itemList");
        let linebreak = document.createElement("br");
        //let inputValueName: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        //let inputValueAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("amount");
        //let textValueComment: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("comment");
        let nameInput = document.createElement("p");
        let formName = formData.get("name");
        nameInput.innerHTML = formName;
        let amountInput = document.createElement("p");
        let formAmount = formData.get("amount");
        amountInput.innerHTML = formAmount;
        let dateInput = document.createElement("p");
        let formDate = formData.get("date");
        dateInput.innerHTML = formDate;
        let divComment = document.createElement("div");
        divComment.classList.add("showComment");
        let formComment = formData.get("comment");
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
        divTrash.addEventListener("click", function () {
            document.getElementById(li.id)?.remove();
        });
        divEdit.addEventListener("click", edit);
        //append list and div with items
        li.appendChild(div);
        ulList.appendChild(li);
        // clear input field
        /*inputValueName.value = "";
        inputValueAmount.value = "";
        textValueComment.value = "";*/
        sendItem();
    }
    L06_Einkaufsliste.newItem = newItem;
    /* export async function removeSend(_data: DataEntries): Promise<void> {
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
         }
 
         //let json: DataEntries = dataJson;
         let query: URLSearchParams = new URLSearchParams();
         query.set("command", "delete");
         query.set("collection", "Items");
         query.set("id", _data.toString());
 
         let response: Response = await fetch ("https:webuser.hs-furtwangen.de/~nguyenki/Database/?" + query.toString());
         console.log("delete");
              
     }*/
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
    }
    L06_Einkaufsliste.remove = remove;
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
    L06_Einkaufsliste.edit = edit;
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
    L06_Einkaufsliste.editOff = editOff;
    async function sendItem() {
        console.log("Send to server");
        let formData = new FormData(document.forms[0]);
        let json = {};
        for (let key of formData.keys())
            if (!json[key]) {
                let values = formData.getAll(key); // get all elements
                json[key] = values.length > 1 ? values : values[0];
                // get all the elements in formdata
                /*let url: string = "https:webuser.hs-furtwangen.de/~nguyenki/Database/?";
                let query: URLSearchParams = new URLSearchParams(<any>formData);
                await fetch(url + "?" + query.toString());

                alert("New added Item");
            }*/
            }
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Items");
        query.set("data", JSON.stringify(json));
        console.log(JSON.stringify(json));
        console.log("test");
        let url = "https:webuser.hs-furtwangen.de/~nguyenki/Database/?";
        let response = await fetch(url + query.toString());
        console.log(response);
        console.log("data.sent");
    }
})(L06_Einkaufsliste || (L06_Einkaufsliste = {}));
//# sourceMappingURL=GenerateItem3.js.map