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
        testGradient();
        test3();
        testCircle();
    }
    function testCircle() {
        //crc2.fillStyle = "#74847e";
        //crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        let radius = 500;
        let angle = Math.atan2(100, 300) + Math.PI / 2;
        let gx = radius * Math.cos(angle);
        let gy = radius * Math.sin(angle);
        let cx = (0 + 300) / 2;
        let cy = (100 + 200) / 2;
        let sizeCircle = Math.floor(Math.random() * 150);
        let xCircle = Math.floor(Math.random() * crc2.canvas.width);
        let yCircle = Math.floor(Math.random() * crc2.canvas.height);
        let bezierCpx1 = Math.floor(Math.random() * 100);
        let bezierCpy1 = Math.floor(Math.random() * 150);
        let bezierCpx2 = Math.floor(Math.random() * 200);
        let bezierCpy2 = Math.floor(Math.random() * 200);
        let bezierX = crc2.canvas.width;
        let bezierY = crc2.canvas.width;
        let gradientCircle = crc2.createLinearGradient(cx - gx, cy - gy, cx + gx, cy + gy);
        crc2.beginPath();
        crc2.arc(xCircle, yCircle, sizeCircle, 0, 1.5 * Math.PI);
        crc2.bezierCurveTo(bezierCpx1, bezierCpy1, bezierCpx2, bezierCpy2, bezierX, bezierY);
        gradientCircle.addColorStop;
        crc2.fillStyle = "black";
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
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
    function test3() {
        for (let i = 0; i < 20; i++) {
        }
    }
})(L08_Canvas || (L08_Canvas = {}));
//# sourceMappingURL=script.js.map