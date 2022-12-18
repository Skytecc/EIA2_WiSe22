namespace L09_Part2 {

    export class Birds {

        position: Vector2;

        velocity: number;

        color: string;

        size: number;

        constructor(_position: Vector, _velocity: number, _size: number, _color: string) {
            this.position = new Vector2(_position.x, _position.y);
            this.velocity = _velocity;
            this.color = _color;
            this.size = _size;
        }

        drawArc(_x: number, _y: number, _radius: number, _startAngle: number, _endAngle: number, _color: string): void {
            crc2.beginPath();
            crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
            crc2.fillStyle = _color;
            crc2.fill();
            crc2.closePath();
        }

        drawEllipse(_x: number, _y: number, _radiusX: number, _radiusY: number, _rotation: number, _startAngle: number, _endAngle: number, _counterclockwise: boolean, _color: string): void {

            crc2.beginPath();
            crc2.ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _counterclockwise);
            crc2.fillStyle = _color;
            crc2.fill();
            crc2.closePath();

        }

        drawRect(_position: Vector, _size: Vector, _color: string): void {

            crc2.beginPath();
            crc2.fillStyle = _color;
            crc2.fillRect(_position.x, _position.y, _size.x, _size.y);
            crc2.fill();
            crc2.closePath();
        }

        drawTriangle(_moveTo: Vector, _lineTo1: Vector, _lineTo2: Vector, _lineTo3: Vector, _color: string): void {

            crc2.beginPath();
            crc2.moveTo(_moveTo.x, _moveTo.y);
            crc2.lineTo(_lineTo1.x, _lineTo1.y);
            crc2.lineTo(_lineTo2.x, _lineTo2.y);
            crc2.lineTo(_lineTo3.x, _lineTo3.y);
            crc2.fillStyle = _color;
            crc2.fill();
            crc2.closePath();

        }

        drawBirds(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            // Bird Head
            this.drawArc(15, 40, 20, 0, 2 * Math.PI * 2, this.color);

            //Feet
            this.drawRect({ x: 30, y: 72 }, { x: 3, y: 25 }, "black");
            this.drawRect({ x: 15, y: 70 }, { x: 3, y: 25 }, "black");

            //Body
            this.drawEllipse(25, 65, 30, 20, Math.PI * 0.20, 0, Math.PI * 360, false, this.color);

            //Eye
            this.drawArc(15, 33, 3, 0, 2 * Math.PI * 2, "black");

            //Mouth
            this.drawTriangle({ x: 0, y: 50 }, { x: -20, y: 40 }, { x: 0, y: 30 }, { x: 0, y: 0 }, "yellow");

            crc2.restore();

        }

        moveBirds(): void {

            console.log("Hello Method, moveBirds");

            this.position.x -= this.velocity;

            /* let offset: Vector2 = new Vector2(this.velocity.y, 0);
            offset.scale(_timeslice);
            this.position.add(offset); */

            if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;
            }
    }

}

}