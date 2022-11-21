/*
Aufgabe: <L03_Einkaufsliste>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <Stackoverflow, W3schools, jsowl.com, >
*/
namespace L06_Einkaufsliste {

    let dateInput: HTMLInputElement = <HTMLInputElement>document.getElementById("date");
    
    dateInput.value = new Date().toISOString().substring(0, 10);

    window.addEventListener("load", handleload);

    async function handleload(): Promise<void> {

        let response: Response = await fetch("https://webuser.hs-furtwangen.de/~nguyenki/Database/?command=find&collection=Items");
        let offer: string = await response.text();
        //console.log(offer);
        let dataJson: DataEntries = JSON.parse(offer);
        console.log("hier startet data.json");
        console.log(dataJson.data);
        //console.log("Response", response);
        //console.log(dataJson);
        
        /*for (let entry in dataJson.data) {
            //console.log(entry);
            //console.log(dataJson.data[entry]);
            console.log(typeof entry);

        }*/
        
        let addBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");

        showItems(dataJson); 

        addBtn.addEventListener("click", newItem);

        //test(dataJson);
       
        


    }


}


