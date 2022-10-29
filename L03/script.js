"use strict";
var L03_Einkaufsliste;
(function (L03_Einkaufsliste) {
    let dateInput = document.getElementById("date");
    dateInput.value = new Date().toISOString().substring(0, 10);
    window.addEventListener("load", handleload);
    function handleload() {
        let addBtn = document.getElementById("button");
        let editBtn = document.querySelector(".edit");
        let deleteBtn = document.querySelector(".delete");
        addBtn.addEventListener("click", adding);
        editBtn.addEventListener("click", editing);
        deleteBtn.addEventListener("click", deleting);
    }
    function editing() {
        console.log("test");
    }
    function adding() {
        console.log("add");
    }
    function deleting() {
        console.log("delete");
    }
})(L03_Einkaufsliste || (L03_Einkaufsliste = {}));
//# sourceMappingURL=script.js.map