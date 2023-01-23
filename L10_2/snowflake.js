"use strict";
var L10_Part2;
(function (L10_Part2) {
    class Snowflakes extends L10_Part2.Moveable {
        numberParticles;
        horizon;
        size;
        constructor(_position, _velocity, _size, _horizon, _numberParticle) {
            super(_position, _velocity);
            this.horizon = _horizon;
            this.size = _size;
            this.numberParticles = _numberParticle;
        }
        draw() {
            console.log("Hello Method drawSnowflake");
            let radiusParticle = this.size;
            let particle = new Path2D();
            let gradientSnow = L10_Part2.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            //particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradientSnow.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradientSnow.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L10_Part2.crc2.save();
            L10_Part2.crc2.translate(this.position.x, this.position.y);
            L10_Part2.crc2.beginPath();
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            L10_Part2.crc2.closePath();
            L10_Part2.crc2.fillStyle = gradientSnow;
            L10_Part2.crc2.fill(particle);
            L10_Part2.crc2.restore();
        }
        move() {
            console.log("Hello Method, moveSnowflake");
            this.position.y++;
            /* let offset: Vector2 = new Vector2(this.velocity.y, 0);
            offset.scale(_timeslice);
            this.position.add(offset); */
            if (this.position.y > L10_Part2.crc2.canvas.height) {
                this.position.y -= L10_Part2.crc2.canvas.height;
            }
        }
    }
    L10_Part2.Snowflakes = Snowflakes;
})(L10_Part2 || (L10_Part2 = {}));
//# sourceMappingURL=snowflake.js.map