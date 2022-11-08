namespace L04_Einkaufsliste {
    export interface Item {
        name: string;
        amount: number;
        date: string;
        comment: string;
        checked: boolean;
    }

    export let existingItem1: Item[] = [
        {
            name: "Banane",
            amount: 4,
            date: "30.10.2022",
            comment: "Für den Milchshake",
            checked: true
        }

    ];

    export let existingItem2: Item[] = [
        {
            name: "Apfel",
            amount: 8,
            date: "30.10.2022",
            comment: "Für den Smoothie",
            checked: false
        }

    ];

    let existingItem3: Item[] = [
        
            {
                name: "Banane",
                amount: 4,
                date: "30.10.2022",
                comment: "Für den Milchshake",
                checked: true
            },

        {
            name: "Apfel",
            amount: 8,
            date: "30.10.2022",
            comment: "Für den Smoothie",
            checked: false
        }

    ];

   /* export function test01(): void {
        //console.log(existingItems[1].name);
        let p: HTMLParagraphElement = document.createElement("p");
        p.innerText = existingItem1[0].name + "";

        for (let entry of existingItem1) {
            console.log(entry.name);
        }
    }*/

    export function showItems(): void {

        let index: number = 0;

        for (let entry of existingItem3) {

            let ulList: HTMLUListElement = <HTMLUListElement>document.getElementById("addList");
            let li: HTMLLIElement = document.createElement("li");
            let div: HTMLDivElement = document.createElement("div");
            div.classList.add("itemList");

            li.id = "div" + index;
            index++;
            
          
    
            let linebreak: HTMLElement = document.createElement("br");

            let checkbox: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = entry.checked;


            let nameInput: HTMLParagraphElement = document.createElement("p");
            let amountInput: HTMLParagraphElement = document.createElement("p");
            let dateInput: HTMLParagraphElement = document.createElement("p");
            let divComment: HTMLDivElement = document.createElement("div");
            divComment.classList.add("showComment");


            nameInput.innerHTML = entry.name;
            amountInput.innerHTML = entry.amount + "";
            dateInput.innerHTML = entry.date;
            divComment.innerHTML = entry.comment;

            li.appendChild(checkbox);
            div.appendChild(nameInput);
            div.appendChild(amountInput);
            div.appendChild(dateInput);
            div.appendChild(linebreak);
            div.appendChild(divComment);

            let divTrash: HTMLDivElement = document.createElement("div");
            divTrash.classList.add("fa-regular", "fa-square-minus", "icon2", "trash");
    
            let divEdit: HTMLDivElement = document.createElement("div");
            divEdit.classList.add("fa-solid", "fa-pen-to-square", "icon2", "edit");

            divTrash.addEventListener("click", function(): void {
                document.getElementById(li.id)?.remove();
            });
            divEdit.addEventListener("click", edit);

            div.appendChild(divTrash);
            div.appendChild(divEdit);

            li.appendChild(div);
            ulList.appendChild(li);

        }
        
    }


}