"use strict";
/*
Aufgabe: <L11_Vogelhaus>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <Stackoverflow, W3schools, developer.mozilla.org>
*/
var L11;
(function (L11) {
    let canvas = document.querySelector("#canvasArt");
    L11.crc2 = canvas.getContext("2d");
    let golden = 4;
    let horizon = L11.crc2.canvas.height * golden;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let getImageData;
    let moveables = [];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        drawGradientSnow();
        drawSun({ x: 100, y: 90 });
        drawCloud({ x: 1300, y: 130 }, { x: 250, y: 75 });
        drawMountain({ x: 0, y: horizon }, 150, 250, "grey", "lightgrey");
        drawTrees();
        birdHouse();
        drawSnowman({ x: 800, y: 750 });
        getImageData = L11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        drawSnowflake(20);
        drawGroundBird(5);
        drawFlyingBird(5);
        window.setInterval(update, 20);
    }
    function update() {
        console.log("Update");
        L11.crc2.putImageData(getImageData, 0, 0);
        for (let snowflake of moveables) {
            snowflake.move();
            snowflake.draw();
        }
        for (let groundbirds of moveables) {
            groundbirds.draw();
            groundbirds.move();
        }
        for (let flyingBirds of moveables) {
            flyingBirds.draw();
            flyingBirds.move();
        }
    }
    function drawGradientSnow() {
        L11.crc2.save();
        let snowGradient = L11.crc2.createLinearGradient(0, 0, 0, L11.crc2.canvas.height);
        snowGradient.addColorStop(1, "rgb(168, 168, 168)");
        snowGradient.addColorStop(0.5, "white");
        snowGradient.addColorStop(0, "lightblue");
        L11.crc2.fillStyle = snowGradient;
        L11.crc2.fillRect(0, 0, L11.crc2.canvas.width, L11.crc2.canvas.height);
        console.log("draw snow");
        L11.crc2.restore();
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 50;
        let r2 = 300;
        let sunGradient = L11.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        //sunGradient.addColorStop(0, "rgb(255, 245, 111)");
        //sunGradient.addColorStop(1, "rgb(255, 218, 148)");
        sunGradient.addColorStop(0, "HSLA(56, 80%, 71%, 1");
        sunGradient.addColorStop(1, "HSLA(39, 100%, 79%, 0");
        L11.crc2.save();
        L11.crc2.translate(_position.x, _position.y);
        L11.crc2.fillStyle = sunGradient;
        L11.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L11.crc2.fill();
        L11.crc2.restore();
    }
    function drawMountain(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Berge");
        let stepMin = 10;
        let stepMax = 50;
        let x = 0;
        L11.crc2.save();
        L11.crc2.translate(_position.x, _position.y);
        L11.crc2.beginPath();
        L11.crc2.moveTo(0, 0);
        L11.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L11.crc2.lineTo(x, y);
        } while (x < L11.crc2.canvas.width);
        L11.crc2.lineTo(x, 0);
        L11.crc2.closePath();
        let gradientMountain = L11.crc2.createLinearGradient(0, 0, 0, -_max);
        gradientMountain.addColorStop(0, _colorLow);
        gradientMountain.addColorStop(1, _colorHigh);
        L11.crc2.fillStyle = gradientMountain;
        L11.crc2.fill();
        L11.crc2.restore();
    }
    function drawTrees() {
        let nTrees = Math.random() * 20;
        for (let drawn = 0; drawn <= nTrees; drawn++) {
            L11.crc2.save();
            let x = Math.round(Math.random() * innerWidth);
            let y = horizon;
            //console.log(x, y);
            drawTree({ x: x, y: y });
            L11.crc2.restore();
        }
        L11.crc2.restore();
    }
    function drawTree(_position) {
        console.log(_position.y + 30);
        L11.crc2.beginPath();
        L11.crc2.fillStyle = "rgb(107, 57, 9)";
        //crc2.fill();
        L11.crc2.rect(_position.x + 35, _position.y + 30, 30, 50);
        L11.crc2.strokeStyle = "HSLA(0, 0%, 0%, 0.6";
        L11.crc2.fillRect(_position.x + 35, _position.y + 30, 30, 50);
        L11.crc2.stroke();
        L11.crc2.closePath();
        L11.crc2.save();
        L11.crc2.translate(_position.x, _position.y);
        let gradientTree = L11.crc2.createLinearGradient(0, 0, 0, -180);
        L11.crc2.beginPath();
        L11.crc2.moveTo(0, 50);
        L11.crc2.lineTo(50, -180);
        L11.crc2.lineTo(100, 50);
        L11.crc2.lineTo(0, 50);
        gradientTree.addColorStop(1, "HSLA(0, 0%, 100%, 1");
        gradientTree.addColorStop(0.5, "HSLA(0, 0%, 100%, 1");
        gradientTree.addColorStop(0, "darkgreen");
        L11.crc2.fillStyle = gradientTree;
        L11.crc2.strokeStyle = "HSLA(0, 0%, 0%, 0.3";
        L11.crc2.fill();
        L11.crc2.stroke();
        L11.crc2.closePath();
        L11.crc2.restore();
    }
    function getRandomInt(_min, _max) {
        _min = Math.ceil(_min);
        _max = Math.floor(_max);
        return Math.floor(Math.random() * (_max - _min + 1)) + _min;
    }
    function drawCloud(_position, _size) {
        console.log("cloud", _position, _size);
        let numberParticles = 30;
        let radiusParticle = 70;
        let particle = new Path2D();
        let gradientCloud = L11.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradientCloud.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L11.crc2.save();
        L11.crc2.translate(_position.x, _position.y);
        L11.crc2.fillStyle = gradientCloud;
        for (let i = 0; i < numberParticles; i++) {
            L11.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L11.crc2.translate(x, y);
            L11.crc2.fill(particle);
            L11.crc2.restore();
        }
        L11.crc2.restore();
    }
    function birdHouse() {
        console.log("birdhouse!");
        let x = 410;
        let y = horizon - 50;
        L11.crc2.save();
        L11.crc2.beginPath();
        L11.crc2.fillStyle = "rgb(107, 57, 9)";
        L11.crc2.fillRect(500, 750, 20, 150);
        L11.crc2.closePath();
        L11.crc2.beginPath();
        L11.crc2.fillStyle = "rgb(107, 57, 9)";
        L11.crc2.fillRect(420, 650, 175, 120);
        L11.crc2.closePath();
        L11.crc2.translate(x, y);
        L11.crc2.beginPath();
        L11.crc2.moveTo(0, 100);
        L11.crc2.lineTo(100, 0);
        L11.crc2.lineTo(200, 100);
        L11.crc2.lineTo(0, 100);
        L11.crc2.fillStyle = "rgb(76, 40, 6)";
        L11.crc2.stroke();
        L11.crc2.fill();
        L11.crc2.closePath();
        L11.crc2.restore();
    }
    function drawArc(_x, _y, _radius, _startAngle, _endAngle, _color) {
        L11.crc2.beginPath();
        L11.crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
        L11.crc2.fillStyle = _color;
        L11.crc2.fill();
        L11.crc2.closePath();
    }
    function drawEllipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _counterclockwise, _color) {
        L11.crc2.beginPath();
        L11.crc2.ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _counterclockwise);
        L11.crc2.fillStyle = _color;
        L11.crc2.fill();
        L11.crc2.closePath();
    }
    function drawRect(_position, _size, _color) {
        L11.crc2.beginPath();
        L11.crc2.fillStyle = _color;
        L11.crc2.fillRect(_position.x, _position.y, _size.x, _size.y);
        L11.crc2.fill();
        L11.crc2.closePath();
    }
    function drawTriangle(_moveTo, _lineTo1, _lineTo2, _lineTo3, _color) {
        L11.crc2.beginPath();
        L11.crc2.moveTo(_moveTo.x, _moveTo.y);
        L11.crc2.lineTo(_lineTo1.x, _lineTo1.y);
        L11.crc2.lineTo(_lineTo2.x, _lineTo2.y);
        L11.crc2.lineTo(_lineTo3.x, _lineTo3.y);
        L11.crc2.fillStyle = _color;
        L11.crc2.fill();
        L11.crc2.closePath();
    }
    function drawSnowman(_position) {
        L11.crc2.save();
        L11.crc2.translate(_position.x, _position.y);
        //Head
        drawArc(0, -50, 50, 0, 2 * Math.PI * 2, "white");
        //Body
        drawArc(0, 80, 80, 0, 2 * Math.PI * 2, "white");
        // Eyes
        drawArc(-20, -60, 5, 0, 2 * Math.PI * 2, "black");
        drawArc(20, -60, 5, 0, 2 * Math.PI * 2, "black");
        //Mouth
        L11.crc2.beginPath();
        L11.crc2.lineWidth = 3;
        L11.crc2.moveTo(20, -30);
        L11.crc2.lineTo(-20, -30);
        L11.crc2.strokeStyle = "black";
        L11.crc2.stroke();
        L11.crc2.restore();
    }
    function drawSnowflake(_snowflakeNumber) {
        //let particle: Path2D = new Path2D();
        for (let i = 0; i < _snowflakeNumber; i++) {
            /* let x: number = (Math.random() - 1) * canvas.width;
            let y: number = - (Math.random() * horizon); */
            let x = Math.floor(Math.random() * canvas.width);
            let y = (Math.floor(Math.random() * horizon));
            console.log("push Snowflake");
            let snowflake = new L11.Snowflakes({ x: x, y: y }, 5, 10, horizon, 20);
            moveables.push(snowflake);
        }
    }
    function drawFlyingBird(_fbirdNumber) {
        for (let i = 0; i < _fbirdNumber; i++) {
            let x = getRandomInt(900, innerWidth);
            let y = getRandomInt(horizon / 2, 0);
            let velocity = getRandomInt(1, 5);
            console.log("push Bird");
            let rgba1 = Math.floor(Math.random() * 255);
            let rgba2 = Math.floor(Math.random() * 255);
            let rgba3 = Math.floor(Math.random() * 255);
            let color = "RGB" + "(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";
            let flyingBirds = new L11.FlyingBirds({ x: x, y: y }, velocity, 15, color);
            moveables.push(flyingBirds);
        }
    }
    function drawGroundBird(_gbirdNumber) {
        for (let i = 0; i < _gbirdNumber; i++) {
            let x = getRandomInt(900, innerWidth);
            let y = getRandomInt(horizon, 800);
            let velocity = getRandomInt(0, 10);
            console.log("push Bird");
            let rgba1 = Math.floor(Math.random() * 255);
            let rgba2 = Math.floor(Math.random() * 255);
            let rgba3 = Math.floor(Math.random() * 255);
            let color = "RGB" + "(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";
            let groundBirds = new L11.GroundBirds({ x: x, y: y }, velocity, 15, color);
            moveables.push(groundBirds);
        }
    }
})(L11 || (L11 = {}));
//# sourceMappingURL=script.js.map