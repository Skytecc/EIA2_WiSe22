"use strict";
/*
Aufgabe: <L09.2_Vogelhaus>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <Stackoverflow, W3schools, developer.mozilla.org>
*/
var L09_Part2;
(function (L09_Part2) {
    let canvas = document.querySelector("#canvasArt");
    L09_Part2.crc2 = canvas.getContext("2d");
    let golden = 4;
    let horizon = L09_Part2.crc2.canvas.height * golden;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let getImageData;
    let snowflakesArray = [];
    let gBird = [];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        drawGradientSnow();
        drawSun({ x: 100, y: 90 });
        drawCloud({ x: 1300, y: 130 }, { x: 250, y: 75 });
        drawMountain({ x: 0, y: horizon }, 150, 250, "grey", "lightgrey");
        drawTrees();
        birdHouse();
        drawSnowman({ x: 800, y: 750 });
        getImageData = L09_Part2.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //drawGroundBird({ x: 985, y: 810 }, "black");
        //test({ x: 985, y: 810 });
        //drawBirds();
        //test();
        //drawSnowflakes({ x: canvas.width, y: 800 }, { x: 200, y: 200 });
        drawSnowflake02(20);
        /* for (let snowflake of snowflakesArray) {

            //let particle: Path2D = new Path2D();
   
               //let x: number = (Math.random() - 1) * canvas.width;
               //let y: number = - (Math.random() * horizon);

            snowflake.drawSnowflakes(20, horizon);

        } */
        drawBird(15);
        /*  for (let groundbirds of gBird) {
             groundbirds.drawBirds("black");
         }
  */
        window.setInterval(update, 20);
    }
    function update() {
        console.log("Update");
        L09_Part2.crc2.putImageData(getImageData, 0, 0);
        let particle = new Path2D();
        let x = (Math.random() - 1) * canvas.width;
        let y = -(Math.random() * horizon);
        for (let snowflake of snowflakesArray) {
            snowflake.moveSnowflake(10);
            snowflake.drawSnowflakes(20, horizon);
        }
        for (let groundbirds of gBird) {
            groundbirds.drawBirds();
            groundbirds.moveBirds();
        }
    }
    function drawGradientSnow() {
        L09_Part2.crc2.save();
        let snowGradient = L09_Part2.crc2.createLinearGradient(0, 0, 0, L09_Part2.crc2.canvas.height);
        snowGradient.addColorStop(1, "rgb(168, 168, 168)");
        snowGradient.addColorStop(0.5, "white");
        snowGradient.addColorStop(0, "lightblue");
        L09_Part2.crc2.fillStyle = snowGradient;
        L09_Part2.crc2.fillRect(0, 0, L09_Part2.crc2.canvas.width, L09_Part2.crc2.canvas.height);
        console.log("draw snow");
        L09_Part2.crc2.restore();
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 50;
        let r2 = 300;
        let sunGradient = L09_Part2.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        //sunGradient.addColorStop(0, "rgb(255, 245, 111)");
        //sunGradient.addColorStop(1, "rgb(255, 218, 148)");
        sunGradient.addColorStop(0, "HSLA(56, 80%, 71%, 1");
        sunGradient.addColorStop(1, "HSLA(39, 100%, 79%, 0");
        L09_Part2.crc2.save();
        L09_Part2.crc2.translate(_position.x, _position.y);
        L09_Part2.crc2.fillStyle = sunGradient;
        L09_Part2.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_Part2.crc2.fill();
        L09_Part2.crc2.restore();
    }
    function drawMountain(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Berge");
        let stepMin = 10;
        let stepMax = 50;
        let x = 0;
        L09_Part2.crc2.save();
        L09_Part2.crc2.translate(_position.x, _position.y);
        L09_Part2.crc2.beginPath();
        L09_Part2.crc2.moveTo(0, 0);
        L09_Part2.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_Part2.crc2.lineTo(x, y);
        } while (x < L09_Part2.crc2.canvas.width);
        L09_Part2.crc2.lineTo(x, 0);
        L09_Part2.crc2.closePath();
        let gradientMountain = L09_Part2.crc2.createLinearGradient(0, 0, 0, -_max);
        gradientMountain.addColorStop(0, _colorLow);
        gradientMountain.addColorStop(1, _colorHigh);
        L09_Part2.crc2.fillStyle = gradientMountain;
        L09_Part2.crc2.fill();
        L09_Part2.crc2.restore();
    }
    function drawTrees() {
        let nTrees = Math.random() * 20;
        for (let drawn = 0; drawn <= nTrees; drawn++) {
            L09_Part2.crc2.save();
            let x = Math.round(Math.random() * innerWidth);
            let y = horizon;
            //console.log(x, y);
            drawTree({ x: x, y: y });
            L09_Part2.crc2.restore();
        }
        L09_Part2.crc2.restore();
    }
    function drawTree(_position) {
        console.log(_position.y + 30);
        L09_Part2.crc2.beginPath();
        L09_Part2.crc2.fillStyle = "rgb(107, 57, 9)";
        //crc2.fill();
        L09_Part2.crc2.rect(_position.x + 35, _position.y + 30, 30, 50);
        L09_Part2.crc2.strokeStyle = "HSLA(0, 0%, 0%, 0.6";
        L09_Part2.crc2.fillRect(_position.x + 35, _position.y + 30, 30, 50);
        L09_Part2.crc2.stroke();
        L09_Part2.crc2.closePath();
        L09_Part2.crc2.save();
        L09_Part2.crc2.translate(_position.x, _position.y);
        let gradientTree = L09_Part2.crc2.createLinearGradient(0, 0, 0, -180);
        L09_Part2.crc2.beginPath();
        L09_Part2.crc2.moveTo(0, 50);
        L09_Part2.crc2.lineTo(50, -180);
        L09_Part2.crc2.lineTo(100, 50);
        L09_Part2.crc2.lineTo(0, 50);
        gradientTree.addColorStop(1, "HSLA(0, 0%, 100%, 1");
        gradientTree.addColorStop(0.5, "HSLA(0, 0%, 100%, 1");
        gradientTree.addColorStop(0, "darkgreen");
        L09_Part2.crc2.fillStyle = gradientTree;
        L09_Part2.crc2.strokeStyle = "HSLA(0, 0%, 0%, 0.3";
        L09_Part2.crc2.fill();
        L09_Part2.crc2.stroke();
        L09_Part2.crc2.closePath();
        L09_Part2.crc2.restore();
    }
    function drawBirds() {
        let nBirdsOut = 20;
        let nBirdHousing = 1;
        for (let drawn = 0; drawn <= nBirdsOut; drawn++) {
            //let x: number = Math.round(Math.random() * innerWidth);
            let x = getRandomInt(900, innerWidth);
            let y = getRandomInt(horizon, 800);
            let rgba1 = Math.floor(Math.random() * 255);
            let rgba2 = Math.floor(Math.random() * 255);
            let rgba3 = Math.floor(Math.random() * 255);
            let color1 = "RGB" + "(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";
            drawGroundBird({ x: x, y: y }, color1);
            L09_Part2.crc2.restore();
        }
        for (let drawn = 0; drawn <= nBirdHousing; drawn++) {
            let x = getRandomInt(500, 450);
            let y = getRandomInt(650, 660);
            let rgba1 = Math.floor(Math.random() * 255);
            let rgba2 = Math.floor(Math.random() * 255);
            let rgba3 = Math.floor(Math.random() * 255);
            let color1 = "RGB" + "(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";
            drawGroundBird({ x: x, y: y }, color1);
            L09_Part2.crc2.restore();
        }
        L09_Part2.crc2.restore();
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
        let gradientCloud = L09_Part2.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradientCloud.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L09_Part2.crc2.save();
        L09_Part2.crc2.translate(_position.x, _position.y);
        L09_Part2.crc2.fillStyle = gradientCloud;
        for (let i = 0; i < numberParticles; i++) {
            L09_Part2.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L09_Part2.crc2.translate(x, y);
            L09_Part2.crc2.fill(particle);
            L09_Part2.crc2.restore();
        }
        L09_Part2.crc2.restore();
    }
    function birdHouse() {
        console.log("birdhouse!");
        let x = 410;
        let y = horizon - 50;
        L09_Part2.crc2.save();
        L09_Part2.crc2.beginPath();
        L09_Part2.crc2.fillStyle = "rgb(107, 57, 9)";
        L09_Part2.crc2.fillRect(500, 750, 20, 150);
        L09_Part2.crc2.closePath();
        L09_Part2.crc2.beginPath();
        L09_Part2.crc2.fillStyle = "rgb(107, 57, 9)";
        L09_Part2.crc2.fillRect(420, 650, 175, 120);
        L09_Part2.crc2.closePath();
        L09_Part2.crc2.translate(x, y);
        L09_Part2.crc2.beginPath();
        L09_Part2.crc2.moveTo(0, 100);
        L09_Part2.crc2.lineTo(100, 0);
        L09_Part2.crc2.lineTo(200, 100);
        L09_Part2.crc2.lineTo(0, 100);
        L09_Part2.crc2.fillStyle = "rgb(76, 40, 6)";
        L09_Part2.crc2.stroke();
        L09_Part2.crc2.fill();
        L09_Part2.crc2.closePath();
        L09_Part2.crc2.restore();
    }
    function drawArc(_x, _y, _radius, _startAngle, _endAngle, _color) {
        L09_Part2.crc2.beginPath();
        L09_Part2.crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
        L09_Part2.crc2.fillStyle = _color;
        L09_Part2.crc2.fill();
        L09_Part2.crc2.closePath();
    }
    function drawEllipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _counterclockwise, _color) {
        L09_Part2.crc2.beginPath();
        L09_Part2.crc2.ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _counterclockwise);
        L09_Part2.crc2.fillStyle = _color;
        L09_Part2.crc2.fill();
        L09_Part2.crc2.closePath();
    }
    function drawRect(_position, _size, _color) {
        L09_Part2.crc2.beginPath();
        L09_Part2.crc2.fillStyle = _color;
        L09_Part2.crc2.fillRect(_position.x, _position.y, _size.x, _size.y);
        L09_Part2.crc2.fill();
        L09_Part2.crc2.closePath();
    }
    function drawTriangle(_moveTo, _lineTo1, _lineTo2, _lineTo3, _color) {
        L09_Part2.crc2.beginPath();
        L09_Part2.crc2.moveTo(_moveTo.x, _moveTo.y);
        L09_Part2.crc2.lineTo(_lineTo1.x, _lineTo1.y);
        L09_Part2.crc2.lineTo(_lineTo2.x, _lineTo2.y);
        L09_Part2.crc2.lineTo(_lineTo3.x, _lineTo3.y);
        L09_Part2.crc2.fillStyle = _color;
        L09_Part2.crc2.fill();
        L09_Part2.crc2.closePath();
    }
    function drawSnowman(_position) {
        L09_Part2.crc2.save();
        L09_Part2.crc2.translate(_position.x, _position.y);
        //Head
        drawArc(0, -50, 50, 0, 2 * Math.PI * 2, "white");
        //Body
        drawArc(0, 80, 80, 0, 2 * Math.PI * 2, "white");
        // Eyes
        drawArc(-20, -60, 5, 0, 2 * Math.PI * 2, "black");
        drawArc(20, -60, 5, 0, 2 * Math.PI * 2, "black");
        //Mouth
        L09_Part2.crc2.beginPath();
        L09_Part2.crc2.lineWidth = 3;
        L09_Part2.crc2.moveTo(20, -30);
        L09_Part2.crc2.lineTo(-20, -30);
        L09_Part2.crc2.strokeStyle = "black";
        L09_Part2.crc2.stroke();
        L09_Part2.crc2.restore();
    }
    function drawGroundBird(_position, _color) {
        L09_Part2.crc2.save();
        L09_Part2.crc2.translate(_position.x, _position.y);
        // Bird head
        //drawArc(1000, 850, 20, 0, 2 * Math.PI * 2, "red");
        drawArc(15, 40, 20, 0, 2 * Math.PI * 2, _color);
        // Feet
        /*drawRect({ x: 1020, y: 880 }, { x: 3, y: 25 }, "black");
        drawRect({ x: 1030, y: 880 }, { x: 3, y: 25 }, "black");*/
        drawRect({ x: 30, y: 72 }, { x: 3, y: 25 }, "black");
        drawRect({ x: 15, y: 70 }, { x: 3, y: 25 }, "black");
        //crc2.fillRect(1050, 880, 3, 25);
        // Bird Body
        //drawEllipse(1020, 870, 30, 20, Math.PI * 0.20, 0, Math.PI * 360, false, "red");
        drawEllipse(25, 65, 30, 20, Math.PI * 0.20, 0, Math.PI * 360, false, _color);
        // Eye
        //drawArc(1000, 843, 3, 0, 2 * Math.PI * 2, "black");
        drawArc(15, 33, 3, 0, 2 * Math.PI * 2, "black");
        drawTriangle({ x: 0, y: 50 }, { x: -20, y: 40 }, { x: 0, y: 30 }, { x: 0, y: 0 }, "yellow");
        // Mouth
        /*crc2.beginPath();
        crc2.moveTo(0, 50);
        crc2.lineTo(-20, 40);
        crc2.lineTo(0, 30);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.closePath();*/
        L09_Part2.crc2.restore();
    }
    function drawSnowflakes(_position, _size) {
        console.log("snowflakes");
        let numberParticles = 100;
        let radiusParticle = 20;
        let particle = new Path2D();
        let gradientSnow = L09_Part2.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradientSnow.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradientSnow.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L09_Part2.crc2.save();
        L09_Part2.crc2.translate(_position.x, _position.y);
        L09_Part2.crc2.fillStyle = gradientSnow;
        for (let i = 0; i < numberParticles; i++) {
            L09_Part2.crc2.save();
            let x = (Math.random() - 1) * _position.x;
            let y = -(Math.random() * horizon);
            L09_Part2.crc2.translate(x, y);
            L09_Part2.crc2.fill(particle);
            L09_Part2.crc2.restore();
        }
        L09_Part2.crc2.restore();
    }
    function drawSnowflake02(_snowflakeNumber) {
        //let particle: Path2D = new Path2D();
        for (let i = 0; i < _snowflakeNumber; i++) {
            /* let x: number = (Math.random() - 1) * canvas.width;
            let y: number = - (Math.random() * horizon); */
            let x = Math.floor(Math.random() * canvas.width);
            let y = (Math.floor(Math.random() * horizon));
            console.log("push Snowflake");
            let snowflake = new L09_Part2.Snowflakes({ x: x, y: y }, { x: 0, y: 0 }, 10, horizon);
            snowflakesArray.push(snowflake);
        }
    }
    function drawBird(_gbirdNumber) {
        for (let i = 0; i < _gbirdNumber; i++) {
            let x = getRandomInt(900, innerWidth);
            let y = getRandomInt(horizon, 800);
            let velocity = getRandomInt(0, 10);
            console.log("push Bird");
            let rgba1 = Math.floor(Math.random() * 255);
            let rgba2 = Math.floor(Math.random() * 255);
            let rgba3 = Math.floor(Math.random() * 255);
            let color = "RGB" + "(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";
            let groundBirds = new L09_Part2.Birds({ x: x, y: y }, velocity, 15, color);
            gBird.push(groundBirds);
        }
    }
})(L09_Part2 || (L09_Part2 = {}));
//# sourceMappingURL=script.js.map