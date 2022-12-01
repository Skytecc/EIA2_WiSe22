"use strict";
var L08_Übung;
(function (L08_Übung) {
    let canvas = document.querySelector("#canvasArt");
    let crc2 = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        drawGradientSnow();
        drawSun({ x: 100, y: 90 });
        drawTree();
    }
    function drawGradientSnow() {
        let snowGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        snowGradient.addColorStop(1, "rgb(168, 168, 168)");
        snowGradient.addColorStop(0.5, "white");
        snowGradient.addColorStop(0, "lightblue");
        crc2.fillStyle = snowGradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        console.log("draw snow");
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 50;
        let r2 = 300;
        let sunGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        //sunGradient.addColorStop(0, "rgb(255, 245, 111)");
        //sunGradient.addColorStop(1, "rgb(255, 218, 148)");
        sunGradient.addColorStop(0, "HSLA(56, 80%, 71%, 1");
        sunGradient.addColorStop(1, "HSLA(39, 100%, 79%, 0");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = sunGradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawMountain() {
    }
    function drawTree() {
        crc2.beginPath();
        crc2.rect(500, 700, 50, 70);
        crc2.fillStyle = "rgb(107, 57, 9)";
        crc2.fill();
    }
    function drawCloud() {
    }
})(L08_Übung || (L08_Übung = {}));
//# sourceMappingURL=script.js.map