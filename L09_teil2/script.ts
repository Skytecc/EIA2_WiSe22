/*
Aufgabe: <L09.2_Vogelhaus>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <Stackoverflow, W3schools, developer.mozilla.org>
*/
namespace L09_Part2 {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("#canvasArt");
    export let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    let golden: number = 4;

    let horizon: number = crc2.canvas.height * golden;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let getImageData: ImageData;

    let snowflakesArray: Snowflakes[] = [];

    let gBird: Birds[] = [];

    export interface Vector {
        x: number;
        y: number;
    }


    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        drawGradientSnow();

        drawSun({ x: 100, y: 90 });

        drawCloud({ x: 1300, y: 130 }, { x: 250, y: 75 });

        drawMountain({ x: 0, y: horizon }, 150, 250, "grey", "lightgrey");

        drawTrees();

        birdHouse();

        drawSnowman({ x: 800, y: 750 });

        getImageData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //drawGroundBird({ x: 985, y: 810 }, "black");
        //test({ x: 985, y: 810 });
        //drawBirds();
        //test();
        //drawSnowflakes({ x: canvas.width, y: 800 }, { x: 200, y: 200 });

        drawSnowflake(20);

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

    function update(): void {
        console.log("Update");
        crc2.putImageData(getImageData, 0, 0);


        for (let snowflake of snowflakesArray) {

            snowflake.moveSnowflake();

            snowflake.drawSnowflakes(20, horizon);

        }

        for (let groundbirds of gBird) {
            
            groundbirds.drawBirds();

            groundbirds.moveBirds();
        }

    }

    function drawGradientSnow(): void {

        crc2.save();

        let snowGradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        snowGradient.addColorStop(1, "rgb(168, 168, 168)");
        snowGradient.addColorStop(0.5, "white");
        snowGradient.addColorStop(0, "lightblue");

        crc2.fillStyle = snowGradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        console.log("draw snow");

        crc2.restore();
    }

    function drawSun(_position: Vector): void {

        console.log("Sun", _position);

        let r1: number = 50;
        let r2: number = 300;

        let sunGradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

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

    function drawMountain(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {

        console.log("Berge");

        let stepMin: number = 10;
        let stepMax: number = 50;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);


            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);


        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradientMountain: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradientMountain.addColorStop(0, _colorLow);
        gradientMountain.addColorStop(1, _colorHigh);

        crc2.fillStyle = gradientMountain;
        crc2.fill();

        crc2.restore();
    }

    function drawTrees(): void {
        let nTrees: number = Math.random() * 20;

        for (let drawn: number = 0; drawn <= nTrees; drawn++) {
            crc2.save();

            let x: number = Math.round(Math.random() * innerWidth);
            let y: number = horizon;
            //console.log(x, y);

            drawTree({ x: x, y: y });

            crc2.restore();
        }

        crc2.restore();
    }

    function drawTree(_position: Vector): void {

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

        let gradientTree: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -180);

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

    function drawBirds(): void {

        let nBirdsOut: number = 20;
        let nBirdHousing: number = 1;


        for (let drawn: number = 0; drawn <= nBirdsOut; drawn++) {

            //let x: number = Math.round(Math.random() * innerWidth);
            let x: number = getRandomInt(900, innerWidth);
            let y: number = getRandomInt(horizon, 800);

            let rgba1: number = Math.floor(Math.random() * 255);
            let rgba2: number = Math.floor(Math.random() * 255);
            let rgba3: number = Math.floor(Math.random() * 255);

            let color1: string = "RGB" + "(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";

            drawGroundBird({ x: x, y: y }, color1);

            crc2.restore();
        }

        for (let drawn: number = 0; drawn <= nBirdHousing; drawn++) {

            let x: number = getRandomInt(500, 450);
            let y: number = getRandomInt(650, 660);

            let rgba1: number = Math.floor(Math.random() * 255);
            let rgba2: number = Math.floor(Math.random() * 255);
            let rgba3: number = Math.floor(Math.random() * 255);

            let color1: string = "RGB" + "(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";

            drawGroundBird({ x: x, y: y }, color1);

            crc2.restore();
        }

        crc2.restore();
    }

