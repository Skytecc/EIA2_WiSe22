"use strict";
var L11;
(function (L11) {
    class FlyingBirds extends L11.Moveable {
        color;
        size;
        constructor(_position, _velocity, _size, _color) {
            super(_position, _velocity);
            this.color = _color;
            this.size = _size;
        }
        drawArc(_x, _y, _radius, _startAngle, _endAngle, _color) {
            L11.crc2.beginPath();
            L11.crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
            L11.crc2.fillStyle = _color;
            L11.crc2.fill();
            L11.crc2.closePath();
        }
        drawEllipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _counterclockwise, _color) {
            L11.crc2.beginPath();
            L11.crc2.ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _counterclockwise);
            L11.crc2.fillStyle = _color;
            L11.crc2.fill();
            L11.crc2.closePath();
        }
        drawRect(_position, _size, _color) {
            L11.crc2.beginPath();
            L11.crc2.fillStyle = _color;
            L11.crc2.fillRect(_position.x, _position.y, _size.x, _size.y);
            L11.crc2.fill();
            L11.crc2.closePath();
        }
        drawTriangle(_moveTo, _lineTo1, _lineTo2, _lineTo3, _color) {
            L11.crc2.beginPath();
            L11.crc2.moveTo(_moveTo.x, _moveTo.y);
            L11.crc2.lineTo(_lineTo1.x, _lineTo1.y);
            L11.crc2.lineTo(_lineTo2.x, _lineTo2.y);
            L11.crc2.lineTo(_lineTo3.x, _lineTo3.y);
            L11.crc2.fillStyle = _color;
            L11.crc2.fill();
            L11.crc2.closePath();
        }
        draw() {
            L11.crc2.save();
            L11.crc2.translate(this.position.x, this.position.y);
            // Bird Head
            this.drawArc(15, 40, 20, 0, 2 * Math.PI * 2, this.color);
            //Body
            this.drawEllipse(25, 65, 30, 20, Math.PI * 0.20, 0, Math.PI * 360, false, this.color);
            //Eye
            this.drawArc(15, 33, 3, 0, 2 * Math.PI * 2, "black");
            //Mouth
            this.drawTriangle({ x: 0, y: 50 }, { x: -20, y: 40 }, { x: 0, y: 30 }, { x: 0, y: 0 }, "yellow");
            L11.crc2.restore();
        }
        move() {
            console.log("Hello Method, moveBirds");
            this.position.x -= this.velocity;
            if (this.position.x < 0) {
                this.position.x += L11.crc2.canvas.width;
            }
        }
    }
    L11.FlyingBirds = FlyingBirds;
})(L11 || (L11 = {}));
//# sourceMappingURL=flyingBird.js.map