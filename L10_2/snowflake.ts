namespace L10_Part2 {

    export class Snowflakes extends Moveable {

        numberParticles: number;

        horizon: number;

        size: number;

        constructor( _position: Vector2, _velocity: number, _size: number, _horizon: number, _numberParticle: number) {

            super(_position, _velocity);

            this.horizon = _horizon;
            this.size = _size;
            this.numberParticles = _numberParticle;

        }

        draw(): void {

            console.log("Hello Method drawSnowflake");

            let radiusParticle: number = this.size;

            let particle: Path2D = new Path2D();
            let gradientSnow: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            //particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradientSnow.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradientSnow.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = gradientSnow;
            crc2.fill(particle);
            crc2.restore();

        }

        move(): void {

            console.log("Hello Method, moveSnowflake");

            this.position.y++;

            /* let offset: Vector2 = new Vector2(this.velocity.y, 0);
            offset.scale(_timeslice);
            this.position.add(offset); */

            if (this.position.y > crc2.canvas.height) {
                this.position.y -= crc2.canvas.height;
            }

        }


    }
}