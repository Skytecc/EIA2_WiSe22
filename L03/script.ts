namespace L03_Einkaufsliste {

    let dateInput: HTMLInputElement = <HTMLInputElement>document.getElementById("date");

    dateInput.value = new Date().toISOString().substring(0, 10);

    window.addEventListener("load", handleload);

    function handleLoad(): void {
        let addBtn: HTMLButtonElement = document.getElementById("button");
        
}





