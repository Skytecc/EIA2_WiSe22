namespace L08_Part2 {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("#canvasArt");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    let golden: number = 4;

    let horizon: number = crc2.canvas.height * golden;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Vector {
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

            drawTree({ x: x, y: y });

            crc2.restore();
        }

        crc2.restore();
    }

    function drawTree(_position: Vector): void {

        crc2.beginPath();
        crc2.fillStyle = "rgb(107, 57, 9)";
        //crc2.fill();
        crc2.rect(_position.x + 35, _position.y + 30, 30, 50);
        crc2.strokeStyle = "HSLA(0, 0%, 0%, 0.6";
        crc2.fillRect(_position.x + 35 , _position.y + 30, 30, 50);
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

    function drawSnowflakes(_position: Vector, _size: Vector): void {
        console.log("snowflakes");

        crc2.save();
        let numberParticle: number = 30;
        let radiusParticle: number = 50;

        let particle: Path2D = new Path2D();



    }

    function birdHouse (): void {

        console.log("birdhouse!");

        let x: number = Math.round(Math.random() * innerWidth);
        let y: number = horizon;

        crc2.save();

        crc2.beginPath();
        crc2.fillStyle = "rgb(107, 57, 9)";
        crc2.fillRect(500, 750, 20, 150);
        crc2.closePath();

        crc2.beginPath();
        crc2.fillRect(420, 650, 175, 120);


        crc2.restore();


    }
}