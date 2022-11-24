namespace L08_Canvas {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("#c");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    var my_gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(1, "white");

    crc2.fillStyle = my_gradient;
}