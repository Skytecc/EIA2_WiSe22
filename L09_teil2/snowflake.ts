namespace L09_Part2 {

    export class Snowflakes {

        position: Vector2;

        velocity: Vector2;

        size: number;

        //gradient: CanvasGradient;

       /*  constructor(_position: Vector, _velocity: Vector, _size: number, _horizon: number) {

            this.position = new Vector2(_position.x, _position.y);
            this.velocity = new Vector2(_velocity.x, _velocity.y);
            //this.position = _position;
            //this.velocity = _velocity; 
            this.size = _size;

            //this.gradient = _gradient;


        } */

        constructor( _position: Vector, _velocity: Vector, _size: number, _horizon: number) {

            this.position = new Vector2(_position.x, _position.y);
            this.velocity = new Vector2(_position.x, _position.y);
            /* this.position = _position;
            this.velocity = _velocity; */
            this.size = _size;

            //this.gradient = _gradient;


        }

        drawSnowflakes(_numberParticles: number, _horizon: number): void {

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

        moveSnowflake(_timeslice: number): void {

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