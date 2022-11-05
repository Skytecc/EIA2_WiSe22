"use strict";
/*
Aufgabe: <L03_Einkaufsliste>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <->
*/
var L04_Einkaufsliste;
(function (L04_Einkaufsliste) {
    /*let dateInput: HTMLInputElement = <HTMLInputElement>document.getElementById("date");
    
    dateInput.value = new Date().toISOString().substring(0, 10);*/
    window.addEventListener("load", handleload);
    function handleload() {
        let addBtn = document.getElementById("button");
        let editBtn = document.querySelectorAll(".edit");
        let deleteBtn = document.querySelectorAll(".trash");
        let checkboxes = document.querySelectorAll(".checkbox");
        addBtn.addEventListener("click", L04_Einkaufsliste.newItem02);
        addBtn.addEventListener("click", L04_Einkaufsliste.createNewList);
        editBtn.forEach(edit => {
            edit.addEventListener("click", editing);
        });
        deleteBtn.forEach(trash => {
            trash.addEventListener("click", trashing);
        });
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("click", checkBoxChecking);
        });
    }
    function checkBoxChecking() {
        let checkboxes = document.querySelector(".checkbox");
        if (checkboxes.checked == true) {
            console.log("checked");
        }
        else if (checkboxes.checked == false) {
            console.log("unchecked");
        }
    }
    function editing() {
        console.log("Edit");
    }
    function adding() {
        console.log("add");
    }
    function trashing() {
        console.log("delete");
    }
})(L04_Einkaufsliste || (L04_Einkaufsliste = {}));
//# sourceMappingURL=script.js.map