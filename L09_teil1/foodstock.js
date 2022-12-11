"use strict";
var L09_01_Oldfarm;
(function (L09_01_Oldfarm) {
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
    L09_01_Oldfarm.Foodstock = Foodstock;
})(L09_01_Oldfarm || (L09_01_Oldfarm = {}));
//# sourceMappingURL=foodstock.js.map