"use strict";
var L09_Oldfarm;
(function (L09_Oldfarm) {
    class Foodstock {
        type;
        amount;
        constructor(_type, _amount) {
            this.type = _type;
            this.amount = _amount;
        }
        showfood(_index) {
            let text = document.getElementById("foodAmount");
            let newText = document.createElement("div");
            newText.id = "divFood" + _index;
            _index++;
            newText.innerHTML = this.type + ": " + this.amount;
            text.appendChild(newText);
        }
    }
    L09_Oldfarm.Foodstock = Foodstock;
})(L09_Oldfarm || (L09_Oldfarm = {}));
//# sourceMappingURL=foodstock.js.map