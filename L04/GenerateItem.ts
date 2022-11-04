namespace L04_Einkaufsliste {
    
    export function generateItems(_currentItems: DataList) {
        
        

        for (let showList in _currentItems) {

            //console.log(showList);
            let items: Item[] =  _currentItems[showList];

            let group: HTMLElement | null = null;

            switch (showList) {
                case "existingList":
                    group = createExistingList(items);
                    break;
                    case "newList":
                        //group = createNewList();
                        break;
                    
            
                default:
                    break;
            }

            let unlistedList: HTMLUListElement | null = document.querySelector("ul#" + showList);

            if (unlistedList && group)
            unlistedList.appendChild(group);
        }
    }

    function createExistingList (_items: Item[]): HTMLElement | null {
    
        return null;
    }

    function createNewList (_items: Item[]): HTMLElement | null{
    
        return null;
    }
}

