"use strict";
var L02_Event_Inspector;
(function (L02_Event_Inspector) {
    console.log("Start");
    let infoString;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let button = document.getElementById("button");
        let div0 = document.getElementById("div0");
        let div1 = document.getElementById("div1");
        //let span1: HTMLElement = <HTMLElement>document.getElementById("span1");
        document.addEventListener("click", logInfo);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);
        document.addEventListener("mousemove", setInfoBox);
    }
    function logInfo(_event) {
        console.log(_event);
    }
    function setInfoBox(_event) {
        //console.log(_event);
        let x = _event.offsetX;
        let y = _event.offsetY;
        let xPosition = _event.clientX;
        let yPostion = _event.clientY;
        let coor = "(" + String(yPostion) + String(xPosition) + ")";
        //console.log(xPosition + yPostion);
        let info = _event.target;
        let infoBox = document.createElement("span");
        info.appendChild(infoBox);
        infoString = coor;
        infoBox.textContent = infoString;
        infoBox.style.top = y + "px";
        infoBox.style.left = x + "px";
        info.addEventListener("mousemove", removePosition);
    }
    function removePosition(_event) {
        let target = _event.target;
        let parent = target.parentNode;
        parent.removeChild(target);
    }
})(L02_Event_Inspector || (L02_Event_Inspector = {}));
//# sourceMappingURL=script.js.map