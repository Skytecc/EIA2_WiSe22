"use strict";
var L11;
(function (L11) {
    class Moveable {
        position;
        velocity;
        expendable = false;
        constructor(_position, _velocitiy) {
            this.position = _position;
            this.velocity = _velocitiy;
        }
        move() {
            //move Methode 
        }
        draw() {
            //draw Methode
        }
    }
    L11.Moveable = Moveable;
})(L11 || (L11 = {}));
//# sourceMappingURL=moveable.js.map