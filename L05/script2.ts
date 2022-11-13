/*
Aufgabe: <L03_Einkaufsliste>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <Stackoverflow, W3schools, jsowl.com>
*/
namespace L05_Einkaufsliste {

    let dateInput: HTMLInputElement = <HTMLInputElement>document.getElementById("date");
    
    dateInput.value = new Date().toISOString().substring(0, 10);

    window.addEventListener("load", handleload);

    async function handleload(): Promise<void> {

        let response: Response = await fetch("https://skytecc.github.io/EIA2_WiSe22//L05/Data.json");
        let offer: string = await response.text();
        let data: DataEntries = JSON.parse(offer);
        console.log("Response", response);
        
        let addBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");

        showItems(data); // Get Items through Data.Json

        addBtn.addEventListener("click", newItem);


    }


}


