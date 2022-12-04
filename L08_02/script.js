"use strict";
/*
Aufgabe: <L08.2_Vogelhaus>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <Stackoverflow, W3schools, developer.mozilla.org>
*/
var L08_Part2;
(function (L08_Part2) {
    let canvas = document.querySelector("#canvasArt");
    let crc2 = canvas.getContext("2d");
    let golden = 4;
    let horizon = crc2.canvas.height * golden;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        drawGradientSnow();
        drawSun({ x: 100, y: 90 });
        drawCloud({ x: 1300, y: 130 }, { x: 250, y: 75 });
        drawSnowflakes({ x: canvas.width, y: 800 }, { x: 200, y: 200 });
        drawMountain({ x: 0, y: horizon }, 150, 250, "grey", "lightgrey");
        drawTrees();
        birdHouse();
        drawSnowman({ x: 800, y: 750 });
        drawGroundBird({ x: 985, y: 810 });
    }
    function drawGradientSnow() {
        crc2.save();
        let snowGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        snowGradient.addColorStop(1, "rgb(168, 168, 168)");
        snowGradient.addColorStop(0.5, "white");
        snowGradient.addColorStop(0, "lightblue");
        crc2.fillStyle = snowGradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        console.log("draw snow");
        crc2.restore();
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
    function drawMountain(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Berge");
        let stepMin = 10;
        let stepMax = 50;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradientMountain = crc2.createLinearGradient(0, 0, 0, -_max);
        gradientMountain.addColorStop(0, _colorLow);
        gradientMountain.addColorStop(1, _colorHigh);
        crc2.fillStyle = gradientMountain;
        crc2.fill();
        crc2.restore();
    }
    function drawTrees() {
        let nTrees = Math.random() * 20;
        for (let drawn = 0; drawn <= nTrees; drawn++) {
            crc2.save();
            let x = Math.round(Math.random() * innerWidth);
            let y = horizon;
            //console.log(x, y);
            drawTree({ x: x, y: y });
            crc2.restore();
        }
        crc2.restore();
    }
    function drawTree(_position) {
        console.log(_position.y + 30);
        crc2.beginPath();
        crc2.fillStyle = "rgb(107, 57, 9)";
        //crc2.fill();
        crc2.rect(_position.x + 35, _position.y + 30, 30, 50);
        crc2.strokeStyle = "HSLA(0, 0%, 0%, 0.6";
        crc2.fillRect(_position.x + 35, _position.y + 30, 30, 50);
        crc2.stroke();
        crc2.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        let gradientTree = crc2.createLinearGradient(0, 0, 0, -180);
        crc2.beginPath();
        crc2.moveTo(0, 50);
        crc2.lineTo(50, -180);
        crc2.lineTo(100, 50);
        crc2.lineTo(0, 50);
        gradientTree.addColorStop(1, "HSLA(0, 0%, 100%, 1");
        gradientTree.addColorStop(0.5, "HSLA(0, 0%, 100%, 1");
        gradientTree.addColorStop(0, "darkgreen");
        crc2.fillStyle = gradientTree;
        crc2.strokeStyle = "HSLA(0, 0%, 0%, 0.3";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
    }
    function drawBirds() {
    }
    function drawTreeBackline() {
    }
    function drawCloud(_position, _size) {
        console.log("cloud", _position, _size);
        let numberParticles = 30;
        let radiusParticle = 70;
        let particle = new Path2D();
        let gradientCloud = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradientCloud.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradientCloud;
        for (let i = 0; i < numberParticles; i++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawSnowflakes(_position, _size) {
        console.log("snowflakes");
        let numberParticles = 100;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradientSnow = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradientSnow.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradientSnow.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradientSnow;
        for (let i = 0; i < numberParticles; i++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _position.x;
            let y = -(Math.random() * horizon);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function birdHouse() {
        console.log("birdhouse!");
        let x = 410;
        let y = horizon - 50;
        crc2.save();
        crc2.beginPath();
        crc2.fillStyle = "rgb(107, 57, 9)";
        crc2.fillRect(500, 750, 20, 150);
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "rgb(107, 57, 9)";
        crc2.fillRect(420, 650, 175, 120);
        crc2.closePath();
        crc2.translate(x, y);
        crc2.beginPath();
        crc2.moveTo(0, 100);
        crc2.lineTo(100, 0);
        crc2.lineTo(200, 100);
        crc2.lineTo(0, 100);
        crc2.fillStyle = "rgb(76, 40, 6)";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawArc(_x, _y, _radius, _startAngle, _endAngle, _color) {
        crc2.beginPath();
        crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.closePath();
    }
    function drawEllipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _counterclockwise, _color) {
        crc2.beginPath();
        crc2.ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _counterclockwise);
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.closePath();
    }
    function drawRect(_position, _size, _color) {
        crc2.beginPath();
        crc2.fillStyle = _color;
        crc2.fillRect(_position.x, _position.y, _size.x, _size.y);
        crc2.fill();
        crc2.closePath();
    }
    function drawSnowman(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        //Head
        drawArc(0, -50, 50, 0, 2 * Math.PI * 2, "white");
        //Body
        drawArc(0, 80, 80, 0, 2 * Math.PI * 2, "white");
        // Eyes
        drawArc(-20, -60, 5, 0, 2 * Math.PI * 2, "black");
        drawArc(20, -60, 5, 0, 2 * Math.PI * 2, "black");
        //Mouth
        crc2.beginPath();
        crc2.lineWidth = 3;
        crc2.moveTo(20, -30);
        crc2.lineTo(-20, -30);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.restore();
    }
    function drawGroundBird(_position) {
        crc2.save();
        // Bird head
        drawArc(1000, 850, 20, 0, 2 * Math.PI * 2, "red");
        // Feet
        drawRect({ x: 1020, y: 880 }, { x: 3, y: 25 }, "black");
        drawRect({ x: 1030, y: 880 }, { x: 3, y: 25 }, "black");
        //crc2.fillRect(1050, 880, 3, 25);
        // Bird Body
        drawEllipse(1020, 870, 30, 20, Math.PI * 0.20, 0, Math.PI * 360, false, "red");
        // Eye
        drawArc(1000, 843, 3, 0, 2 * Math.PI * 2, "black");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        // Mouth
        crc2.beginPath();
        crc2.moveTo(0, 50);
        crc2.lineTo(-20, 40);
        crc2.lineTo(0, 30);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
})(L08_Part2 || (L08_Part2 = {}));
//# sourceMappingURL=script.js.map