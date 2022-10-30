"use strict";
/*
Aufgabe: <L03_Einkaufsliste>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <13.10.2022>
Quellen: <->
*/
var L03_Einkaufsliste;
(function (L03_Einkaufsliste) {
    let dateInput = document.getElementById("date");
    dateInput.value = new Date().toISOString().substring(0, 10);
    window.addEventListener("load", handleload);
    function handleload() {
        let addBtn = document.getElementById("button");
        let editBtn = document.querySelectorAll(".edit");
        let deleteBtn = document.querySelectorAll(".trash");
        let checkboxes = document.querySelectorAll(".checkbox");
        addBtn.addEventListener("click", adding);
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
})(L03_Einkaufsliste || (L03_Einkaufsliste = {}));
//# sourceMappingURL=script.js.map