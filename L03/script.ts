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

        let checkbox: HTMLInputElement = <HTMLInputElement> document.querySelector(".checkbox");

        addBtn.addEventListener("click", adding);
        editBtn.addEventListener("click", editing);
        deleteBtn.addEventListener("click", deleting);
        checkbox.addEventListener("click", checkBoxChecking);

    }

    function checkBoxChecking (): void {
        let checkbox: HTMLInputElement = <HTMLInputElement> document.querySelector(".checkbox");
        
        if (checkbox.checked == true) {

            console.log("checked");
        } else if (checkbox.checked == false) {
            console.log("unchecked");
        }
        
    }

    function editing(): void {
        console.log("Edit");
    }

    function adding(): void {
        console.log("add");
    }

    function deleting(): void {
        console.log("delete");
    }

}


