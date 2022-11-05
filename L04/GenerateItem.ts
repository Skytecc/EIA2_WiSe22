namespace L04_Einkaufsliste {
    
    export function createNewList (_event: Event): void {
    let li: HTMLLIElement = document.createElement("li");

    let test = existingItems[1].name;

    li.innerHTML = test;

    console.log(test);
        
    }

    export function newItem01(): void {
        let ulList: HTMLUListElement = <HTMLUListElement>document.getElementById("addList");
        let li: HTMLLIElement = document.createElement("li");
        
        let inputValueName: HTMLInputElement = <HTMLInputElement> document.getElementById("name");
        let inputValueAmount: HTMLInputElement = <HTMLInputElement> document.getElementById("amount");
        let inputValueDate: HTMLInputElement = <HTMLInputElement> document.getElementById("date");
        
        let nameInput: HTMLParagraphElement = document.createElement("p");
        nameInput.innerHTML = inputValueName.value;
        nameInput.classList.add("showName");

        let amountInput: HTMLParagraphElement = document.createElement("p");
        amountInput.innerHTML = inputValueAmount.value;

        let dateInput: HTMLParagraphElement = document.createElement("p");
        dateInput.innerHTML = inputValueDate.value;

        li.appendChild(nameInput);
        li.appendChild(amountInput);
        li.appendChild(dateInput);

        ulList.appendChild(li);

    }

    export function newItem02(): void {
        let ulList: HTMLUListElement = <HTMLUListElement>document.getElementById("addList");
        let li: HTMLLIElement = document.createElement("li");

        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("itemList");
        
        let linebreak: HTMLElement = document.createElement("br");
        
        let inputValueName: HTMLInputElement = <HTMLInputElement> document.getElementById("name");
        let inputValueAmount: HTMLInputElement = <HTMLInputElement> document.getElementById("amount");
        let inputValueDate: HTMLInputElement = <HTMLInputElement> document.getElementById("date");

        let textValueComment: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("comment");
        
        let nameInput: HTMLParagraphElement = document.createElement("p");
        nameInput.innerHTML = inputValueName.value;
        nameInput.classList.add("showName");

        let amountInput: HTMLParagraphElement = document.createElement("p");
        amountInput.innerHTML = inputValueAmount.value;

        let dateInput: HTMLParagraphElement = document.createElement("p");
        dateInput.innerHTML = inputValueDate.value;

        let divComment: HTMLDivElement = document.createElement("div");
        divComment.classList.add("showComment");
        divComment.innerHTML = textValueComment.value;


        div.appendChild(nameInput);
        div.appendChild(amountInput);
        div.appendChild(dateInput);
        div.appendChild(linebreak);
        div.appendChild(divComment);
        

        li.appendChild(div);
        ulList.appendChild(li);


    }
}

