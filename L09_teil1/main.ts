/*
Aufgabe: <L09_01_>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <W3schools, Praktika++>
*/
namespace L09_01_Oldfarm {

    window.addEventListener("load", handleLoad);

    let index: number = 0;

    let foodstock: Foodstock[] = [
        new Foodstock("grass", 80),
        new Foodstock("grain", 90),
        new Foodstock("bones", 10000),
        new Foodstock("hay", 60),
        new Foodstock("fish", 80)
    ];

    let animals: Animal[] = [
        new Animal("cow", "Dana", foodstock[0], 5, "muh"),
        new Animal("chicken", "Chika", foodstock[1], 5, "coock-coocka"),
        new Animal("dog", "Fluffy", foodstock[2], 10, "woof"),
        new Animal("horse", "Carl", foodstock[3], 15, "hüha"),
        new Animal("cat", "Kuro", foodstock[4], 5, "miau")
    ];

    function handleLoad(): void { 

        for (let animal of animals) {
            animal.sing(index);
            animal.eat();
        }

        for (let foodstack of foodstock) {
            foodstack.showfood(index);
        }
 
    }

   
}