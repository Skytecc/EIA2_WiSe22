"use strict";
/*
Aufgabe: <L03_Einkaufsliste>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <>
*/
var L08_Vogelhaus;
(function (L08_Vogelhaus) {
    let canvas = document.querySelector("#canvasArt");
    let crc2 = canvas.getContext("2d");
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        drawGradientSnow();
    }
    function drawGradientSnow() {
        let snowGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        snowGradient.addColorStop(1, "white");
        snowGradient.addColorStop(0.5, "lightgrey");
        snowGradient.addColorStop(0, "lightblue");
        crc2.fillStyle = snowGradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        console.log("draw snow");
    }
})(L08_Vogelhaus || (L08_Vogelhaus = {}));
//# sourceMappingURL=script.js.map