"use strict";
var L04_Einkaufsliste;
(function (L04_Einkaufsliste) {
    function generateItems(_currentItems) {
        for (let showList in _currentItems) {
            //console.log(showList);
            let items = _currentItems[showList];
            let group = null;
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
            let unlistedList = document.querySelector("ul#" + showList);
            if (unlistedList && group)
                unlistedList.appendChild(group);
        }
    }
    L04_Einkaufsliste.generateItems = generateItems;
    function createExistingList(_items) {
        return null;
    }
})(L04_Einkaufsliste || (L04_Einkaufsliste = {}));
//# sourceMappingURL=GenerateItem.js.map