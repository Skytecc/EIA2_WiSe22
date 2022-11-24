"use strict";
var L08_Canvas;
(function (L08_Canvas) {
    let canvas = document.querySelector("#c");
    let crc2 = canvas.getContext("2d");
    var my_gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(1, "white");
    crc2.fillStyle = my_gradient;
})(L08_Canvas || (L08_Canvas = {}));
//# sourceMappingURL=script.js.map