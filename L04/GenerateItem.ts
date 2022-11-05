namespace L04_Einkaufsliste {
    
    export function generateItems(_currentItems: DataList) {
        
        

        for (let showList in _currentItems) {

            //console.log(showList);
            let items: Item[] =  _currentItems[showList];

            let group: HTMLElement | null = null;

            if(showList) {
                group = createExistingList(items);

            }

            let unlistedList: HTMLUListElement | null = document.querySelector("ul#" + showList);

            if (unlistedList && group)
            unlistedList.appendChild(group);
        }
    }

    function createExistingList (_items: Item[]): HTMLElement | null {
        let group: HTMLLIElement = document.createElement("li");
        for(let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            let textP: HTMLParagraphElement = document.createElement("p");
            textP.innerHTML = "test";

            group.appendChild(checkbox);
            group.appendChild(textP);
        }
    
        return group;
    }
}

