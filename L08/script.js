"use strict";
/*
Aufgabe: <L03_Einkaufsliste>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <Stackoverflow, W3schools>
*/
var L08_Canvas;
(function (L08_Canvas) {
    let canvas = document.querySelector("#c");
    let crc2 = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        //testfill();
        testGradient();
    }
    function testfill() {
        crc2.fillStyle = "#74847e";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function testGradient() {
        let radius = 500;
        let angle = Math.atan2(100, 300) + Math.PI / 2;
        let gx = radius * Math.cos(angle);
        let gy = radius * Math.sin(angle);
        let cx = (0 + 300) / 2;
        let cy = (100 + 200) / 2;
        //let myGradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 800);
        let myGradient = crc2.createLinearGradient(cx - gx, cy - gy, cx + gx, cy + gy);
        myGradient.addColorStop(0, "#0083bc");
        myGradient.addColorStop(1, "#41ff7b");
        myGradient.addColorStop(0.5, "#00bc97");
        crc2.fillStyle = myGradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
})(L08_Canvas || (L08_Canvas = {}));
//# sourceMappingURL=script.js.map