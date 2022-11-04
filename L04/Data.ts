namespace L04_Einkaufsliste {
    export interface Item {
        name: string;
        amount: number;
        date: string;
        comment: string;
    }

    export interface DataList {
        [showList: string]: Item[];
    }

    export let currentItems: DataList  = {
        
        existingList: [
            { name: "Banane", amount: 4, date: "30.10.2022", comment: "Für den Milchshake"},
            { name: "Apfel", amount: 8.00, date: "30.10.2022", comment: "Für den Smoothie"}
        ]
    };


    export let inputName: HTMLInputElement = <HTMLInputElement> document.querySelector("#name");

}