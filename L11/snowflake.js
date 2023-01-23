"use strict";
var L11;
(function (L11) {
    class Snowflakes extends L11.Moveable {
        /*   numberParticles: number;
  
          horizon: number; */
        size;
        constructor(_position, _velocity, _size, _horizon, _numberParticle) {
            super(_position, _velocity);
            this.size = _size;
            /* this.horizon = _horizon;
            this.numberParticles = _numberParticle; */
            //this.gradient = _gradient;
        }
        draw() {
            console.log("Hello Method drawSnowflake");
            let radiusParticle = this.size;
            let particle = new Path2D();
            let gradientSnow = L11.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            //particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradientSnow.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradientSnow.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L11.crc2.save();
            L11.crc2.translate(this.position.x, this.position.y);
            L11.crc2.beginPath();
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            L11.crc2.closePath();
            L11.crc2.fillStyle = gradientSnow;
            L11.crc2.fill(particle);
            L11.crc2.restore();
        }
        move() {
            console.log("Hello Method, moveSnowflake");
            this.position.y++;
            /* let offset: Vector2 = new Vector2(this.velocity.y, 0);
            offset.scale(_timeslice);
            this.position.add(offset); */
            if (this.position.y > L11.crc2.canvas.height) {
                this.position.y -= L11.crc2.canvas.height;
            }
        }
    }
    L11.Snowflakes = Snowflakes;
})(L11 || (L11 = {}));
//# sourceMappingURL=snowflake.js.map