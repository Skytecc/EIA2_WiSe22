namespace L10_Part2 {
    export abstract class Moveable {

        position: Vector2;
        velocity: number;

        constructor(_position: Vector2, _velocitiy: number) {
            this.position = _position;
            this.velocity = _velocitiy;

        }

        move(): void {
            //move Methode 
        }

        draw(): void {
            //draw Methode
        }


    }
}