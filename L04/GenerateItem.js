"use strict";
var L04_Einkaufsliste;
(function (L04_Einkaufsliste) {
    function generateItems(_currentItems) {
        for (let showList in _currentItems) {
            //console.log(showList);
            let items = _currentItems[showList];
            let group = null;
            if (showList) {
                group = createExistingList(items);
            }
            let unlistedList = document.querySelector("ul#" + showList);
            if (unlistedList && group)
                unlistedList.appendChild(group);
        }
    }
    L04_Einkaufsliste.generateItems = generateItems;
    function createExistingList(_items) {
        let group = document.createElement("li");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            let textP = document.createElement("p");
            textP.innerHTML = "test";
            group.appendChild(checkbox);
            group.appendChild(textP);
        }
        return group;
    }
})(L04_Einkaufsliste || (L04_Einkaufsliste = {}));
//# sourceMappingURL=GenerateItem.js.map