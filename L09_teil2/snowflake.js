"use strict";
var L09_Part2;
(function (L09_Part2) {
    class Snowflakes {
        position;
        velocity;
        size;
        constructor(_position, _velocity, _size, _horizon) {
            this.position = _position;
            this.velocity = _velocity;
            this.size = _size;
        }
        drawSnowflakes() {
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradientSnow = L09_Part2.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradientSnow.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradientSnow.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L09_Part2.crc2.save();
            L09_Part2.crc2.translate(this.position.x, this.position.y);
            L09_Part2.crc2.fillStyle = gradientSnow;
        }
        moveSowflake(_timeslice) {
            this.position.y--;
        }
    }
    L09_Part2.Snowflakes = Snowflakes;
})(L09_Part2 || (L09_Part2 = {}));
//# sourceMappingURL=snowflake.js.map