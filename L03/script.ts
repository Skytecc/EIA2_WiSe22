/*
Aufgabe: <L03_Einkaufsliste>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <13.10.2022>
Quellen: <->
*/
namespace L03_Einkaufsliste {

    let dateInput: HTMLInputElement = <HTMLInputElement>document.getElementById("date");
    
    dateInput.value = new Date().toISOString().substring(0, 10);

    window.addEventListener("load", handleload);

    function handleload(): void {
        let addBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
        let editBtn: HTMLElement = <HTMLElement>document.querySelector(".edit");
        let deleteBtn: HTMLElement = <HTMLElement>document.querySelector(".delete");

        addBtn.addEventListener("click", adding);
        editBtn.addEventListener("click", editing);
        deleteBtn.addEventListener("click", deleting);

    }

    function editing(): void {
        console.log("test");
    }

    function adding(): void {
        console.log("add");
    }

    function deleting(): void {
        console.log("delete");
    }

}


