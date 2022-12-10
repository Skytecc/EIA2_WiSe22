/*
Aufgabe: <L09_01_>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <W3schools>
*/
namespace L09_Oldfarm {

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
            new Foodstock("hay", 100),
            new Foodstock("grains", 80),
            new Foodstock("dog food", 50),
            new Foodstock("wheat", 60)

        ];

        let animals: Animal[] = [
            new Animal("cow", "Paula", food[0], 3, "mooh"),
            new Animal("chicken", "Carlos", food[1], 4, "cock-cockadu"),

        ];

        console.log(animals[0]);
    }

   
}