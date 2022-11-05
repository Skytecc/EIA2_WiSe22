//import { discoverPlugins } from "typedoc/dist/lib/utils";

namespace L04_Einkaufsliste {
    
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

        let divTrash: HTMLDivElement = document.createElement("div");
        divTrash.classList.add("fa-regular", "fa-square-minus", "icon2", "trash");
        
        let divEdit: HTMLDivElement = document.createElement("div");
        divEdit.classList.add("fa-solid", "fa-pen-to-square", "icon2", "edit");

        div.appendChild(divTrash);
        div.appendChild(divEdit);

        divTrash.addEventListener("click", remove);
        divEdit.addEventListener("click", edit);


        li.appendChild(div);
        ulList.appendChild(li);



    }

    function remove (): void {
        let ulList: HTMLUListElement = <HTMLUListElement>document.getElementById("addList");
        let li: HTMLElement = <HTMLElement> document.querySelector("#addList li");
        

        ulList.removeChild(li);

    }

    function edit (): void {
        let li: HTMLElement = <HTMLElement> document.querySelector("#addList li");

        // create another icon for contenteditable false click Event

        li.setAttribute("contenteditable", "true");

        /*_inputAmount.contentEditable; , _inputAmount: HTMLInputElement, _inputDate: HTMLInputElement, _textComment: HTMLTextAreaElement
        _inputDate.contentEditable;
        _textComment.contentEditable;*/
    }

    
}

