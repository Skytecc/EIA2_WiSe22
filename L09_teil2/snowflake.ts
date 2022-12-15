namespace L09_Part2 {

    export class Snowflakes {

        position: Vector;

        velocity: Vector;

        size: number;

        constructor(_position: Vector, _velocity: Vector, _size: number, _horizon: number) {

            this.position = _position;
            this.velocity = _velocity;
            this.size = _size;


        }

        drawSnowflakes(): void {


            let radiusParticle: number = 20;

            let particle: Path2D = new Path2D();
            let gradientSnow: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradientSnow.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradientSnow.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = gradientSnow;


        }

        moveSowflake(_timeslice: number): void {

            this.position.y--;

        }


    }
}