    function getRandomInt(_min: number, _max: number): number {
        _min = Math.ceil(_min);
        _max = Math.floor(_max);
        return Math.floor(Math.random() * (_max - _min + 1)) + _min;
    }

    function drawCloud(_position: Vector, _size: Vector): void {

        console.log("cloud", _position, _size);

        let numberParticles: number = 30;
        let radiusParticle: number = 70;

        let particle: Path2D = new Path2D();
        let gradientCloud: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradientCloud.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradientCloud;

        for (let i: number = 0; i < numberParticles; i++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }

        crc2.restore();

    }


    function birdHouse(): void {

        console.log("birdhouse!");

        let x: number = 410;
        let y: number = horizon - 50;

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

    function drawArc(_x: number, _y: number, _radius: number, _startAngle: number, _endAngle: number, _color: string): void {
        crc2.beginPath();
        crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.closePath();
    }

    function drawEllipse(_x: number, _y: number, _radiusX: number, _radiusY: number, _rotation: number, _startAngle: number, _endAngle: number, _counterclockwise: boolean, _color: string): void {

        crc2.beginPath();
        crc2.ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _counterclockwise);
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.closePath();

    }

    function drawRect(_position: Vector, _size: Vector, _color: string): void {

        crc2.beginPath();
        crc2.fillStyle = _color;
        crc2.fillRect(_position.x, _position.y, _size.x, _size.y);
        crc2.fill();
        crc2.closePath();
    }

    function drawTriangle(_moveTo: Vector, _lineTo1: Vector, _lineTo2: Vector, _lineTo3: Vector, _color: string): void {

        crc2.beginPath();
        crc2.moveTo(_moveTo.x, _moveTo.y);
        crc2.lineTo(_lineTo1.x, _lineTo1.y);
        crc2.lineTo(_lineTo2.x, _lineTo2.y);
        crc2.lineTo(_lineTo3.x, _lineTo3.y);
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.closePath();

    }


    function drawSnowman(_position: Vector): void {

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

    function drawGroundBird(_position: Vector, _color: string): void {

        crc2.save();
        crc2.translate(_position.x, _position.y);


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

        crc2.restore();

    }

    function drawSnowflakes(_position: Vector, _size: Vector): void {
        console.log("snowflakes");

        let numberParticles: number = 100;
        let radiusParticle: number = 20;

        let particle: Path2D = new Path2D();
        let gradientSnow: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradientSnow.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradientSnow.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradientSnow;


        for (let i: number = 0; i < numberParticles; i++) {
            crc2.save();
            let x: number = (Math.random() - 1) * _position.x;
            let y: number = - (Math.random() * horizon);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }

        crc2.restore();

    }

    function drawSnowflake(_snowflakeNumber: number): void {

        //let particle: Path2D = new Path2D();


        for (let i: number = 0; i < _snowflakeNumber; i++) {

            /* let x: number = (Math.random() - 1) * canvas.width;
            let y: number = - (Math.random() * horizon); */

            let x: number = Math.floor(Math.random() * canvas.width);
            let y: number = (Math.floor(Math.random() * horizon));

            console.log("push Snowflake");

            let snowflake: Snowflakes = new Snowflakes({ x: x, y: y }, { x: 0, y: 0 }, 10);

            snowflakesArray.push(snowflake);

        }
    }



    function drawBird(_gbirdNumber: number): void {

        for (let i: number = 0; i < _gbirdNumber; i++) {

            let x: number = getRandomInt(900, innerWidth);
            let y: number = getRandomInt(horizon, 800);

            let velocity: number = getRandomInt(0, 10);

            console.log("push Bird");

            let rgba1: number = Math.floor(Math.random() * 255);
            let rgba2: number = Math.floor(Math.random() * 255);
            let rgba3: number = Math.floor(Math.random() * 255);

            let color: string = "RGB" + "(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";

            let groundBirds: Birds = new Birds({ x: x, y: y }, velocity, 15, color);

            gBird.push(groundBirds);
        }

    }



}

