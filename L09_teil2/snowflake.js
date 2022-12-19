"use strict";
var L09_Part2;
(function (L09_Part2) {
    class Snowflakes {
        position;
        velocity;
        size;
        //gradient: CanvasGradient;
        /*  constructor(_position: Vector, _velocity: Vector, _size: number, _horizon: number) {
 
             this.position = new Vector2(_position.x, _position.y);
             this.velocity = new Vector2(_velocity.x, _velocity.y);
             //this.position = _position;
             //this.velocity = _velocity;
             this.size = _size;
 
             //this.gradient = _gradient;
 
 
         } */
        constructor(_position, _velocity, _size) {
            this.position = new L09_Part2.Vector2(_position.x, _position.y);
            this.velocity = new L09_Part2.Vector2(_velocity.x, _velocity.y);
            /* this.position = _position;
            this.velocity = _velocity; */
            this.size = _size;
            //this.gradient = _gradient;
        }
        drawSnowflakes(_numberParticles, _horizon) {
            console.log("Hello Method drawSnowflake");
            /*  let radiusParticle: number = this.size;
 
             this.gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
 
             _particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
             this.gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
             this.gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
 
             crc2.save();
             //crc2.translate(this.position.x, this.position.y);
 
             crc2.fillStyle = this.gradient;
 
             crc2.save();
             //crc2.translate(_x, _y);
             crc2.translate(this.position.x, this.position.y);
             crc2.fill(_particle);
             crc2.restore(); */
            let radiusParticle = this.size;
            let particle = new Path2D();
            let gradientSnow = L09_Part2.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            //particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradientSnow.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradientSnow.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L09_Part2.crc2.save();
            L09_Part2.crc2.translate(this.position.x, this.position.y);
            L09_Part2.crc2.beginPath();
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            L09_Part2.crc2.closePath();
            L09_Part2.crc2.fillStyle = gradientSnow;
            L09_Part2.crc2.fill(particle);
            L09_Part2.crc2.restore();
        }
        moveSnowflake() {
            console.log("Hello Method, moveSnowflake");
            this.position.y++;
            /* let offset: Vector2 = new Vector2(this.velocity.y, 0);
            offset.scale(_timeslice);
            this.position.add(offset); */
            if (this.position.y > L09_Part2.crc2.canvas.height) {
                this.position.y -= L09_Part2.crc2.canvas.height;
            }
        }
    }
    L09_Part2.Snowflakes = Snowflakes;
})(L09_Part2 || (L09_Part2 = {}));
//# sourceMappingURL=snowflake.js.map