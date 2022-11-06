namespace L04_Einkaufsliste {
    export interface Item {
        name: string;
        amount: number;
        date: string;
        comment: string;
        checked: boolean;
    }

    export let existingItems: Item[] = [
        {
            name: "Banane",
            amount: 4,
            date: "30.10.2022",
            comment: "Für den Milchshake",
            checked: false
        },

        {
            name: "Apfel",
            amount: 8,
            date: "30.10.2022",
            comment: "Für den Smoothie",
            checked: false
        }
    ];

    export function test01(): void {
        //console.log(existingItems[1].name);
        let p: HTMLParagraphElement = document.createElement("p");
        p.innerText = existingItems[1].name + "";

        for (let entry of existingItems) {
            console.log(entry.name);
        }
    }

    export function showInterface(): void {
        let ulList: HTMLUListElement = <HTMLUListElement>document.getElementById("addList");
        let li: HTMLLIElement = document.createElement("li");
        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("itemList");

        let linebreak: HTMLElement = document.createElement("br");


        for (let entry of existingItems) {
            let nameInput: HTMLParagraphElement = document.createElement("p");
            nameInput.innerHTML = existingItems[1].name;

            console.log(existingItems.[1].name);

            li.appendChild(nameInput);


            li.appendChild(div);
            ulList.appendChild(li);
        }



    }

}