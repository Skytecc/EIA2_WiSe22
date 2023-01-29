namespace L11 {
    export abstract class Moveable {

        position: Vector2;
        velocity: number;
        expendable: boolean = false;

        constructor(_position: Vector2, _velocitiy: number) {
            this.position = _position;
            this.velocity = _velocitiy;

        }

        abstract move(): void;

        abstract draw(): void;


    }
}