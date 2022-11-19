namespace L06_Einkaufsliste {
    
    export interface Item {
        name: string;
        amount: number;
        date: string;
        comment: string;
        checked: boolean;
    }

    export interface DataEntries {
        [category: string]: Item[];
    }

    export interface FormDataJSON {
        [key: string]: FormDataEntryValue | FormDataEntryValue[];
      }


    export function showItems(_data: DataEntries): void {


        console.log(_data);

        let index: number = 0;
        //let currentItems: Item[] = _data.data;
        //console.log("Anfang");
        //console.log(currentItems);
        
        let entries: any[] = []; // making a new list

        for (let entry in _data.data) {
            // going through every key in the json.data and pushing it in the new created list
            //let entryModifiedBecauseTypescriptIsAnnoying: any = entry; // Modifying entry because Typescript is making things difficult with the types???
            entries.push(entry);
            //console.log(entry + " schau hier");
        }

        console.log(entries);

        console.log(entries[0]);

        for (let entryID of entries) {

            let entry: any = _data.data[entryID];
            /*console.log("Hallo ist hier etwas?")
            console.log(_data.data[entryID].name);*/
            

            let ulList: HTMLUListElement = <HTMLUListElement>document.getElementById("addList");
            let li: HTMLLIElement = document.createElement("li");
            let div: HTMLDivElement = document.createElement("div");
            div.classList.add("itemList");

            //console.log(entryID);
            //console.log(entry);

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

           /* divTrash.addEventListener("click", function(): void {
                document.getElementById(li.id)?.remove();
            });*/
            divEdit.addEventListener("click", edit);

            div.appendChild(divTrash);
            div.appendChild(divEdit);

            li.appendChild(div);
            ulList.appendChild(li);

        }
        
    }


}