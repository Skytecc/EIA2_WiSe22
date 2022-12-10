/*
Aufgabe: <L09_01_>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <W3schools>
*/
namespace L09_Oldfarm {

    window.addEventListener("load", handleLoad);

    let index: number = 0;

    let animal: Animal[] = [];

    function handleLoad(): void { 

        showAnimalText();
        console.log("test");

       
    }

    function showAnimalText(): void {

        let cow: Animal = new Animal("cow", "Paula", "grass", 10, "muh");
        animal.push(cow);

        let test: HTMLElement = document.createElement("div");
        let text: HTMLElement = <HTMLElement> document.getElementById("text");

        text.innerHTML = cow.name;
        //text.appendChild(test);



    }

   
}