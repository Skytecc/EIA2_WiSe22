/*
Aufgabe: <L03_Einkaufsliste>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <Stackoverflow, W3schools>
*/
namespace L08_Canvas {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("#c");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        testGradient();
        test3();
        testStroke();
        testTriangle();
        testTriangle2();
    }

    /*interface Vector {
        x: number;
        y: number;
    }*/

    function testStroke(): void {
        //crc2.fillStyle = "#74847e";
        //crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        let radius: number = 500;

        let angle: number = Math.atan2(100, 300) + Math.PI / 2;
        let gx: number = radius * Math.cos(angle);
        let gy: number = radius * Math.sin(angle);
        let cx: number = (0 + 300) / 2;
        let cy: number = (100 + 200) / 2;

        /*let sizeCircle: number = Math.floor(Math.random() * 150);
        let xCircle: number = Math.floor(Math.random() * crc2.canvas.width);
        let yCircle: number = Math.floor(Math.random() * crc2.canvas.height);*/

        let bezierCpx1: number = Math.floor(Math.random() * 20);
        let bezierCpy1: number = Math.floor(Math.random() * 150);
        let bezierCpx2: number = Math.floor(Math.random() * 500);
        let bezierCpy2: number = Math.floor(Math.random() * 20);
        let bezierX: number = crc2.canvas.width;
        let bezierY: number = crc2.canvas.width;

        let rgba1: number = Math.floor(Math.random() * 255);
        let rgba2: number = Math.floor(Math.random() * 255);
        let rgba3: number = Math.floor(Math.random() * 255);

        let color1: string = "RGB" + "(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";
        console.log(color1);



        let gradientCircle: CanvasGradient = crc2.createLinearGradient(cx - gx, cy - gy, cx + gx, cy + gy);


        crc2.beginPath();
        crc2.lineWidth = 5;
        crc2.bezierCurveTo(bezierCpx1, bezierCpy1, bezierCpx2, bezierCpy2, bezierX, bezierY);
        gradientCircle.addColorStop(0, color1);
        gradientCircle.addColorStop(0.5, color1);
        gradientCircle.addColorStop(1, color1);
        crc2.fillStyle = gradientCircle;
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

    }

    function testGradient(): void {

        let radius: number = 500;

        let angle: number = Math.atan2(100, 300) + Math.PI / 2;
        let gx: number = radius * Math.cos(angle);
        let gy: number = radius * Math.sin(angle);
        let cx: number = (0 + 300) / 2;
        let cy: number = (100 + 200) / 2;

        //let myGradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 800);
        let myGradient: CanvasGradient = crc2.createLinearGradient(cx - gx, cy - gy, cx + gx, cy + gy);

        myGradient.addColorStop(0, "#0083bc");
        myGradient.addColorStop(1, "#41ff7b");
        myGradient.addColorStop(0.5, "#00bc97");
        crc2.fillStyle = myGradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }

    function test3(): void {

        for (let i: number = 0; i < 10; i++) {

            let radius: number = 500;

            let angle: number = Math.atan2(100, 300) + Math.PI / 2;
            let gx: number = radius * Math.cos(angle);
            let gy: number = radius * Math.sin(angle);
            let cx: number = (0 + 300) / 2;
            let cy: number = (100 + 200) / 2;

            let sizeCircle: number = Math.floor(Math.random() * 150);
            let xCircle: number = Math.floor(Math.random() * crc2.canvas.width);
            let yCircle: number = Math.floor(Math.random() * crc2.canvas.height);

            let rgba1: number = Math.floor(Math.random() * 255);
            let rgba2: number = Math.floor(Math.random() * 255);
            let rgba3: number = Math.floor(Math.random() * 255);

            let color1: string = "RGB" + "(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";
            console.log(color1);



            let gradientCircle: CanvasGradient = crc2.createLinearGradient(cx - gx, cy - gy, cx + gx, cy + gy);


            crc2.beginPath();
            crc2.arc(xCircle, yCircle, sizeCircle, 0, 2 * Math.PI);
            crc2.arc(xCircle, yCircle, sizeCircle, 0, 2 * Math.PI);
            crc2.arc(xCircle, yCircle, sizeCircle, 0, 2 * Math.PI);
            crc2.arc(xCircle, yCircle, sizeCircle, 0, 2 * Math.PI);
            gradientCircle.addColorStop(0, color1);
            gradientCircle.addColorStop(0.5, color1);
            gradientCircle.addColorStop(1, color1);
            crc2.fillStyle = gradientCircle;
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

    }

    function testTriangle(): void {

        let rgba1: number = Math.floor(Math.random() * 255);
        let rgba2: number = Math.floor(Math.random() * 255);
        let rgba3: number = Math.floor(Math.random() * 255);

        let x: number = Math.floor(Math.random() * crc2.canvas.width);
        let y: number = Math.floor(Math.random() * crc2.canvas.height);


        let color1: string = "RGB" + "(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";

        crc2.beginPath();
        crc2.moveTo(100, 100);
        crc2.lineTo(100, 300);
        crc2.lineTo(x, y);
        crc2.fillStyle = color1;
        crc2.fill();
        crc2.closePath();
    }

    function testTriangle2(): void {

        for (let i: number = 0; i < 20; i++) {
            let rgba1: number = Math.floor(Math.random() * 255);
            let rgba2: number = Math.floor(Math.random() * 255);
            let rgba3: number = Math.floor(Math.random() * 255);

            let x: number = Math.floor(Math.random() * crc2.canvas.width);
            let y: number = Math.floor(Math.random() * crc2.canvas.height);


            let color1: string = "RGB" + "(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";

            crc2.beginPath();
            crc2.moveTo(100, 100);
            crc2.lineTo(100, 300);
            crc2.lineTo(x, y);
            crc2.fillStyle = color1;
            crc2.fill();
            crc2.closePath();
        }
    }

}