/*
Aufgabe: <L03_Einkaufsliste>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <->
*/
namespace L04_Einkaufsliste {

    /*let dateInput: HTMLInputElement = <HTMLInputElement>document.getElementById("date");
    
    dateInput.value = new Date().toISOString().substring(0, 10);*/

    window.addEventListener("load", handleload);

    function handleload(): void {
        let addBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
        let editBtn: NodeListOf<HTMLElement> = document.querySelectorAll(".edit");
        let deleteBtn: NodeListOf<HTMLElement> = document.querySelectorAll(".trash");

        let checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(".checkbox");

        addBtn.addEventListener("click", newItem02);


        addBtn.addEventListener("click", createNewList);
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

    function checkBoxChecking (): void {
        let checkboxes: HTMLInputElement = <HTMLInputElement> document.querySelector(".checkbox");
        
        if (checkboxes.checked == true) {

            console.log("checked");
        } else if (checkboxes.checked == false) {
            console.log("unchecked");
        }
        
    }

    function editing(): void {
        console.log("Edit");
    }

    function adding(): void {
        console.log("add");
    }

    function trashing(): void {
        console.log("delete");
    }

}


