/*
Aufgabe: <L03_Einkaufsliste>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <Stackoverflow, W3schools ,Cindy Nguyen>
*/
namespace L04_Einkaufsliste {

    /*let dateInput: HTMLInputElement = <HTMLInputElement>document.getElementById("date");
    
    dateInput.value = new Date().toISOString().substring(0, 10);*/

    window.addEventListener("load", handleload);

    function handleload(): void {
        let addBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");

        addBtn.addEventListener("click", newItem02);
    }


}


