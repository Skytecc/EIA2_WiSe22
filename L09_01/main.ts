/*
Aufgabe: <L09_01_>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <W3schools>
*/
namespace L09_01 {

    window.addEventListener("load", handleLoad);

/*     let food: Foodstock[] = [
        new Food("Hay", 100)
    ];
    let animals: Animal[] = [
        new Animal("cow", "Paula", food[0], 20, "mooh")
    ]; */

    function handleLoad(): void { 

        //let hayForCow: Foodstock = new Foodstock("Hay", 100);
        //let cow: Animal = new Animal("cow", "Paula", hayForCow, 20, "mooh");

        let food: Foodstock[] = [
            new Foodstock("Hay", 100)
        ];
        let animals: Animal[] = [
            new Animal("cow", "Paula", food[0], 20, "mooh")
        ];

        console.log(animals);

    }
}